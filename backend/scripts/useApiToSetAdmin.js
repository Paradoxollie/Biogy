const fetch = require('node-fetch');
const readline = require('readline');

// Créer une interface de lecture
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// URL de base de l'API
const API_BASE_URL = 'http://localhost:5000/api';

// Fonction pour demander le token d'authentification admin
const getAdminToken = () => {
  return new Promise((resolve) => {
    rl.question('Veuillez entrer votre token d\'administrateur: ', (token) => {
      resolve(token);
    });
  });
};

// Fonction pour trouver un utilisateur par son nom d'utilisateur
const findUserByUsername = async (username, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/users/find/${username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error('Erreur lors de la recherche de l\'utilisateur:', error.message);
    throw error;
  }
};

// Fonction pour mettre à jour le rôle d'un utilisateur
const updateUserRole = async (userId, role, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/users/${userId}/role`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ role })
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du rôle:', error.message);
    throw error;
  }
};

// Fonction principale
const makeUserAdmin = async (username) => {
  try {
    console.log(`Tentative de promotion de l'utilisateur "${username}" au rôle d'admin...`);
    
    const token = await getAdminToken();
    
    // Trouver l'utilisateur
    console.log(`Recherche de l'utilisateur "${username}"...`);
    const user = await findUserByUsername(username, token);
    
    if (!user) {
      console.error(`Utilisateur "${username}" non trouvé.`);
      process.exit(1);
    }
    
    console.log(`Utilisateur trouvé: ${user.username} (ID: ${user._id})`);
    console.log(`Rôle actuel: ${user.role}`);
    
    if (user.role === 'admin') {
      console.log(`L'utilisateur "${username}" est déjà un administrateur.`);
      rl.close();
      return;
    }
    
    // Mettre à jour le rôle de l'utilisateur
    console.log(`Promotion de "${username}" au rôle d'admin...`);
    const result = await updateUserRole(user._id, 'admin', token);
    
    console.log('Résultat:', result.message);
    
    rl.close();
  } catch (error) {
    console.error('Erreur:', error.message);
    rl.close();
    process.exit(1);
  }
};

// Exécuter le script
makeUserAdmin('Lgirard'); 