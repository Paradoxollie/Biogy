import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import api from '../services/api';
import corsProxy from '../services/corsProxy';

const NewDiscussionPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('general');
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Liste des catégories disponibles
  const categories = [
    { id: 'general', label: 'Discussion générale', color: 'bg-blue-100 text-blue-800' },
    { id: 'question', label: 'Question', color: 'bg-green-100 text-green-800' },
    { id: 'ressource', label: 'Ressource', color: 'bg-purple-100 text-purple-800' },
    { id: 'evenement', label: 'Évènement', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'annonce', label: 'Annonce', color: 'bg-red-100 text-red-800' }
  ];

  // Configuration de ReactQuill
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image', 'blockquote', 'code-block'],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image', 'blockquote', 'code-block',
    'color', 'background'
  ];

  // Redirection vers la page de connexion si l'utilisateur n'est pas connecté
  React.useEffect(() => {
    if (!userInfo) {
      navigate('/login', { state: { from: '/new-discussion' } });
    }
  }, [userInfo, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation basique
    if (!title.trim()) {
      setError('Veuillez saisir un titre pour votre discussion.');
      return;
    }

    if (!content.trim()) {
      setError('Veuillez saisir un contenu pour votre discussion.');
      return;
    }

    setLoading(true);
    setError('');

    // Préparation des tags (séparés par des virgules)
    const tagArray = tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    try {
      console.log('Envoi de la nouvelle discussion au serveur');

      // Ensure we have the auth token
      if (!userInfo || !userInfo.token) {
        throw new Error('Vous devez être connecté pour créer une discussion');
      }

      // Create the discussion data
      const discussionData = {
        title,
        content,
        category,
        tags: tagArray,
      };

      console.log('Discussion data:', discussionData);

      // Première tentative avec le service API normal
      let data;
      try {
        const response = await api.post('/discussions', discussionData);
        console.log('Discussion API response from API service:', response);

        if (response && response.data) {
          data = response.data;
        }
      } catch (apiError) {
        console.warn('API service failed, trying direct API call:', apiError);

        // Si l'API normale échoue, essayer via la fonction Netlify
        try {
          console.log('Making API call via Netlify Function');
          const response = await fetch('/.netlify/functions/proxy/discussions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userInfo.token}`
            },
            body: JSON.stringify(discussionData)
          });

          if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
          }

          data = await response.json();
          console.log('Discussion API response from Netlify Function:', data);
        } catch (netlifyError) {
          console.error('Netlify Function call failed:', netlifyError);
          throw new Error('Impossible de créer la discussion. Veuillez réessayer plus tard.');
        }
      }

      console.log('Réponse du serveur:', data);

      // Handle different response formats
      let discussionId = null;

      if (data) {
        if (data.discussion && data.discussion._id) {
          // Standard format
          discussionId = data.discussion._id;
        } else if (data._id) {
          // Direct object format
          discussionId = data._id;
        } else if (data.success && data.data && data.data._id) {
          // Nested success format
          discussionId = data.data._id;
        } else if (data.id) {
          // Simple id format
          discussionId = data.id;
        }
      }

      if (discussionId) {
        console.log(`Redirection vers la discussion: ${discussionId}`);
        navigate(`/discussion/${discussionId}`);
      } else {
        console.error('ID de discussion introuvable dans la réponse:', data);
        setError('La discussion a été créée mais impossible de la retrouver. Veuillez vérifier dans le forum.');
        setTimeout(() => {
          navigate('/forum');
        }, 3000);
      }
    } catch (err) {
      console.error('Erreur lors de la création de la discussion:', err);
      setError(`Erreur: ${err.message}. Veuillez réessayer.`);
    } finally {
      setLoading(false);
    }
  };

  if (!userInfo) {
    return null; // L'effet useEffect se chargera de la redirection
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Link
            to="/forum"
            className="inline-flex items-center text-sm font-medium text-lab-purple hover:text-lab-purple/90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour au forum
          </Link>
        </div>

        <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">
              Nouvelle discussion
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Titre *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lab-purple focus:border-lab-purple"
                placeholder="Titre de votre discussion"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie *
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lab-purple focus:border-lab-purple"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                Tags (séparés par des virgules)
              </label>
              <input
                type="text"
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lab-purple focus:border-lab-purple"
                placeholder="ex: biologie, plantes, botanique"
              />
              <p className="mt-1 text-sm text-gray-500">
                Ajoutez des tags pour aider les autres à trouver votre discussion
              </p>
            </div>

            <div className="mb-6">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Contenu *
              </label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                placeholder="Rédigez votre discussion ici..."
                className="bg-white rounded-md border border-gray-300 min-h-[250px]"
              />
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-200">
              <Link
                to="/forum"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 mr-3"
              >
                Annuler
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Création en cours...
                  </>
                ) : (
                  'Publier la discussion'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewDiscussionPage;