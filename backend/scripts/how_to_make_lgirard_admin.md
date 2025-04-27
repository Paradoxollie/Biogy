# Guide pour promouvoir Lgirard au rôle d'administrateur

Suivez ces étapes pour promouvoir l'utilisateur Lgirard au rôle d'administrateur.

## Prérequis
- Le serveur backend doit être en cours d'exécution: `node backend/server.js`
- Avoir ou créer un compte avec des droits admin

## Étape 1: Obtenir un compte admin

### Option 1: Utiliser un compte admin existant
Si vous avez déjà un compte administrateur, connectez-vous avec ce compte.

### Option 2: Créer un compte admin temporaire
Si vous n'avez pas encore de compte admin, vous pouvez en créer un avec Postman ou curl:

**Avec Postman:**
- URL: `POST http://localhost:5000/api/auth/register`
- Body (JSON):
```json
{
  "username": "temp_admin",
  "password": "adminpass",
  "role": "admin"
}
```

**Avec curl dans un terminal:**
```
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{\"username\":\"temp_admin\",\"password\":\"adminpass\",\"role\":\"admin\"}"
```

## Étape 2: Se connecter avec le compte admin

**Avec Postman:**
- URL: `POST http://localhost:5000/api/auth/login`
- Body (JSON):
```json
{
  "username": "temp_admin",
  "password": "adminpass"
}
```

**Avec curl dans un terminal:**
```
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"username\":\"temp_admin\",\"password\":\"adminpass\"}"
```

La réponse contiendra un token JWT. **Copiez ce token** pour l'étape suivante.

## Étape 3: Exécuter le script pour promouvoir Lgirard

```
cd backend
node scripts/useApiToSetAdmin.js
```

Lorsque le script vous demande le token d'administrateur, collez le token JWT obtenu à l'étape précédente.

Le script va:
1. Rechercher l'utilisateur Lgirard
2. Vérifier son rôle actuel
3. Le promouvoir au rôle d'admin
4. Confirmer que l'opération s'est bien déroulée

## Vérification

Après avoir exécuté le script, vous pouvez vous connecter avec le compte Lgirard pour vérifier que le rôle admin a bien été attribué. 