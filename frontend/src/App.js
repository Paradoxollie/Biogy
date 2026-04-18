import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SystemStatusBanner from './components/SystemStatusBanner';
import AuthDebug from './context/AuthDebug';

// Route-level code splitting: chaque page est chargee a la demande
// pour reduire drastiquement le bundle initial (important sur wifi lycee).
const Homepage = lazy(() => import('./components/Homepage'));
const ApprendrePage = lazy(() => import('./components/ApprendrePage'));
const LaboratoryPage = lazy(() => import('./components/LaboratoryPage'));
const LaboratoryActivityPage = lazy(() => import('./components/LaboratoryActivityPage'));
const CourseLevelPage = lazy(() => import('./components/CourseLevelPage'));
const CourseChapterPage = lazy(() => import('./components/CourseChapterPage'));
const ShareProjectPage = lazy(() => import('./components/ShareProjectPage'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const RegisterPage = lazy(() => import('./components/RegisterPage'));
const AdminPage = lazy(() => import('./components/AdminPage'));
const ProjectsGallery = lazy(() => import('./components/ProjectsGallery'));
const ScienceWatchPage = lazy(() => import('./components/ScienceWatchPage'));
const ForumPage = lazy(() => import('./components/ForumPage'));
const TopicPage = lazy(() => import('./components/TopicPage'));
const NewTopicPage = lazy(() => import('./components/NewTopicPage'));
const ProfilePage = lazy(() => import('./components/ProfilePage'));
const ProfileEditPage = lazy(() => import('./components/ProfileEditPage'));

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
      <div className="flex items-center gap-3 rounded-pill border border-surface-line bg-white px-5 py-3 shadow-soft">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-biogy-500" aria-hidden="true" />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">Chargement</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      {process.env.NODE_ENV !== 'production' ? <AuthDebug /> : null}
      <SystemStatusBanner />
      <Layout>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/apprendre" element={<ApprendrePage />} />
            <Route path="/laboratoire" element={<LaboratoryPage />} />
            <Route path="/laboratoire/:activityId" element={<LaboratoryActivityPage />} />
            <Route path="/apprendre/:levelId" element={<CourseLevelPage />} />
            <Route path="/apprendre/:levelId/:chapterId" element={<CourseChapterPage />} />
            <Route path="/apprendre/:levelId/:chapterId/:lessonId" element={<CourseChapterPage />} />
            <Route path="/recherche" element={<Navigate to="/laboratoire" replace />} />
            <Route path="/actualites" element={<ScienceWatchPage />} />
            <Route path="/methodes" element={<Navigate to="/laboratoire" replace />} />
            <Route
              path="/contact"
              element={(
                <div className="container mx-auto p-10 text-center">
                  <h1 className="font-display text-display-md text-ink-900">Contact</h1>
                  <p className="mt-4 text-ink-600">Cette section est en cours de developpement.</p>
                </div>
              )}
            />
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
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
