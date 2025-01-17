import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { App } from './App.jsx';
import { Profile } from './Pages/Profile.jsx';
import { SignUp } from './Pages/SignUp.jsx';
import { SignIn } from './Pages/SignIn.jsx';
import { About } from './Pages/About.jsx';
import { Landing } from './Pages/Landing/Landing.jsx';
import { LicenseAgreement } from './Pages/LicenseAgreement.jsx';
import { RemindPassword } from './Pages/RemindPassword.jsx';
import NotFound from './Pages/NotFound.jsx';
import { useAuth } from './hooks';
import Layout from './components/Layout.jsx';
import EmbedSnippet from './components/Embed/EmbedSnippet.jsx';

import routes from './routes.js';

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to={routes.signUpPagePath()} replace />;
  }
  return children || <Outlet />;
}

function AppRoutes() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/editor" element={<App />} />
        <Route path="/users/:login/snippets/:slug" element={<App />} />
        <Route path={routes.aboutPagePath()} element={<About />} />
        <Route element={<ProtectedRoute user={isLoggedIn} />}>
          <Route path={routes.profilePagePath()} element={<Profile />} />
        </Route>
        <Route path={routes.signUpPagePath()} element={<SignUp />} />
        <Route path={routes.loginPagePath()} element={<SignIn />} />
        <Route
          path={routes.remindPassPagePath()}
          element={<RemindPassword />}
        />
        <Route
          path={routes.licenseAgreementPath()}
          element={<LicenseAgreement />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path={routes.embedPagePath()} element={<EmbedSnippet />} />
      <Route
        path={routes.snippetPagePath()}
        element={<App />}
        loader={({ params }) => ({ login: params.login, slug: params.slug })}
      />
    </Routes>
  );
}

export default AppRoutes;
