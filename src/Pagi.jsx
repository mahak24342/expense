import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from './config/firebase-config';
import { useNavigate,Navigate } from 'react-router-dom';
import './index.css';
import { useGetUserInfo } from './hooks/useGetUserInfo';

const Pagi = () => {
  const navigate = useNavigate();
const {isAuth}=useGetUserInfo
  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, provider);

      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };

      localStorage.setItem('auth', JSON.stringify(authInfo));
      console.log(authInfo);
      navigate('/expense');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  if(isAuth){
return <Navigate to= "/expense"/>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
      <div className="text-center bg-white rounded-lg shadow-lg p-8 text-gray-800 w-11/12 md:w-1/2 lg:w-1/3">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
          Welcome!
        </h1>
        <p className="mb-6 text-lg">
          Sign in with Google to access your account and start managing your expenses.
        </p>
        <button
          onClick={signInWithGoogle}
          className="flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition-all ease-in-out duration-300 hover:scale-105 w-full"
        >
          <img
            src="/787.png"
            alt="Google Logo"
            className="w-6 h-6 mr-3"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Pagi;
