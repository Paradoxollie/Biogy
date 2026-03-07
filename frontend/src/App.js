import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ApprendrePage from './components/ApprendrePage';
import CourseLevelPage from './components/CourseLevelPage';
import CourseChapterPage from './components/CourseChapterPage';
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
import SystemStatusBanner from './components/SystemStatusBanner';
import AuthDebug from './context/AuthDebug';

function App() {
  return (
    <>
      {process.env.NODE_ENV !== 'production' ? <AuthDebug /> : null}
      <SystemStatusBanner />
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/apprendre" element={<ApprendrePage />} />
          <Route path="/apprendre/:levelId" element={<CourseLevelPage />} />
          <Route path="/apprendre/:levelId/:chapterId" element={<CourseChapterPage />} />
          <Route path="/apprendre/:levelId/:chapterId/:lessonId" element={<CourseChapterPage />} />
          <Route path="/recherche" element={<div className="container mx-auto p-10 text-center"><h1 className="text-3xl font-bold text-lab-purple">Section Recherche</h1><p className="mt-4">Cette section est en cours de developpement</p></div>} />
          <Route path="/actualites" element={<ScienceWatchPage />} />
          <Route path="/methodes" element={<div className="container mx-auto p-10 text-center"><h1 className="text-3xl font-bold text-lab-green">Section Methodes</h1><p className="mt-4">Cette section est en cours de developpement</p></div>} />
          <Route path="/contact" element={<div className="container mx-auto p-10 text-center"><h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lab-blue to-lab-purple">Contact</h1><p className="mt-4">Cette section est en cours de developpement</p></div>} />
          <Route path="/partager-projet" element={<ShareProjectPage />} />
          <Route path="/projets" element={<ProjectsGallery />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/forum/:id" element={<TopicPage />} />
          <Route path="/forum/nouveau" element={<NewTopicPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
