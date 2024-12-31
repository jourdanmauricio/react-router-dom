import { useAuth } from '../../AuthContext';

const LogoutPage = () => {
  const auth = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.logout();
  };

  return (
    <>
      <h1 className='text-2xl my-8 font-bold text-center'>Logout</h1>

      <form onSubmit={handleSubmit}>
        <p>¿Seguro de que quieres salir?</p>

        <button className='border rounded p-2 mt-8' type='submit'>
          Salir
        </button>
      </form>
    </>
  );
};
export { LogoutPage };
