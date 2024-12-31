import { NavLink } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const routes = [
  { id: 1, label: 'Home', url: '/', private: false, publicOnly: false },
  { id: 2, label: 'Blog', url: '/blog', private: false, publicOnly: false },
  { id: 3, label: 'Profile', url: '/profile', private: true, publicOnly: false },
  { id: 4, label: 'Login', url: '/login', private: false, publicOnly: true },
  { id: 5, label: 'Logout', url: '/logout', private: true, publicOnly: false },
];

const Menu = () => {
  const auth = useAuth();

  return (
    <nav>
      <ul className='flex space-x-4'>
        {routes.map((route) => {
          if (route.private && !auth.user) {
            return null;
          }

          if (route.publicOnly && auth.user) {
            return null;
          }

          return (
            <li key={route.id}>
              <NavLink
                to={route.url}
                className={({ isActive }) => (isActive ? 'text-red-500' : 'text-blue-500')}
              >
                {route.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export { Menu };
