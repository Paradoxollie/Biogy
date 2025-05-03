import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Layout from './components/Layout';
import ShareProjectPage from './components/ShareProjectPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AdminPage from './components/AdminPage';
import ProjectsGallery from './components/ProjectsGallery';
import ScienceWatchPage from './components/ScienceWatchPage';
import ForumPage from './components/ForumPage';
import TopicPage from './components/TopicPage';
import NewTopicPage from './components/NewTopicPage';
import ProfilePage from './components/ProfilePage';
import ProfileEditPage from './components/ProfileEditPage';
import AuthDebug from './context/AuthDebug';

function App() {
  return (
    <>
      <AuthDebug />
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/apprendre" element={<div className="container mx-auto p-10 text-center"><h1 className="text-3xl font-bold text-lab-blue">Section Apprendre</h1><p className="mt-4">Cette section est en cours de développement</p></div>} />
          <Route path="/recherche" element={<div className="container mx-auto p-10 text-center"><h1 className="text-3xl font-bold text-lab-purple">Section Recherche</h1><p className="mt-4">Cette section est en cours de développement</p></div>} />
          <Route path="/actualites" element={<ScienceWatchPage />} />
          <Route path="/methodes" element={<div className="container mx-auto p-10 text-center"><h1 className="text-3xl font-bold text-lab-green">Section Méthodes</h1><p className="mt-4">Cette section est en cours de développement</p></div>} />
          <Route path="/contact" element={<div className="container mx-auto p-10 text-center"><h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lab-blue to-lab-purple">Contact</h1><p className="mt-4">Cette section est en cours de développement</p></div>} />
          <Route path="/partager-projet" element={<ShareProjectPage />} />
          <Route path="/projets" element={<ProjectsGallery />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/forum/:id" element={<TopicPage />} />
          <Route path="/forum/nouveau" element={<NewTopicPage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;