import { HashRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider, AuthRoute } from './AuthContext';
import { Menu } from './components/Menu';
import { HomePage } from './Pages/HomePage';
import { BlogPage } from './Pages/BlogPage';
import { ProfilePage } from './Pages/ProfilePage';
import { NotFoundPage } from './Pages/NotFoundPage';
// import { BlogPostPage } from './components/Pages/BlogPostPage';
import BlogPost from './components/BlogPost';
import './App.css';
import { LoginPage } from './Pages/LoginPage';
import { LogoutPage } from './Pages/LogoutPage';

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path='/' element={<HomePage />} />

            {/* <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:slug' element={<BlogPostPage />} /> */}

            {/* Nested Route */}
            <Route path='/blog' element={<BlogPage />}>
              <Route path=':slug' element={<BlogPost />} />
            </Route>

            <Route path='/login' element={<LoginPage />} />
            <Route
              path='/logout'
              element={
                <AuthRoute>
                  <LogoutPage />{' '}
                </AuthRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
