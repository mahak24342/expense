import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../src/config/firebase-config';

const Sing = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User:", result.user);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <button onClick={handleGoogleSignIn}>Sign in with Google</button>;
};

export default Sing;
