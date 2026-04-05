(function initBiogyLabSession() {
  const authStorageKey = 'userInfo';
  const fieldSelector = 'input:not([type="hidden"]):not([type="button"]):not([type="submit"]), textarea, select';
  const autosaveDelayMs = 500;

  const body = document.body;

  if (!body || !body.dataset.activityId) {
    return;
  }

  const activityId = body.dataset.activityId;
  const activityTitle = body.dataset.activityTitle || document.title;
  const teacherPassword = body.dataset.teacherPassword || '';
  const apiBaseUrl = (() => {
    if (body.dataset.apiBase) {
      return body.dataset.apiBase;
    }

    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5000/api';
    }

    return '/api';
  })();
  const draftKey = `biogy:lab:${activityId}:draft`;
  const teacherKey = `biogy:lab:${activityId}:teacher`;

  let autosaveTimer = null;
  let messageTimer = null;

  const safeJsonParse = (value) => {
    try {
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  };

  const escapeHtml = (value) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const getAuth = () => safeJsonParse(localStorage.getItem(authStorageKey));
  const persistAuth = (value) => {
    if (value?.token) {
      localStorage.setItem(authStorageKey, JSON.stringify(value));
    }
  };
  const clearAuth = () => localStorage.removeItem(authStorageKey);

  const isTeacherUnlocked = () => sessionStorage.getItem(teacherKey) === 'unlocked';

  const findQuestionCard = (questionNumber) => Array.from(document.querySelectorAll('.card'))
    .find((card) => card.querySelector('.q-num')?.textContent.trim() === String(questionNumber));

  const ensureElementId = (element, nextId) => {
    if (element && !element.id) {
      element.id = nextId;
    }
  };

  const normalizeGoodBadSelect = (select) => {
    if (!select) {
      return;
    }

    const options = Array.from(select.options);

    if (options[0]) {
      options[0].value = '';
    }
    if (options[1]) {
      options[1].value = 'good';
    }
    if (options[2]) {
      options[2].value = 'bad';
    }
  };

  const assignActivityFieldIds = () => {
    const q2Card = findQuestionCard(2);
    ensureElementId(q2Card?.querySelector('textarea.student-answer'), 'q2-reasoning');

    const q8Card = findQuestionCard(8);
    ensureElementId(q8Card?.querySelector('textarea.student-answer'), 'q8-analysis');

    const q9Card = findQuestionCard(9);
    ensureElementId(q9Card?.querySelector('textarea.student-answer'), 'q9-conclusion');

    const q10Rows = Array.from(document.querySelectorAll('.source-table tbody tr'));
    const q10Ids = [
      ['q10-balance-source', 'q10-balance-type'],
      ['q10-rincage-source', 'q10-rincage-type'],
      ['q10-pipetage-source', 'q10-pipetage-type'],
      ['q10-temperature-source', 'q10-temperature-type'],
      ['q10-lecture-source', 'q10-lecture-type'],
    ];

    q10Rows.forEach((row, index) => {
      const [sourceId, typeId] = q10Ids[index] || [];
      const [sourceField, typeField] = row.querySelectorAll('textarea');

      ensureElementId(sourceField, sourceId);
      ensureElementId(typeField, typeId);
    });

    const q12Card = findQuestionCard(12);
    if (q12Card) {
      const caseIds = ['a', 'b', 'c', 'd'];
      const caseCards = Array.from(q12Card.querySelectorAll('.jf-card'));

      caseCards.forEach((caseCard, index) => {
        const [justesseSelect, fideliteSelect] = caseCard.querySelectorAll('select');
        const caseId = caseIds[index];

        ensureElementId(justesseSelect, `q12-case-${caseId}-justesse`);
        ensureElementId(fideliteSelect, `q12-case-${caseId}-fidelite`);
        normalizeGoodBadSelect(justesseSelect);
        normalizeGoodBadSelect(fideliteSelect);
      });

      ensureElementId(q12Card.querySelector('textarea.student-answer'), 'q12-own-analysis');
    }
  };

  const getFields = () => Array.from(document.querySelectorAll(fieldSelector))
    .filter((field) => !field.closest('[data-biogy-runtime="ignore"]'));

  const ensureFieldKeys = () => {
    getFields().forEach((field, index) => {
      if (!field.dataset.biogyKey) {
        field.dataset.biogyKey = field.id || field.name || `field-${index + 1}`;
      }
    });
  };

  const setFieldValue = (field, value) => {
    if (field.tagName === 'TEXTAREA' || field.tagName === 'SELECT') {
      field.value = value;
      return;
    }

    if (field.type === 'checkbox' || field.type === 'radio') {
      field.checked = Boolean(value);
      return;
    }

    field.value = value;
  };

  const collectFields = () => {
    ensureFieldKeys();

    return getFields().reduce((result, field) => {
      const key = field.dataset.biogyKey;
      let value = '';

      if (field.type === 'checkbox' || field.type === 'radio') {
        value = field.checked;
      } else {
        value = field.value;
      }

      result[key] = value;
      return result;
    }, {});
  };

  const countAnsweredFields = (fields) => Object.values(fields).filter((value) => {
    if (typeof value === 'boolean') {
      return value;
    }

    return String(value || '').trim() !== '';
  }).length;

  const collectState = () => {
    const fields = collectFields();

    return {
      savedAt: new Date().toISOString(),
      fields,
      answerCount: countAnsweredFields(fields),
      fieldCount: Object.keys(fields).length,
      targetPoints: typeof window.biogyGetTargetPoints === 'function' ? window.biogyGetTargetPoints() : [],
    };
  };

  const syncDerivedWidgets = () => {
    if (typeof window.updateMean === 'function') {
      window.updateMean();
    }

    if (typeof window.renderTarget === 'function') {
      window.renderTarget();
    }
  };

  const restoreState = (state) => {
    if (!state || typeof state !== 'object') {
      return;
    }

    ensureFieldKeys();
    const fields = state.fields || {};

    getFields().forEach((field) => {
      const key = field.dataset.biogyKey;
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        setFieldValue(field, fields[key]);
      }
    });

    if (Array.isArray(state.targetPoints) && typeof window.biogySetTargetPoints === 'function') {
      window.biogySetTargetPoints(state.targetPoints);
    }
    syncDerivedWidgets();
  };

  const saveDraft = (message) => {
    const state = collectState();
    localStorage.setItem(draftKey, JSON.stringify(state));
    updateMessage(message || `Brouillon enregistré à ${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}.`, 'info');
    updateSessionPills(state);
    return state;
  };

  const scheduleAutosave = () => {
    clearTimeout(autosaveTimer);
    autosaveTimer = setTimeout(() => saveDraft('Brouillon enregistré automatiquement.'), autosaveDelayMs);
  };

  const escapeAttributeValue = (value) => String(value).replace(/"/g, '&quot;');

  const removeRuntimeElements = (root) => {
    root.querySelectorAll('[data-biogy-runtime]').forEach((element) => element.remove());
    root.querySelectorAll('script').forEach((element) => element.remove());
    root.querySelectorAll('link[href$="lab-session.css"]').forEach((element) => element.remove());
  };

  const createReadonlySubmissionHtml = (userInfo) => {
    ensureFieldKeys();

    const clone = document.documentElement.cloneNode(true);
    const cloneBody = clone.querySelector('body');
    const cloneHead = clone.querySelector('head');

    removeRuntimeElements(clone);

    if (cloneBody) {
      cloneBody.classList.remove('prof-mode');
    }

    const modeBanner = clone.querySelector('#modeBanner');
    if (modeBanner) {
      modeBanner.classList.remove('visible');
    }

    const sourceFields = getFields();
    sourceFields.forEach((field) => {
      const key = field.dataset.biogyKey;
      const cloneField = clone.querySelector(`[data-biogy-key="${escapeAttributeValue(key)}"]`);

      if (!cloneField) {
        return;
      }

      if (cloneField.tagName === 'TEXTAREA') {
        cloneField.textContent = field.value;
        cloneField.value = field.value;
      } else if (cloneField.tagName === 'SELECT') {
        Array.from(cloneField.options).forEach((option) => {
          option.selected = option.value === field.value;
        });
      } else if (cloneField.type === 'checkbox' || cloneField.type === 'radio') {
        cloneField.checked = field.checked;
      } else {
        cloneField.setAttribute('value', field.value);
        cloneField.value = field.value;
      }

      cloneField.setAttribute('readonly', 'readonly');
      cloneField.setAttribute('data-biogy-exported', 'true');
    });

    const exportStyle = document.createElement('style');
    exportStyle.textContent = `
      input, textarea, select, button { pointer-events: none !important; }
      .biogy-submission-banner { max-width: 960px; margin: 0 auto 20px; padding: 18px 22px; border-radius: 16px; border: 1px solid #d9e9ee; background: #f3fbfd; color: #1f4250; font-family: 'IBM Plex Sans', sans-serif; box-shadow: 0 10px 24px rgba(27, 46, 74, 0.07); }
      .biogy-submission-banner h2 { margin: 0 0 6px; font-size: 20px; color: #18323f; }
      .biogy-submission-banner p { margin: 0; font-size: 14px; line-height: 1.7; }
    `;

    cloneHead.appendChild(exportStyle);

    const infoBanner = document.createElement('div');
    infoBanner.className = 'biogy-submission-banner';
    infoBanner.innerHTML = `
      <h2>${activityTitle}</h2>
      <p>Copie envoyée par <strong>${userInfo.username}</strong> le ${new Date().toLocaleString('fr-FR')}.</p>
    `;

    cloneBody.insertBefore(infoBanner, cloneBody.firstChild);

    return `<!DOCTYPE html>\n${clone.outerHTML}`;
  };

  const downloadFilledCopy = () => {
    const userInfo = getAuth() || { username: 'copie-eleve' };
    const html = createReadonlySubmissionHtml(userInfo);
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `${activityId}-${userInfo.username}.html`;
    link.click();

    URL.revokeObjectURL(url);
    updateMessage('Copie téléchargée sur cet appareil.', 'success');
  };

  const redirectToLogin = () => {
    saveDraft('Brouillon enregistré avant la connexion.');
    window.location.assign(`/#/login?redirect=${encodeURIComponent(window.location.pathname)}`);
  };

  const submitCopy = async () => {
    const userInfo = getAuth();

    if (!userInfo?.token) {
      updateMessage('Connecte-toi pour envoyer ta copie. Ton brouillon a été conservé.', 'info');
      redirectToLogin();
      return;
    }

    const state = saveDraft('Préparation de la copie...');
    const payload = {
      activityId,
      activityTitle,
      pagePath: window.location.pathname,
      answerCount: state.answerCount,
      fieldCount: state.fieldCount,
      formState: state,
      submissionHtml: createReadonlySubmissionHtml(userInfo),
    };

    try {
      updateMessage('Envoi de la copie en cours...', 'info');

      const response = await fetch(`${apiBaseUrl}/lab/submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (response.status === 401) {
        updateMessage('La session a expiré. Reconnecte-toi pour envoyer ta copie.', 'error');
        redirectToLogin();
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l envoi de la copie.');
      }

      localStorage.setItem(`biogy:lab:${activityId}:last-submission`, JSON.stringify({
        submittedAt: new Date().toISOString(),
        username: userInfo.username,
      }));

      updateMessage('Copie envoyée avec succès. Elle est maintenant disponible dans le tableau de correction.', 'success');
    } catch (error) {
      console.error(error);
      updateMessage(error.message || 'Erreur lors de l envoi de la copie.', 'error');
    }
  };

  const unlockTeacherMode = () => {
    const typedPassword = window.prompt('Mot de passe professeur');

    if (typedPassword === null) {
      return;
    }

    if (typedPassword !== teacherPassword) {
      window.alert('Mot de passe incorrect.');
      return;
    }

    sessionStorage.setItem(teacherKey, 'unlocked');

    if (typeof window.__biogyOriginalToggleProf === 'function') {
      window.__biogyOriginalToggleProf();
    }

    updateTeacherStatus();
    updateMessage('Mode professeur activé pour cette session.', 'success');
  };

  const wrapTeacherMode = () => {
    if (typeof window.toggleProf !== 'function') {
      return;
    }

    window.__biogyOriginalToggleProf = window.toggleProf;

    window.toggleProf = () => {
      if (document.body.classList.contains('prof-mode')) {
        window.__biogyOriginalToggleProf();
        updateTeacherStatus();
        return;
      }

      if (isTeacherUnlocked()) {
        window.__biogyOriginalToggleProf();
        updateTeacherStatus();
        return;
      }

      unlockTeacherMode();
    };
  };

  const toolbar = document.createElement('section');
  toolbar.className = 'biogy-session-toolbar';
  toolbar.dataset.biogyRuntime = 'toolbar';
  toolbar.innerHTML = `
    <div class="biogy-session-toolbar__inner">
      <div class="biogy-session-toolbar__row">
        <div class="biogy-session-toolbar__meta">
          <a class="biogy-session-pill biogy-session-pill--brand" href="/#/laboratoire">Biogy laboratoire</a>
          <div class="biogy-session-pill biogy-session-pill--auth" id="biogyAuthPill">Connexion non requise pour travailler</div>
          <div class="biogy-session-pill biogy-session-pill--teacher" id="biogyTeacherPill">Mode professeur verrouillé</div>
        </div>
        <div class="biogy-session-toolbar__actions">
          <button type="button" class="biogy-session-button biogy-session-button--ghost" id="biogySaveButton">Sauvegarder</button>
          <button type="button" class="biogy-session-button biogy-session-button--secondary" id="biogyDownloadButton">Télécharger ma copie</button>
          <button type="button" class="biogy-session-button biogy-session-button--primary" id="biogySubmitButton">Envoyer ma copie</button>
        </div>
      </div>
      <div class="biogy-session-toolbar__help">
        <span>La séance reste utilisable sans compte tant que tu ne demandes pas l envoi.</span>
        <span>Le brouillon est conservé automatiquement sur cet appareil.</span>
      </div>
    </div>
  `;

  const messageHost = document.createElement('div');
  messageHost.className = 'biogy-session-message-host';
  messageHost.dataset.biogyRuntime = 'message-host';

  const messageElement = document.createElement('div');
  messageElement.className = 'biogy-session-message';
  messageElement.id = 'biogySessionMessage';
  messageHost.appendChild(messageElement);

  const introBanner = document.createElement('div');
  introBanner.className = 'biogy-session-banner';
  introBanner.dataset.biogyRuntime = 'banner';
  introBanner.innerHTML = `
    <strong>Séance Biogy prête pour la classe.</strong>
    Les élèves peuvent compléter toute l activité sans connexion, puis s authentifier uniquement au moment de l envoi de la copie.
  `;

  const authPill = toolbar.querySelector('#biogyAuthPill');
  const teacherPill = toolbar.querySelector('#biogyTeacherPill');
  const headerAuthDesktop = document.querySelector('#biogyHeaderAuthDesktop');
  const headerAuthMobile = document.querySelector('#biogyHeaderAuthMobile');
  const headerMenuToggle = document.querySelector('#biogyNavToggle');
  const headerMobileMenu = document.querySelector('#biogyNavMobileMenu');

  document.querySelectorAll('.site-nav-link[href="/#/actualites"], .site-mobile-link[href="/#/actualites"]').forEach((link) => {
    link.textContent = 'Actualités';
  });

  function hideMessage() {
    messageElement.textContent = '';
    messageElement.className = 'biogy-session-message';
  }

  function updateMessage(message, tone, options = {}) {
    const persist = options.persist ?? tone === 'error';

    clearTimeout(messageTimer);
    messageElement.textContent = message;
    messageElement.className = `biogy-session-message biogy-session-message--${tone} is-visible`;

    if (!persist) {
      const lastMessage = message;
      messageTimer = window.setTimeout(() => {
        if (messageElement.textContent === lastMessage) {
          hideMessage();
        }
      }, 4200);
    }
  }

  function updateSessionPills(state) {
    const userInfo = getAuth();
    const lastSubmission = safeJsonParse(localStorage.getItem(`biogy:lab:${activityId}:last-submission`));

    if (userInfo?.username) {
      authPill.textContent = `Connecté : ${userInfo.username}`;
    } else {
      authPill.textContent = 'Connexion non requise pour travailler';
    }

    if (state) {
      const answered = `${state.answerCount}/${state.fieldCount || 0}`;
      authPill.textContent += ` · ${answered} champs renseignés`;
    }

    if (lastSubmission?.submittedAt) {
      authPill.textContent += ` · Dernier envoi ${new Date(lastSubmission.submittedAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`;
    }
  }

  function updateTeacherStatus() {
    if (document.body.classList.contains('prof-mode')) {
      teacherPill.textContent = 'Mode professeur actif';
      teacherPill.classList.add('is-unlocked');
      return;
    }

    if (isTeacherUnlocked()) {
      teacherPill.textContent = 'Mode professeur déverrouillé';
      teacherPill.classList.add('is-unlocked');
      return;
    }

    teacherPill.textContent = 'Mode professeur verrouillé';
    teacherPill.classList.remove('is-unlocked');
  }

  function updateSessionPills(state) {
    const userInfo = getAuth();
    const lastSubmission = safeJsonParse(localStorage.getItem(`biogy:lab:${activityId}:last-submission`));

    if (userInfo?.username) {
      authPill.textContent = `Connecté : ${userInfo.username}`;
    } else {
      authPill.textContent = 'Connexion non requise pour travailler';
    }

    if (state) {
      const answered = `${state.answerCount}/${state.fieldCount || 0}`;
      authPill.textContent += ` · ${answered} champs renseignés`;
    }

    if (lastSubmission?.submittedAt) {
      authPill.textContent += ` · Dernier envoi ${new Date(lastSubmission.submittedAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`;
    }
  }

  function setHeaderMenuState(isOpen) {
    if (!headerMenuToggle || !headerMobileMenu) {
      return;
    }

    headerMenuToggle.setAttribute('aria-expanded', String(isOpen));
    headerMobileMenu.hidden = !isOpen;
    headerMobileMenu.classList.toggle('is-open', isOpen);
  }

  function closeHeaderMenu() {
    setHeaderMenuState(false);
  }

  window.toggleBiogyLabMenu = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    setHeaderMenuState(headerMenuToggle?.getAttribute('aria-expanded') !== 'true');
  };

  function handleHeaderLogout(event) {
    event.preventDefault();
    saveDraft('Brouillon enregistré avant la déconnexion.');
    clearAuth();
    renderHeaderAuth(null);
    updateSessionPills(collectState());
    closeHeaderMenu();
    window.location.assign('/#/login');
  }

  function bindHeaderActions() {
    [headerAuthDesktop, headerAuthMobile].forEach((root) => {
      if (!root) {
        return;
      }

      root.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeHeaderMenu);
      });

      root.querySelectorAll('[data-biogy-action="logout"]').forEach((button) => {
        button.addEventListener('click', handleHeaderLogout);
      });
    });
  }

  function renderHeaderAuth(userInfo) {
    if (headerAuthDesktop) {
      headerAuthDesktop.innerHTML = userInfo?.username
        ? `
          <a class="site-profile-link" href="/#/profile">Bonjour, ${escapeHtml(userInfo.username)}!</a>
          ${userInfo.role === 'admin' ? '<a class="site-admin-button" href="/#/admin">Admin</a>' : ''}
          <button type="button" class="site-logout-button" data-biogy-action="logout">Déconnexion</button>
        `
        : `
          <a class="site-auth-link" href="/#/login">Se connecter</a>
          <a class="site-auth-button" href="/#/register">S'inscrire</a>
        `;
    }

    if (headerAuthMobile) {
      headerAuthMobile.innerHTML = userInfo?.username
        ? `
          <a class="site-mobile-link" href="/#/profile">Mon profil</a>
          ${userInfo.role === 'admin' ? '<a class="site-mobile-link site-mobile-link--admin" href="/#/admin">Admin</a>' : ''}
          <button type="button" class="site-mobile-button" data-biogy-action="logout">Déconnexion</button>
        `
        : `
          <a class="site-mobile-link" href="/#/login">Se connecter</a>
          <a class="site-mobile-link site-mobile-link--register" href="/#/register">S'inscrire</a>
        `;
    }

    bindHeaderActions();
  }

  async function refreshAuthState(state) {
    const storedUser = getAuth();
    renderHeaderAuth(storedUser);

    if (!storedUser?.token) {
      updateSessionPills(state);
      return null;
    }

    try {
      const response = await fetch(`${apiBaseUrl}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${storedUser.token}`,
        },
      });

      if (response.ok) {
        const profile = await response.json();
        const nextUser = {
          ...storedUser,
          _id: profile._id || storedUser._id,
          username: profile.username || storedUser.username,
          role: profile.role || storedUser.role,
        };

        persistAuth(nextUser);
        renderHeaderAuth(nextUser);
        updateSessionPills(state);
        return nextUser;
      }

      if (response.status === 401) {
        clearAuth();
        renderHeaderAuth(null);
        updateSessionPills(state);
        return null;
      }
    } catch (error) {
      console.error('Erreur lors de la synchronisation du profil:', error);
    }

    updateSessionPills(state);
    return storedUser;
  }

  function getHeaderElements() {
    return {
      authDesktop: document.querySelector('#biogyHeaderAuthDesktop'),
      authMobile: document.querySelector('#biogyHeaderAuthMobile'),
      menuToggle: document.querySelector('#biogyNavToggle'),
      mobileMenu: document.querySelector('#biogyNavMobileMenu'),
    };
  }

  function setHeaderMenuState(isOpen) {
    const { menuToggle, mobileMenu } = getHeaderElements();

    if (!menuToggle || !mobileMenu) {
      return;
    }

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.hidden = !isOpen;
    mobileMenu.classList.toggle('is-open', isOpen);
  }

  function closeHeaderMenu() {
    setHeaderMenuState(false);
  }

  window.toggleBiogyLabMenu = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const { menuToggle } = getHeaderElements();
    setHeaderMenuState(menuToggle?.getAttribute('aria-expanded') !== 'true');
  };

  function bindHeaderActions() {
    const { authDesktop, authMobile } = getHeaderElements();

    [authDesktop, authMobile].forEach((root) => {
      if (!root) {
        return;
      }

      root.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeHeaderMenu);
      });

      root.querySelectorAll('[data-biogy-action="logout"]').forEach((button) => {
        button.addEventListener('click', handleHeaderLogout);
      });
    });
  }

  function renderHeaderAuth(userInfo) {
    const { authDesktop, authMobile } = getHeaderElements();

    if (authDesktop) {
      authDesktop.innerHTML = userInfo?.username
        ? `
          <a class="site-profile-link" href="/#/profile">Bonjour, ${escapeHtml(userInfo.username)}!</a>
          ${userInfo.role === 'admin' ? '<a class="site-admin-button" href="/#/admin">Admin</a>' : ''}
          <button type="button" class="site-logout-button" data-biogy-action="logout">Déconnexion</button>
        `
        : `
          <a class="site-auth-link" href="/#/login">Se connecter</a>
          <a class="site-auth-button" href="/#/register">S'inscrire</a>
        `;
    }

    if (authMobile) {
      authMobile.innerHTML = userInfo?.username
        ? `
          <a class="site-mobile-link" href="/#/profile">Mon profil</a>
          ${userInfo.role === 'admin' ? '<a class="site-mobile-link site-mobile-link--admin" href="/#/admin">Admin</a>' : ''}
          <button type="button" class="site-mobile-button" data-biogy-action="logout">Déconnexion</button>
        `
        : `
          <a class="site-mobile-link" href="/#/login">Se connecter</a>
          <a class="site-mobile-link site-mobile-link--register" href="/#/register">S'inscrire</a>
        `;
    }

    bindHeaderActions();
  }

  const header = document.querySelector('.site-header');
  const container = document.querySelector('.container');

  if (header) {
    header.insertAdjacentElement('afterend', toolbar);
    toolbar.insertAdjacentElement('afterend', messageHost);
  }
  if (container) {
    container.insertAdjacentElement('afterbegin', introBanner);
  }
  if (!header && container) {
    container.insertAdjacentElement('beforebegin', messageHost);
  } else if (!header && !container) {
    body.insertAdjacentElement('afterbegin', messageHost);
  }

  assignActivityFieldIds();
  ensureFieldKeys();
  setHeaderMenuState(false);

  const initialHeaderMenuToggle = document.querySelector('#biogyNavToggle');
  const initialHeaderMobileMenu = document.querySelector('#biogyNavMobileMenu');

  if (initialHeaderMenuToggle) {
    initialHeaderMenuToggle.addEventListener('click', (event) => {
      if (event.defaultPrevented) {
        return;
      }

      event.stopPropagation();
      setHeaderMenuState(initialHeaderMenuToggle.getAttribute('aria-expanded') !== 'true');
    });
  }

  if (initialHeaderMobileMenu) {
    initialHeaderMobileMenu.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }

  document.addEventListener('click', (event) => {
    const activeHeaderMenuToggle = document.querySelector('#biogyNavToggle');
    const activeHeaderMobileMenu = document.querySelector('#biogyNavMobileMenu');

    if (!activeHeaderMobileMenu || activeHeaderMobileMenu.hidden) {
      return;
    }

    if (activeHeaderMenuToggle?.contains(event.target) || activeHeaderMobileMenu.contains(event.target)) {
      return;
    }

    closeHeaderMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeHeaderMenu();
    }
  });

  window.addEventListener('storage', (event) => {
    if (event.key === authStorageKey) {
      renderHeaderAuth(getAuth());
      updateSessionPills(collectState());
    }
  });

  const savedDraft = safeJsonParse(localStorage.getItem(draftKey));
  if (savedDraft) {
    restoreState(savedDraft);
    updateMessage('Brouillon restauré automatiquement.', 'info');
  }

  const initialState = savedDraft || collectState();
  const initialUser = getAuth();
  const desktopAuthRoot = document.getElementById('biogyHeaderAuthDesktop');
  const mobileAuthRoot = document.getElementById('biogyHeaderAuthMobile');

  if (initialUser?.username && desktopAuthRoot) {
    desktopAuthRoot.innerHTML = `
      <a class="site-profile-link" href="/#/profile">Bonjour, ${escapeHtml(initialUser.username)}!</a>
      ${initialUser.role === 'admin' ? '<a class="site-admin-button" href="/#/admin">Admin</a>' : ''}
      <button type="button" class="site-logout-button" data-biogy-action="logout">Déconnexion</button>
    `;
  }

  if (initialUser?.username && mobileAuthRoot) {
    mobileAuthRoot.innerHTML = `
      <a class="site-mobile-link" href="/#/profile">Mon profil</a>
      ${initialUser.role === 'admin' ? '<a class="site-mobile-link site-mobile-link--admin" href="/#/admin">Admin</a>' : ''}
      <button type="button" class="site-mobile-button" data-biogy-action="logout">Déconnexion</button>
    `;
  }

  renderHeaderAuth(initialUser);
  updateSessionPills(initialState);
  refreshAuthState(initialState);
  updateTeacherStatus();
  wrapTeacherMode();

  toolbar.querySelector('#biogySaveButton').addEventListener('click', () => saveDraft());
  toolbar.querySelector('#biogyDownloadButton').addEventListener('click', downloadFilledCopy);
  toolbar.querySelector('#biogySubmitButton').addEventListener('click', submitCopy);

  getFields().forEach((field) => {
    field.addEventListener('input', scheduleAutosave);
    field.addEventListener('change', scheduleAutosave);
  });
})();
