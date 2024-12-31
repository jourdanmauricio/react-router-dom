import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const adminList = ['mjourdan', 'admin'];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  const login = (username) => {
    const isAdmin = adminList.find((admin) => admin === username);
    setUser({ username, isAdmin });

    navigate(from, { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const auth = { user, login, logout };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

const AuthRoute = (props) => {
  const auth = useAuth();

  const location = useLocation();

  if (!auth.user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return props.children;
};

// Utilizaremos un hook personalizado para acceder al contexto de autenticación (consumer).
// Este hook se llamará useAuth y devolverá el contexto de autenticación.
// Facilitará la importación.
function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

export {
  AuthProvider,
  // AuthContext
  useAuth,
  AuthRoute,
};
