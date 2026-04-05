import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BROWSER_API_URL } from '../config';

const REVIEW_STATUS_OPTIONS = [
  { value: 'submitted', label: 'À corriger' },
  { value: 'reviewed', label: 'Corrigée' },
  { value: 'follow-up', label: 'À reprendre' },
];

const REVIEW_BADGES = {
  submitted: 'bg-amber-50 text-amber-700 border-amber-200',
  reviewed: 'bg-green-50 text-green-700 border-green-200',
  'follow-up': 'bg-red-50 text-red-700 border-red-200',
};

const AUTO_REVIEW_BADGES = {
  correct: 'bg-green-50 text-green-700 border-green-200',
  incorrect: 'bg-red-50 text-red-700 border-red-200',
  missing: 'bg-amber-50 text-amber-700 border-amber-200',
  detailed: 'bg-green-50 text-green-700 border-green-200',
  brief: 'bg-amber-50 text-amber-700 border-amber-200',
};

const formatDate = (value) => new Date(value).toLocaleString('fr-FR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

const AUTO_REVIEW_LABELS = {
  correct: 'Correct',
  incorrect: 'À reprendre',
  missing: 'Non renseigné',
  detailed: 'Développé',
  brief: 'Trop court',
};

const formatAutoReviewValue = (item, value) => {
  if (value === null || value === undefined || value === '') {
    return 'non renseigné';
  }

  if (item?.type === 'choice') {
    if (value === 'good') {
      return 'bonne';
    }

    if (value === 'bad') {
      return 'mauvaise';
    }
  }

  return value;
};

function AdminLabSubmissionsPanel({ userInfo, onUnauthorized }) {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [savingReview, setSavingReview] = useState(false);
  const [reviewStatus, setReviewStatus] = useState('submitted');
  const [reviewFeedback, setReviewFeedback] = useState('');

  const authHeaders = useMemo(() => ({
    Authorization: `Bearer ${userInfo.token}`,
    'Content-Type': 'application/json',
  }), [userInfo.token]);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${BROWSER_API_URL}/admin/lab-submissions`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          onUnauthorized();
          return;
        }

        throw new Error(data.message || 'Erreur lors du chargement des copies.');
      }

      setSubmissions(data);

      if (data.length) {
        setSelectedId((current) => current || data[0]._id);
      }
    } catch (fetchError) {
      console.error(fetchError);
      setError(fetchError.message || 'Erreur lors du chargement des copies.');
    } finally {
      setLoading(false);
    }
  }, [onUnauthorized, userInfo.token]);

  const fetchSubmissionDetail = useCallback(async (submissionId) => {
    if (!submissionId) {
      setSelectedSubmission(null);
      return;
    }

    setDetailLoading(true);
    setError('');

    try {
      const response = await fetch(`${BROWSER_API_URL}/admin/lab-submissions/${submissionId}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          onUnauthorized();
          return;
        }

        throw new Error(data.message || 'Erreur lors du chargement de la copie.');
      }

      setSelectedSubmission(data);
      setReviewStatus(data.review?.status || 'submitted');
      setReviewFeedback(data.review?.feedback || '');
    } catch (fetchError) {
      console.error(fetchError);
      setError(fetchError.message || 'Erreur lors du chargement de la copie.');
    } finally {
      setDetailLoading(false);
    }
  }, [onUnauthorized, userInfo.token]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  useEffect(() => {
    fetchSubmissionDetail(selectedId);
  }, [fetchSubmissionDetail, selectedId]);

  const handleSaveReview = async () => {
    if (!selectedSubmission) {
      return;
    }

    setSavingReview(true);
    setError('');

    try {
      const response = await fetch(`${BROWSER_API_URL}/admin/lab-submissions/${selectedSubmission._id}/review`, {
        method: 'PUT',
        headers: authHeaders,
        body: JSON.stringify({
          status: reviewStatus,
          feedback: reviewFeedback,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          onUnauthorized();
          return;
        }

        throw new Error(data.message || 'Erreur lors de l enregistrement de la correction.');
      }

      setSelectedSubmission((current) => current ? {
        ...current,
        review: data.submission.review,
      } : current);

      setSubmissions((current) => current.map((submission) => (
        submission._id === selectedSubmission._id
          ? { ...submission, review: data.submission.review }
          : submission
      )));
    } catch (saveError) {
      console.error(saveError);
      setError(saveError.message || 'Erreur lors de l enregistrement de la correction.');
    } finally {
      setSavingReview(false);
    }
  };

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Copies de laboratoire</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Les copies envoyées depuis les séances interactives arrivent ici avec un aperçu fidèle de la page complétée.
        </p>
      </div>

      {error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center text-gray-600 shadow-sm">
          Chargement des copies...
        </div>
      ) : submissions.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center text-gray-600 shadow-sm">
          Aucune copie envoyée pour le moment.
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
          <div className="space-y-4">
            {submissions.map((submission) => (
              <button
                key={submission._id}
                type="button"
                onClick={() => setSelectedId(submission._id)}
                className={`w-full rounded-3xl border p-4 text-left transition ${
                  selectedId === submission._id
                    ? 'border-lab-teal bg-lab-teal/5 shadow-md'
                    : 'border-gray-200 bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{submission.usernameSnapshot}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-500">{submission.activityTitle}</p>
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${REVIEW_BADGES[submission.review?.status || 'submitted']}`}>
                    {REVIEW_STATUS_OPTIONS.find((item) => item.value === (submission.review?.status || 'submitted'))?.label}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-gray-500">
                  <div className="rounded-2xl bg-gray-50 px-3 py-2">
                    <div className="font-semibold text-gray-700">{submission.answerCount}/{submission.fieldCount || '...'}</div>
                    <div>champs renseignés</div>
                  </div>
                  <div className="rounded-2xl bg-gray-50 px-3 py-2">
                    <div className="font-semibold text-gray-700">v{submission.version}</div>
                    <div>version envoyée</div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-gray-500">
                  Envoyée le {formatDate(submission.lastSubmittedAt)}
                </p>
              </button>
            ))}
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-lg">
            {detailLoading || !selectedSubmission ? (
              <div className="flex min-h-[320px] items-center justify-center text-gray-500">
                Chargement de la copie...
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{selectedSubmission.activityTitle}</p>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">{selectedSubmission.usernameSnapshot}</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Dernier envoi le {formatDate(selectedSubmission.lastSubmittedAt)}
                    </p>
                  </div>

                  <div className="grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
                    <div className="rounded-2xl bg-gray-50 px-4 py-3">
                      <div className="font-semibold text-gray-900">{selectedSubmission.answerCount}/{selectedSubmission.fieldCount || '...'}</div>
                      <div>champs complétés</div>
                    </div>
                    <div className="rounded-2xl bg-gray-50 px-4 py-3">
                      <div className="font-semibold text-gray-900">Version {selectedSubmission.version}</div>
                      <div>copie active</div>
                    </div>
                  </div>
                </div>

                {selectedSubmission.autoReview ? (
                  <div className="rounded-[1.75rem] border border-lab-teal/20 bg-lab-teal/5 p-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lab-teal">Pré-correction automatique</p>
                        <h4 className="mt-2 text-lg font-semibold text-gray-900">
                          {selectedSubmission.autoReview.score.earned}/{selectedSubmission.autoReview.score.total} vérifications automatiques validées
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          {selectedSubmission.autoReview.teacherNote}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white px-4 py-3 text-center shadow-sm">
                        <div className="text-2xl font-bold text-gray-900">
                          {selectedSubmission.autoReview.score.ratio ?? 0}%
                        </div>
                        <div className="text-xs uppercase tracking-[0.18em] text-gray-500">
                          score auto
                        </div>
                      </div>
                    </div>

                    {selectedSubmission.autoReview.items?.length ? (
                      <div className="mt-5 grid gap-3 lg:grid-cols-2">
                        {selectedSubmission.autoReview.items.map((item) => (
                          <div key={item.key} className="rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm">
                            <div className="flex items-start justify-between gap-3">
                              <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                              <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${AUTO_REVIEW_BADGES[item.status] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                                {AUTO_REVIEW_LABELS[item.status] || item.status}
                              </span>
                            </div>
                            <div className="mt-3 space-y-1 text-sm text-gray-600">
                              <p>
                                Attendu : <span className="font-medium text-gray-900">{formatAutoReviewValue(item, item.expected ?? 'à calculer')}</span>{item.unit && item.expected !== null && item.expected !== undefined ? ` ${item.unit}` : ''}
                              </p>
                              <p>
                                Élève : <span className="font-medium text-gray-900">{formatAutoReviewValue(item, item.actual)}</span>{item.unit && item.actual !== undefined && item.actual !== null ? ` ${item.unit}` : ''}
                              </p>
                              {item.hint ? (
                                <p className="text-xs leading-5 text-gray-500">{item.hint}</p>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {selectedSubmission.autoReview.writing?.length ? (
                      <div className="mt-5">
                        <h5 className="text-sm font-semibold text-gray-900">Repères de rédaction</h5>
                        <div className="mt-3 grid gap-3 lg:grid-cols-2">
                          {selectedSubmission.autoReview.writing.map((item) => (
                            <div key={item.key} className="rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm">
                              <div className="flex items-start justify-between gap-3">
                                <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                                <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${AUTO_REVIEW_BADGES[item.status] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                                  {AUTO_REVIEW_LABELS[item.status] || item.status}
                                </span>
                              </div>
                              <p className="mt-3 text-sm text-gray-600">
                                {item.hint}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}

                <iframe
                  title={`Copie de ${selectedSubmission.usernameSnapshot}`}
                  srcDoc={selectedSubmission.submissionHtml}
                  sandbox=""
                  className="h-[68vh] w-full rounded-3xl border border-gray-200 bg-white"
                />

                <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
                  <div>
                    <label htmlFor="review-status" className="block text-sm font-semibold text-gray-700">
                      Statut
                    </label>
                    <select
                      id="review-status"
                      value={reviewStatus}
                      onChange={(event) => setReviewStatus(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                    >
                      {REVIEW_STATUS_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="review-feedback" className="block text-sm font-semibold text-gray-700">
                      Retour enseignant
                    </label>
                    <textarea
                      id="review-feedback"
                      value={reviewFeedback}
                      onChange={(event) => setReviewFeedback(event.target.value)}
                      rows={5}
                      className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm leading-7 text-gray-700"
                      placeholder="Commentaire de correction, axes d amélioration, validation..."
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleSaveReview}
                    disabled={savingReview}
                    className="rounded-xl bg-lab-teal px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-lab-teal/90 disabled:cursor-not-allowed disabled:bg-gray-400"
                  >
                    {savingReview ? 'Enregistrement...' : 'Enregistrer la correction'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminLabSubmissionsPanel;
