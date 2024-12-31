import { useState } from 'react';

import { useAuth } from '../../AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(username);
  };

  if (auth.user) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <h1 className='text-2xl my-8 font-bold text-center'>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          className='block w-full p-2 border border-gray-300 rounded mt-1'
          id='username'
          name='username'
          type='text'
          placeholder=''
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className='border rounded p-2 mt-8' type='submit'>
          Login
        </button>
      </form>
    </>
  );
};

export { LoginPage };
