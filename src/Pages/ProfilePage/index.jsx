// import { Navigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const ProfilePage = () => {
  const auth = useAuth();

  // if (!auth.user) {
  //   return <Navigate to='/login' />;
  // }

  return (
    <>
      <h1 className='text-2xl my-8 font-bold text-center'>Perfil</h1>
      <p>Bienvenido, {auth.user.username} </p>
    </>
  );
};
export { ProfilePage };
