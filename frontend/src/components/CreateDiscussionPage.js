import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateDiscussionPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Liste des catégories disponibles
  const categories = [
    { id: 'general', label: 'Discussion générale', color: 'bg-blue-100 text-blue-800' },
    { id: 'question', label: 'Question', color: 'bg-green-100 text-green-800' },
    { id: 'ressource', label: 'Ressource', color: 'bg-purple-100 text-purple-800' },
    { id: 'evenement', label: 'Évènement', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'annonce', label: 'Annonce', color: 'bg-red-100 text-red-800' }
  ];
  
  // Options pour l'éditeur ReactQuill
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['clean']
    ]
  };
  
  const quillFormats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'blockquote', 'code-block',
    'link', 'image'
  ];
  
  useEffect(() => {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    if (!userInfo) {
      navigate('/login', { state: { from: '/forum/new' } });
    }
  }, [userInfo, navigate]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || !category) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const tagsArray = tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '');
      
      const response = await fetch('/api/forum/discussions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        },
        body: JSON.stringify({
          title,
          content,
          category,
          tags: tagsArray
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la création de la discussion');
      }
      
      // Rediriger vers la nouvelle discussion
      navigate(`/forum/discussion/${data.discussion._id}`);
    } catch (err) {
      setError(err.message || 'Une erreur est survenue. Veuillez réessayer.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 mb-6">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <Link to="/forum" className="text-lab-purple hover:underline flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Retour au forum
              </Link>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Créer une nouvelle discussion</h1>
            
            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Titre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-lab-purple focus:border-lab-purple"
                    placeholder="Titre de votre discussion"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Catégorie <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map((cat) => (
                      <div 
                        key={cat.id}
                        className={`flex items-center p-3 border rounded-md cursor-pointer transition-colors ${
                          category === cat.id 
                            ? 'border-lab-purple bg-lab-purple/5' 
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setCategory(cat.id)}
                      >
                        <div className={`h-3 w-3 rounded-full ${cat.color.split(' ')[0]}`}></div>
                        <span className="ml-2 text-gray-700">{cat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Contenu <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <ReactQuill
                      theme="snow"
                      value={content}
                      onChange={setContent}
                      modules={quillModules}
                      formats={quillFormats}
                      placeholder="Écrivez le contenu de votre discussion ici..."
                      className="bg-white border border-gray-300 rounded-md"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Utilisez l'éditeur pour formater votre texte, ajouter des liens, des images, etc.
                  </p>
                </div>
                
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                    Tags (facultatif)
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-lab-purple focus:border-lab-purple"
                    placeholder="Séparez les tags par des virgules, ex: biologie, adn, science"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Les tags aident à classer et retrouver votre discussion. Maximum 5 tags.
                  </p>
                </div>
                
                <div className="flex justify-end">
                  <Link
                    to="/forum"
                    className="mr-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
                  >
                    Annuler
                  </Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Publication en cours...
                      </>
                    ) : (
                      'Publier la discussion'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDiscussionPage; 