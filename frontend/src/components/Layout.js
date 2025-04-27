import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { userInfo, logout, loadingAuth } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-lab-bg via-white to-blue-50">
        <div className="flex-grow"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-lab-bg via-white to-blue-50">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lab-blue via-lab-purple to-lab-teal flex items-center">
                <div className="w-8 h-8 mr-2 relative animate-dna-rotate perspective">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V22" stroke="url(#lab-gradient)" strokeWidth="0.5" strokeDasharray="1 2" strokeOpacity="0.6" />
                    
                    <path d="M6 2.5C8 4 10 5 12 5C14 5 16 4 18 2.5" 
                      stroke="url(#lab-gradient-1)" strokeWidth="1.5" strokeLinecap="round" className="animate-dna-pulse" />
                    <path d="M6 6.5C8 8 10 9 12 9C14 9 16 8 18 6.5" 
                      stroke="url(#lab-gradient-1)" strokeWidth="1.5" strokeLinecap="round" className="animate-dna-pulse" />
                    <path d="M6 10.5C8 12 10 13 12 13C14 13 16 12 18 10.5" 
                      stroke="url(#lab-gradient-1)" strokeWidth="1.5" strokeLinecap="round" className="animate-dna-pulse" />
                    <path d="M6 14.5C8 16 10 17 12 17C14 17 16 16 18 14.5" 
                      stroke="url(#lab-gradient-1)" strokeWidth="1.5" strokeLinecap="round" className="animate-dna-pulse" />
                    <path d="M6 18.5C8 20 10 21 12 21C14 21 16 20 18 18.5" 
                      stroke="url(#lab-gradient-1)" strokeWidth="1.5" strokeLinecap="round" className="animate-dna-pulse" />
                    
                    <circle cx="6" cy="2.5" r="0.8" fill="url(#lab-gradient-1)" />
                    <circle cx="6" cy="6.5" r="0.8" fill="url(#lab-gradient-1)" />
                    <circle cx="6" cy="10.5" r="0.8" fill="url(#lab-gradient-1)" />
                    <circle cx="6" cy="14.5" r="0.8" fill="url(#lab-gradient-1)" />
                    <circle cx="6" cy="18.5" r="0.8" fill="url(#lab-gradient-1)" />
                    
                    <circle cx="18" cy="2.5" r="0.8" fill="url(#lab-gradient-1)" />
                    <circle cx="18" cy="6.5" r="0.8" fill="url(#lab-gradient-1)" />
                    <circle cx="18" cy="10.5" r="0.8" fill="url(#lab-gradient-1)" />
                    <circle cx="18" cy="14.5" r="0.8" fill="url(#lab-gradient-1)" />
                    <circle cx="18" cy="18.5" r="0.8" fill="url(#lab-gradient-1)" />
                    
                    <path d="M6 4.5C8 3 10 2 12 2C14 2 16 3 18 4.5" 
                      stroke="url(#lab-gradient-2)" strokeWidth="1.5" strokeLinecap="round" className="animate-dna-pulse" />
                    <path d="M6 8.5C8 7 10 6 12 6C14 6 16 7 18 8.5" 
                      stroke="url(#lab-gradient-2)" strokeWidth="1.5" strokeLinecap="round" className="animate-dna-pulse" />
                    <path d="M6 12.5C8 11 10 10 12 10C14 10 16 11 18 12.5" 
                      stroke="url(#lab-gradient-2)" strokeWidth="1.5" strokeLinecap="round" className="animate-dna-pulse" />
                    <path d="M6 16.5C8 15 10 14 12 14C14 14 16 15 18 16.5" 
                      stroke="url(#lab-gradient-2)" strokeWidth="1.5" strokeLinecap="round" className="animate-dna-pulse" />
                    <path d="M6 20.5C8 19 10 18 12 18C14 18 16 19 18 20.5" 
                      stroke="url(#lab-gradient-2)" strokeWidth="1.5" strokeLinecap="round" className="animate-dna-pulse" />
                    
                    <circle cx="6" cy="4.5" r="0.8" fill="url(#lab-gradient-2)" />
                    <circle cx="6" cy="8.5" r="0.8" fill="url(#lab-gradient-2)" />
                    <circle cx="6" cy="12.5" r="0.8" fill="url(#lab-gradient-2)" />
                    <circle cx="6" cy="16.5" r="0.8" fill="url(#lab-gradient-2)" />
                    <circle cx="6" cy="20.5" r="0.8" fill="url(#lab-gradient-2)" />
                    
                    <circle cx="18" cy="4.5" r="0.8" fill="url(#lab-gradient-2)" />
                    <circle cx="18" cy="8.5" r="0.8" fill="url(#lab-gradient-2)" />
                    <circle cx="18" cy="12.5" r="0.8" fill="url(#lab-gradient-2)" />
                    <circle cx="18" cy="16.5" r="0.8" fill="url(#lab-gradient-2)" />
                    <circle cx="18" cy="20.5" r="0.8" fill="url(#lab-gradient-2)" />
                    
                    <defs>
                      <linearGradient id="lab-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3b82f6" />
                        <stop offset="0.5" stopColor="#8b5cf6" />
                        <stop offset="1" stopColor="#14b8a6" />
                      </linearGradient>
                      <linearGradient id="lab-gradient-1" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3b82f6" />
                        <stop offset="0.5" stopColor="#8b5cf6" />
                        <stop offset="1" stopColor="#14b8a6" />
                      </linearGradient>
                      <linearGradient id="lab-gradient-2" x1="21" y1="3" x2="3" y2="21" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#14b8a6" />
                        <stop offset="0.5" stopColor="#8b5cf6" />
                        <stop offset="1" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                Biogy
              </Link>
              
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-lab-blue/60 animate-bubble1 opacity-0"></div>
              <div className="absolute -top-2 right-1 w-2 h-2 rounded-full bg-lab-purple/60 animate-bubble2 opacity-0"></div>
            </div>
            <span className="hidden md:inline-block text-gray-500 text-sm italic border-l border-lab-lines pl-3 ml-2">Biologie & Biotechnologie</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Apprendre', path: '/apprendre', color: 'lab-blue' },
              { name: 'Recherche', path: '/recherche', color: 'lab-purple' },
              { name: 'Actualités', path: '/actualites', color: 'lab-teal' },
              { name: 'Méthodes', path: '/methodes', color: 'lab-green' }
            ].map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 hover:text-${item.color} group ${
                  location.pathname === item.path ? `text-${item.color}` : 'text-gray-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-${item.color} transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : 'w-0'
                }`}></span>
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            {userInfo ? (
                <>
                <span className="text-gray-700">Bonjour, {userInfo.username}!</span>
                {userInfo.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                  >
                    Admin
                  </Link>
                )}
                <button 
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                    Déconnexion
                </button>
                </>
            ) : (
                <>
                <Link to="/login" className="text-gray-600 hover:text-lab-blue transition duration-300 font-medium">Se Connecter</Link>
                <Link to="/register" className="bg-gradient-to-r from-lab-blue to-lab-purple hover:from-lab-blue/90 hover:to-lab-purple/90 text-white px-4 py-1.5 rounded-md text-sm font-semibold shadow-sm transition duration-150 ease-in-out">
                    S'inscrire
                </Link>
                </>
            )}
          </div>
          
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-50 border-t border-lab-lines relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 20V40M70 20V40M25 50H75M30 70H70M40 90H60" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <path d="M20 40H80L70 80C68 85 60 90 50 90C40 90 32 85 30 80L20 40Z" stroke="#000" strokeWidth="4" fill="none" />
          </svg>
        </div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-5 rotate-45">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="20" width="40" height="60" rx="5" stroke="#000" strokeWidth="4" />
            <path d="M45 10L45 20M55 10L55 20" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <path d="M35 40H65M35 50H65M35 60H65M35 70H65" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lab-blue via-lab-purple to-lab-teal">
                Biogy
              </Link>
              <p className="mt-3 text-gray-600">
                Votre portail vers le monde fascinant de la biologie et la biotechnologie.
                Explorez, apprenez et découvrez les merveilles de la science du vivant.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-gray-700">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/apprendre" className="text-gray-600 hover:text-lab-blue transition duration-300">Apprendre</Link></li>
                <li><Link to="/methodes" className="text-gray-600 hover:text-lab-green transition duration-300">Méthodes</Link></li>
                <li><Link to="/actualites" className="text-gray-600 hover:text-lab-teal transition duration-300">Actualités</Link></li>
                <li><Link to="/partager-projet" className="text-gray-600 hover:text-lab-purple transition duration-300">Partager un Projet</Link></li> 
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-gray-700">Communauté</h3>
              <ul className="space-y-2">
                  <li><Link to="/projets" className="text-gray-600 hover:text-lab-purple transition duration-300">Voir les Projets</Link></li> 
                  <li><Link to="/contact" className="text-gray-600 hover:text-lab-blue transition duration-300">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-700">Mon Compte</h3>
              <ul className="space-y-2">
              {userInfo ? (
                <>
                  {userInfo.role === 'admin' && (
                    <li>
                      <Link to="/admin" className="text-indigo-600 hover:text-indigo-800 transition duration-300">
                        Panneau Admin
                      </Link>
                    </li>
                  )}
                  <li>
                    <button 
                      onClick={handleLogout}
                      className="text-red-600 hover:text-red-800 transition duration-300 text-left w-full"
                    >
                      Déconnexion
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/login" className="text-gray-600 hover:text-lab-blue transition duration-300">Se Connecter</Link></li>
                  <li><Link to="/register" className="text-gray-600 hover:text-lab-purple transition duration-300">S'inscrire</Link></li>
                </>
              )}
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-5 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Biogy. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout; 