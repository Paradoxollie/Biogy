import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewDiscussionForm = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('general');
  const [tags, setTags] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tagError, setTagError] = useState('');
  
  // Configuration de l'éditeur ReactQuill
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'],
      ['clean']
    ],
  };
  
  const formats = [
    'header',
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'link', 'image'
  ];
  
  // Liste des catégories disponibles
  const categories = [
    { id: 'general', label: 'Discussion générale', color: 'bg-blue-100 text-blue-800' },
    { id: 'question', label: 'Question', color: 'bg-green-100 text-green-800' },
    { id: 'ressource', label: 'Ressource', color: 'bg-purple-100 text-purple-800' },
    { id: 'evenement', label: 'Évènement', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'annonce', label: 'Annonce', color: 'bg-red-100 text-red-800' }
  ];
  
  // Vérifier si l'utilisateur est connecté
  useEffect(() => {
    if (!userInfo) {
      navigate('/login', { state: { from: '/new-discussion' } });
    }
  }, [userInfo, navigate]);
  
  // Gérer l'ajout d'un tag
  const handleAddTag = () => {
    if (!tagInput.trim()) {
      return;
    }
    
    // Validation du tag (alphanumériques et tirets uniquement)
    if (!/^[a-zA-Z0-9-]+$/.test(tagInput)) {
      setTagError('Les tags ne peuvent contenir que des lettres, chiffres et tirets');
      return;
    }
    
    // Vérifier si le tag existe déjà
    const tagsList = tags.split(',').filter(tag => tag.trim());
    if (tagsList.includes(tagInput.trim())) {
      setTagError('Ce tag existe déjà');
      return;
    }
    
    // Limiter le nombre de tags à 5
    if (tagsList.length >= 5) {
      setTagError('Vous ne pouvez pas ajouter plus de 5 tags');
      return;
    }
    
    // Ajouter le tag
    const newTags = tags ? `${tags},${tagInput}` : tagInput;
    setTags(newTags);
    setTagInput('');
    setTagError('');
  };
  
  // Gérer la suppression d'un tag
  const handleRemoveTag = (tagToRemove) => {
    const tagsList = tags.split(',').filter(tag => tag.trim());
    const filteredTags = tagsList.filter(tag => tag !== tagToRemove);
    setTags(filteredTags.join(','));
  };
  
  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!title.trim()) {
      setError('Le titre est requis');
      return;
    }
    
    if (!content.trim()) {
      setError('Le contenu est requis');
      return;
    }
    
    if (title.length < 5) {
      setError('Le titre doit contenir au moins 5 caractères');
      return;
    }
    
    if (content.length < 20) {
      setError('Le contenu doit contenir au moins 20 caractères');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const formattedTags = tags
        ? tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        : [];
      
      const response = await fetch('/api/forum/discussions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          title,
          content,
          category,
          tags: formattedTags
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue lors de la création de la discussion');
      }
      
      // Rediriger vers la nouvelle discussion
      navigate(`/discussion/${data._id}`);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Gérer l'entrée des tags avec la touche Entrée
  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Créer une nouvelle discussion</h1>
            
            {error && (
              <div className="mb-6 rounded-md bg-red-50 p-4 border border-red-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{error}</h3>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Titre */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Titre <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="shadow-sm focus:ring-lab-purple focus:border-lab-purple block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Un titre clair et concis"
                      required
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {title.length}/100 caractères
                  </p>
                </div>
                
                {/* Catégorie */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Catégorie <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="shadow-sm focus:ring-lab-purple focus:border-lab-purple block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Tags */}
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                    Tags (optionnel) - Maximum 5 tags
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="text"
                      id="tags"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleTagInputKeyDown}
                      className="shadow-sm focus:ring-lab-purple focus:border-lab-purple block flex-1 min-w-0 w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Ajouter un tag (ex: python, javascript, débutant)"
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="ml-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  {tagError && (
                    <p className="mt-1 text-xs text-red-600">{tagError}</p>
                  )}
                  
                  {tags && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {tags.split(',').filter(tag => tag.trim()).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-1 inline-flex flex-shrink-0 rounded-full focus:outline-none focus:text-red-500"
                          >
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Contenu */}
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Contenu <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <ReactQuill
                      theme="snow"
                      value={content}
                      onChange={setContent}
                      modules={modules}
                      formats={formats}
                      placeholder="Rédigez votre discussion ici..."
                      className="h-64"
                    />
                  </div>
                </div>
                
                {/* Boutons */}
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lab-purple hover:bg-lab-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lab-purple disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Création en cours...
                      </>
                    ) : (
                      'Créer la discussion'
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

export default NewDiscussionForm; 