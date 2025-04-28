import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Fonction utilitaire pour l'animation des cercles de Petri
const animatePetriDishes = (canvas, ctx) => {
  if (!canvas || !ctx) return;
  
  // Configuration
  const circles = [];
  const colors = ['#3b82f6', '#8b5cf6', '#14b8a6', '#22c55e'];
  const numCircles = 20;
  
  // Création des cercles initiaux
  for (let i = 0; i < numCircles; i++) {
    circles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 15 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.3 + 0.1,
      speed: {
        x: Math.random() * 0.3 - 0.15,
        y: Math.random() * 0.3 - 0.15
      }
    });
  }
  
  // Boucle d'animation
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    circles.forEach(circle => {
      // Déplacement
      circle.x += circle.speed.x;
      circle.y += circle.speed.y;
      
      // Rebond sur les bords
      if (circle.x < 0 || circle.x > canvas.width) circle.speed.x *= -1;
      if (circle.y < 0 || circle.y > canvas.height) circle.speed.y *= -1;
      
      // Dessin du cercle (boîte de Petri)
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      ctx.strokeStyle = circle.color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = circle.alpha;
      ctx.stroke();
      
      // Petites cellules à l'intérieur
      const cells = Math.floor(Math.random() * 3) + 2;
      for (let j = 0; j < cells; j++) {
        const cellAngle = Math.random() * Math.PI * 2;
        const cellDistance = Math.random() * (circle.radius * 0.7);
        const cellX = circle.x + Math.cos(cellAngle) * cellDistance;
        const cellY = circle.y + Math.sin(cellAngle) * cellDistance;
        const cellRadius = Math.random() * 2 + 1;
        
        ctx.beginPath();
        ctx.arc(cellX, cellY, cellRadius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.globalAlpha = circle.alpha + 0.2;
        ctx.fill();
      }
    });
    
    requestAnimationFrame(animate);
  };
  
  animate();
};

function Homepage() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Configuration du canvas
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Initialisation de l'animation
    animatePetriDishes(canvas, ctx);
    
    // Redimensionnement
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Canvas d'arrière-plan pour l'animation des boîtes de Petri */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-30"
      ></canvas>
      
      {/* Section héro avec illustrations de labo */}
      <section className="pt-20 pb-24 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Texte principal */}
            <div className="md:w-1/2 space-y-6">
              <div className="w-full max-w-md mx-auto relative">
                {/* Fond et effets décoratifs */}
                <div className="absolute -inset-6 bg-green-900 rounded-xl shadow-xl -z-10"></div>
                <div className="absolute -inset-6 bg-green-800 rounded-xl opacity-80 -z-10 
                  border-2 border-amber-100/20 shadow-inner"></div>
                
                {/* Effet de craie sur tableau */}
                <div className="absolute -top-2 -left-2 w-full h-full">
                  <div className="absolute top-3 left-4 h-0.5 w-16 bg-white/20 rotate-2"></div>
                  <div className="absolute top-6 right-10 h-0.5 w-20 bg-white/10 -rotate-1"></div>
                  <div className="absolute bottom-5 left-8 h-0.5 w-24 bg-white/15 rotate-1"></div>
                  <div className="absolute bottom-10 right-6 h-0.5 w-16 bg-white/10 -rotate-2"></div>
                </div>
                
                {/* Traces de craie/poussière */}
                <div className="absolute -top-4 -left-6 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-6 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
                
                {/* Petites particules de craie */}
                <div className="absolute top-1/4 left-0 w-1 h-1 rounded-full bg-white/40 animate-pulse"></div>
                <div className="absolute bottom-1/3 right-4 w-0.5 h-0.5 rounded-full bg-white/40 animate-pulse"></div>
                <div className="absolute top-1/2 right-0 w-1 h-1 rounded-full bg-white/40 animate-pulse"></div>
                
                {/* Logo avec conteneur */}
                <div className="relative bg-green-900/60 backdrop-blur-sm rounded-full p-8 shadow-inner overflow-hidden border border-white/10 aspect-square flex items-center justify-center">
                  {/* Effet de texture de tableau */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30 rounded-full"></div>
                  
                  {/* Orbites moléculaires */}
                  <div className="absolute inset-0 rounded-full border border-white/20 animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute inset-2 rounded-full border border-white/15 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-4 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '10s' }}></div>
                  <div className="absolute inset-6 rounded-full border-dashed border border-white/5 animate-spin" style={{ animationDuration: '25s' }}></div>
                  
                  {/* Atomes/molécules en orbite */}
                  <div className="absolute w-4 h-4 bg-lab-blue rounded-full shadow-glow animate-orbit-1" 
                       style={{ top: '15%', left: '15%' }}></div>
                  <div className="absolute w-3 h-3 bg-lab-purple rounded-full shadow-glow animate-orbit-2" 
                       style={{ bottom: '20%', right: '15%' }}></div>
                  <div className="absolute w-2 h-2 bg-lab-teal rounded-full shadow-glow animate-orbit-3" 
                       style={{ top: '25%', right: '20%' }}></div>
                  <div className="absolute w-3 h-3 bg-amber-400 rounded-full shadow-glow animate-orbit-4" 
                       style={{ bottom: '25%', left: '20%' }}></div>
                  <div className="absolute w-2 h-2 bg-green-400 rounded-full shadow-glow animate-orbit-5" 
                       style={{ top: '50%', right: '5%' }}></div>
                  <div className="absolute w-2.5 h-2.5 bg-red-400 rounded-full shadow-glow animate-orbit-1" 
                       style={{ top: '10%', right: '45%', animationDelay: '0.5s' }}></div>
                  <div className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full shadow-glow animate-orbit-3" 
                       style={{ bottom: '10%', left: '45%', animationDelay: '0.7s' }}></div>
                  <div className="absolute w-2 h-2 bg-indigo-300 rounded-full shadow-glow animate-orbit-2" 
                       style={{ top: '40%', left: '5%', animationDelay: '0.3s' }}></div>
                  
                  {/* Logo avec animation subtile */}
                  <div className="relative animate-float-gentle transform w-3/4 h-3/4 rounded-full overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden bg-green-900/80">
                      <img 
                        src="/images/biogy-logo.png" 
                        alt="Biogy Logo" 
                        className="w-[85%] h-[85%] object-contain z-10 relative drop-shadow-lg rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl text-gray-700 font-light leading-snug">
                Votre <span className="font-semibold">plateforme dédiée</span> à l'excellence en <span className="font-semibold text-lab-purple">Biotechnologie</span>
              </h2>
              
              <p className="text-lg text-gray-600">
                Ressources pédagogiques, protocoles de laboratoire, actualités de la recherche et outils collaboratifs 
                pour les <span className="font-medium">lycéens, étudiants et enseignants</span> en biotechnologie.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/apprendre" className="px-6 py-3 bg-gradient-to-r from-lab-blue to-lab-purple text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Commencer l'exploration
                </Link>
                <Link to="/methodes" className="px-6 py-3 bg-white text-lab-blue border border-lab-blue rounded-lg hover:bg-lab-blue/5 transition-all duration-300">
                  Découvrir les méthodes
                </Link>
                <Link to="/projets" className="px-6 py-3 bg-white text-lab-teal border border-lab-teal rounded-lg hover:bg-lab-teal/5 transition-all duration-300">
                  Voir les Projets
                </Link>
              </div>
            </div>
            
            {/* Illustration de labo */}
            <div className="md:w-1/2 relative">
              {/* Image principale de microscope/illustration labo */}
              <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg rotate-1 transform hover:rotate-0 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden rounded-md bg-gray-100 relative">
                  {/* Cercle lumineux pour l'effet microscope */}
                  <div className="absolute w-40 h-40 bg-lab-purple/20 rounded-full blur-xl animate-microscope-scan"></div>
                  
                  {/* Illustration style "main levée" d'un microscope */}
                  <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Base du microscope */}
                    <path d="M180 250H280C285 250 290 240 290 235L300 150C300 145 295 140 290 140H170C165 140 160 145 160 150L170 235C170 240 175 250 180 250Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 3" />
                    
                    {/* Corps */}
                    <path d="M220 140V70" stroke="#333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M200 70H240" stroke="#333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Objectifs */}
                    <circle cx="220" cy="50" r="20" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                    <path d="M235 35L205 65" stroke="#333" strokeWidth="2" />
                    <path d="M205 35L235 65" stroke="#333" strokeWidth="2" />
                    
                    {/* Lumière en bas */}
                    <path d="M220 140L220 170" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="220" cy="180" r="10" stroke="#333" strokeWidth="2" fill="#FFEE77" fillOpacity="0.6" className="animate-pulse-glow" />
                    
                    {/* Plaque d'échantillon */}
                    <rect x="200" y="120" width="40" height="10" rx="2" stroke="#333" strokeWidth="2" />
                    
                    {/* Molettes de réglage */}
                    <circle cx="260" cy="110" r="12" stroke="#333" strokeWidth="2" />
                    <circle cx="180" cy="110" r="12" stroke="#333" strokeWidth="2" />
                    
                    {/* Éléments décoratifs */}
                    <path d="M150 200H170" stroke="#333" strokeWidth="1" strokeDasharray="2 2" />
                    <path d="M280 200H300" stroke="#333" strokeWidth="1" strokeDasharray="2 2" />
                    
                    {/* Formules scientifiques écrites à la main */}
                    <text x="310" y="50" className="text-xs" fill="#666" fontFamily="cursive">H₂O</text>
                    <text x="330" y="70" className="text-xs" fill="#666" fontFamily="cursive">O₂</text>
                    <text x="320" y="90" className="text-xs" fill="#666" fontFamily="cursive">DNA</text>
                    <text x="340" y="110" className="text-xs" fill="#666" fontFamily="cursive">ATP</text>
                    
                    {/* Petite boîte de Petri */}
                    <ellipse cx="130" cy="100" rx="25" ry="10" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 1" />
                    <ellipse cx="130" cy="100" rx="20" ry="8" stroke="#8b5cf6" strokeWidth="1" />
                    
                    {/* Tube à essai */}
                    <path d="M90,70 L90,120 Q95,130 100,120 L100,70 Z" stroke="#14b8a6" strokeWidth="1" fill="none" />
                    <path d="M90,80 L100,80" stroke="#14b8a6" strokeWidth="1" />
                    
                    {/* ADN */}
                    <path d="M40,50 Q50,60 40,70 Q30,80 40,90 Q50,100 40,110" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
                    <path d="M60,50 Q50,60 60,70 Q70,80 60,90 Q50,100 60,110" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
                    <path d="M40,60 L60,60" stroke="#3b82f6" strokeWidth="1" />
                    <path d="M40,80 L60,80" stroke="#3b82f6" strokeWidth="1" />
                    <path d="M40,100 L60,100" stroke="#3b82f6" strokeWidth="1" />
                  </svg>
                </div>
                
                {/* Notes de laboratoire écrites à la main */}
                <div className="absolute -right-16 top-10 bg-yellow-50 p-3 w-32 rotate-6 shadow-sm">
                  <div className="text-xs text-gray-600 font-handwriting">
                    <p className="mb-1 text-lab-purple">Échantillon 3B:</p>
                    <p className="text-[10px]">Observer les structures cellulaires à 40x</p>
                    <p className="text-[10px] mt-1">pH: 7.2</p>
                    <p className="text-[10px]">Temp: 23°C</p>
                  </div>
                </div>
              </div>
              
              {/* Éléments décoratifs autour de l'image */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lab-blue/5 rounded-full blur-xl"></div>
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-lab-purple/5 rounded-full blur-lg"></div>
              
              {/* Points décoratifs */}
              <div className="absolute top-2 left-2 grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-lab-blue/40"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section avec les cartes des catégories */}
      <section className="py-16 bg-gradient-to-b from-white to-lab-bg/40">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Explorer l'univers de la <span className="text-lab-purple">Bio</span><span className="text-lab-teal">tech</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte Apprendre */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="h-40 bg-gradient-to-r from-lab-blue/90 to-lab-blue/70 relative overflow-hidden">
                {/* Illustrations de cahier/notes */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="10" x2="300" y2="10" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                  <line x1="0" y1="40" x2="300" y2="40" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                  <line x1="0" y1="70" x2="300" y2="70" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                  <line x1="0" y1="100" x2="300" y2="100" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                  <line x1="0" y1="130" x2="300" y2="130" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                  <line x1="0" y1="160" x2="300" y2="160" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                  <line x1="0" y1="190" x2="300" y2="190" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                  <line x1="40" y1="0" x2="40" y2="200" stroke="white" strokeWidth="0.5" />
                
                  {/* Dessin de structure cellulaire au "crayon" */}
                  <circle cx="200" cy="80" r="30" stroke="white" strokeWidth="1" fill="none" strokeDasharray="2" />
                  <circle cx="200" cy="80" r="15" stroke="white" strokeWidth="1" fill="none" />
                  <path d="M180,65 C185,70 190,60 195,65" stroke="white" strokeWidth="1" fill="none" />
                </svg>
                
                <div className="absolute inset-0 bg-lab-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-lab-blue mb-3">Maîtriser les Concepts</h3>
                <p className="text-gray-600 mb-5">
                  Cours interactifs, schémas animés et QCM pour <span className="font-medium">assimiler les notions clés</span> en biologie moléculaire, cellulaire et génie génétique.
                </p>
                <Link to="/apprendre" className="inline-block text-lab-blue font-medium group-hover:underline">
                  Explorer les modules →
                </Link>
              </div>
            </div>
            
            {/* Carte Méthodes (remplace Recherche) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="h-40 bg-gradient-to-r from-lab-purple/90 to-lab-purple/70 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Pipette et Flacon */}
                  <path d="M100 40 L 100 140 Q 95 145 90 140 L 90 40 Z" stroke="white" strokeWidth="1" fill="none" />
                  <path d="M100 50 L 90 50 M 100 70 L 90 70 M 100 90 L 90 90" stroke="white" strokeWidth="0.5" />
                  <path d="M140 160 L 140 80 L 180 80 L 180 160 Q 160 170 140 160" stroke="white" strokeWidth="1" fill="none" />
                  <path d="M140 100 L 180 100" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
                  {/* Lignes décoratives */}
                  <line x1="50" y1="60" x2="70" y2="60" stroke="white" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="200" y1="120" x2="220" y2="120" stroke="white" strokeWidth="0.5" strokeDasharray="1 1" />
                </svg>
                <div className="absolute inset-0 bg-lab-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-lab-purple mb-3">Techniques & Protocoles</h3>
                <p className="text-gray-600 mb-5">
                  Fiches méthodes détaillées, <span className="font-medium">protocoles standardisés</span> et tutoriels vidéo pour maîtriser les techniques de laboratoire essentielles.
                </p>
                <Link to="/methodes" className="inline-block text-lab-purple font-medium group-hover:underline">
                  Consulter les fiches →
                </Link>
              </div>
            </div>
            
            {/* Carte Actualités */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="h-40 bg-gradient-to-r from-lab-teal/90 to-lab-teal/70 relative overflow-hidden">
                {/* Illustration actualités scientifiques */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Grille/graphique */}
                  <line x1="40" y1="40" x2="40" y2="160" stroke="white" strokeWidth="1" />
                  <line x1="40" y1="160" x2="260" y2="160" stroke="white" strokeWidth="1" />
                  
                  <line x1="40" y1="120" x2="260" y2="120" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="40" y1="80" x2="260" y2="80" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="100" y1="40" x2="100" y2="160" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="160" y1="40" x2="160" y2="160" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="220" y1="40" x2="220" y2="160" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                  
                  {/* Courbe de données */}
                  <path d="M40,140 C70,130 90,150 120,130 C150,110 180,100 220,70" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="40" cy="140" r="3" fill="white" />
                  <circle cx="120" cy="130" r="3" fill="white" />
                  <circle cx="180" cy="100" r="3" fill="white" />
                  <circle cx="220" cy="70" r="3" fill="white" />
                  
                  {/* Étiquette de données */}
                  <rect x="200" y="40" width="30" height="20" rx="2" stroke="white" strokeWidth="0.5" fill="none" />
                  <line x1="205" y1="50" x2="215" y2="50" stroke="white" strokeWidth="1" />
                  <line x1="220" y1="45" x2="220" y2="55" stroke="white" strokeWidth="1" />
                </svg>
                
                <div className="absolute inset-0 bg-lab-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-lab-teal mb-3">Veille Scientifique</h3>
                <p className="text-gray-600 mb-5">
                  Restez à la pointe avec les <span className="font-medium">dernières publications</span>, les innovations technologiques et les débats actuels en biotechnologie.
                </p>
                <Link to="/actualites" className="inline-block text-lab-teal font-medium group-hover:underline">
                  Lire les actualités →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section caractéristiques avec icônes de laboratoire */}
      <section className="py-16 relative overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-lab-blue/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 -left-20 w-60 h-60 bg-lab-purple/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-lab-teal/5 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Des outils pour réussir en Biotechnologie</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Biogy centralise les ressources indispensables aux parcours <span className="font-medium">lycéens et supérieurs</span> en biotechnologie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* QCM */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-lab-blue/10 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-lab-blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9 14l2 2 4-4" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">Évaluation Interactive</h3>
              <p className="text-gray-600 text-center">
                Validez vos acquis avec des <span className="font-medium">QCM auto-corrigés</span> et des exercices ciblés par chapitre.
              </p>
            </div>
            
            {/* Fiches méthodes */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-lab-purple/10 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-lab-purple" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">Protocoles de TP</h3>
              <p className="text-gray-600 text-center">
                Accédez à une <span className="font-medium">bibliothèque de fiches techniques</span> claires et précises pour vos manipulations.
              </p>
            </div>

            {/* Galerie */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-lab-teal/10 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-lab-teal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">Partage de Projets</h3>
              <p className="text-gray-600 text-center">
                Inspirez-vous et partagez vos <span className="font-medium">réalisations expérimentales</span> (photos, vidéos, rapports).
              </p>
              <div className="flex flex-col gap-2 items-center mt-4">
                <Link to="/projets" className="text-white bg-lab-teal hover:bg-lab-teal/90 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium w-full text-center">
                  Voir les projets
                </Link>
                <Link to="/partager-projet" className="text-lab-teal border border-lab-teal hover:bg-lab-teal/5 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium w-full text-center">
                  Créer un projet
                </Link>
              </div>
            </div>

            {/* Communauté */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-lab-green/10 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-lab-green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">Espace Collaboratif</h3>
              <p className="text-gray-600 text-center">
                Échangez avec <span className="font-medium">étudiants et enseignants</span>, posez vos questions et partagez vos astuces.
              </p>
              <div className="flex flex-col gap-2 items-center mt-4">
                <Link to="/forum" className="text-white bg-lab-green hover:bg-lab-green/90 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium w-full text-center">
                  Voir le forum
                </Link>
                <Link to="/forum/nouvelle-discussion" className="text-lab-green border border-lab-green hover:bg-lab-green/5 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium w-full text-center">
                  Créer une discussion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Projets */}
      <section className="py-16 bg-gradient-to-br from-white to-lab-teal/5 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-lab-teal/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-lab-purple/5 rounded-full blur-xl"></div>
        
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gray-800">Galerie de Projets <span className="text-lab-teal">Biogy</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les expériences partagées par notre communauté et publiez vos propres projets pour inspirer les autres.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 relative overflow-hidden">
            {/* Effet décoratif */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-lab-teal/5 rounded-full"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-lab-purple/5 rounded-full"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Partagez vos <span className="text-lab-teal">expériences</span></h3>
                <p className="text-gray-600 mb-6">
                  Que vous soyez étudiant, enseignant ou chercheur, partagez vos réalisations en laboratoire, vos observations microscopiques, ou vos expériences innovantes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-lab-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Partagez des photos et vidéos de vos cultures cellulaires</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-lab-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Documentez vos manipulations génétiques</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-lab-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Échangez sur vos résultats et recevez des retours</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link to="/projets" className="px-6 py-3 bg-gradient-to-r from-lab-teal to-lab-purple text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Explorer la galerie
                  </Link>
                  <Link to="/partager-projet" className="px-6 py-3 bg-white text-lab-teal border border-lab-teal rounded-lg hover:bg-lab-teal/5 transition-all duration-300">
                    Publier un projet
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-500">
                    <div className="w-full h-full bg-lab-teal/20 flex items-center justify-center">
                      <svg className="w-16 h-16 text-lab-teal/40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform -rotate-1 hover:rotate-0 transition-all duration-500">
                    <div className="w-full h-full bg-lab-purple/20 flex items-center justify-center">
                      <svg className="w-16 h-16 text-lab-purple/40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 13.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.5 19.92l-5.08-2.35a2.5 2.5 0 01-1.32-3.48l4.56-9.4a2.5 2.5 0 013.48-1.32l5.08 2.35a2.5 2.5 0 011.32 3.48l-4.56 9.4a2.5 2.5 0 01-3.48 1.32z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-500">
                    <div className="w-full h-full bg-lab-blue/20 flex items-center justify-center">
                      <svg className="w-16 h-16 text-lab-blue/40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.428 15.428a2.5 2.5 0 00-3.535 0l-4.95 4.95a2.5 2.5 0 103.536 3.535l4.95-4.95a2.5 2.5 0 000-3.535z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.242 13.242l-3.535-3.535a2.5 2.5 0 010-3.536l4.95-4.95a2.5 2.5 0 013.535 0l3.536 3.536" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.9 14.121L14.122 9.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <div className="w-full h-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-16 h-16 text-green-500/40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 16.5l-.35-.35a2.5 2.5 0 00-3.53 0 2.5 2.5 0 000 3.53l.35.35m0 0l10.6-10.6a2.5 2.5 0 010-3.54 2.5 2.5 0 013.54 0L21 9.5M3.47 20.03L11.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section "Rejoignez-nous" */}
      <section className="py-16 bg-gradient-to-br from-lab-blue/5 to-lab-purple/5 relative">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Cercles Décoratifs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-lab-blue/10 rounded-full"></div>
            <div className="absolute -bottom-10 right-20 w-24 h-24 bg-lab-purple/10 rounded-full"></div>
            <div className="absolute top-1/2 -left-16 w-32 h-32 bg-lab-teal/10 rounded-full"></div>
            
            {/* Contenu */}
            <div className="text-center max-w-3xl mx-auto relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Propulsez votre parcours en Biotechnologie</h2>
              <p className="text-gray-600 mb-8">
                Rejoignez la communauté Biogy pour accéder à l'ensemble des ressources, collaborer sur des projets et échanger avec vos pairs et enseignants.
              </p>
              <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-lab-blue via-lab-purple to-lab-teal text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Nous contacter
              </Link>
            </div>
          </div>
      </div>
      </section>
    </div>
  );
}

export default Homepage; 