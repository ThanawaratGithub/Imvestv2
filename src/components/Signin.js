import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from 'firebase/firestore';
import './SignInComponent.css';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVE_E3QCpkkoUlXaG85irNMU4os0cYvo0",
  authDomain: "impvest-dev.firebaseapp.com",
  projectId: "impvest-dev",
  storageBucket: "impvest-dev.appspot.com",
  messagingSenderId: "837341582010",
  appId: "1:837341582010:web:ac02d1e5b946f373482883",
  measurementId: "G-WCTJYHELF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const SignInComponent = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleGoogleSignIn = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const res = await axios.post('http://api.impvest.com/auth/google', {}, {
        headers: {
          'Authorization': `Bearer ${credential.idToken}`,
          'Content-Type': 'application/json',
        },
      });

      console.log(res.data);
      setUser({
        uid: result.user.uid,
        idToken,
      });

      // Optionally, you can store the user info in localStorage to persist the login state
      localStorage.setItem('user', JSON.stringify({
        uid: result.user.uid,
        idToken,
      }));

    } catch (error) {
      console.error('Error during Google sign-in:', error);
      setError('Google sign-in failed. Please try again.');
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
    }
  };

  const handleFacebookSignIn = async () => {
    const facebookProvider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const accessToken = FacebookAuthProvider.credentialFromResult(result).accessToken;

      const res = await axios.post('http://api.impvest.com/auth/facebook', {}, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });

      console.log(res.data);
      setUser({
        uid: result.user.uid,
        accessToken,
      });

      // Optionally, you can store the user info in localStorage to persist the login state
      localStorage.setItem('user', JSON.stringify({
        uid: result.user.uid,
        accessToken,
      }));

    } catch (error) {
      console.error('Error during Facebook sign-in:', error);
      setError('Facebook sign-in failed. Please try again.');
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
    }
  };

  useEffect(() => {
    const fetchUserData = async (token) => {
      try {
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const usersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserData(usersList);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchUserData(user.idToken || user.accessToken);
    }
  }, [user]);

  const addUser = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@example.com',
        uid: user.uid,
      });
      console.log('Document written with ID: ', docRef.id);
      setUserData([...userData, { id: docRef.id, firstname: 'John', lastname: 'Doe', email: 'johndoe@example.com' }]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-section">
        <div className="signin-container">
          <h1 className="signin-title">ยินดีต้อนรับ</h1>
          <p className="signin-subtitle">ลงชื่อเข้าใช้</p>
          <div className="signin-buttons">
            <button className="signin-button google" onClick={handleGoogleSignIn}>
              <img src="google-icon.png" alt="Google" /> ผ่าน Google
            </button>
            <button className="signin-button facebook" onClick={handleFacebookSignIn}>
              <img src="facebook-icon.png" alt="Facebook" /> ผ่าน Facebook
            </button>
            <button className="signin-button apple">
              <img src="apple-icon.png" alt="Apple" /> ผ่าน Apple
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
          {user && (
            <div className="success-message">
              <p>Successfully logged in</p>
              <p>User ID: {user.uid}</p>
            </div>
          )}
          <button onClick={addUser}>Add User</button>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {userData.map(user => (
                <li key={user.id}>{`${user.firstname} ${user.lastname} (${user.email})`}</li>
              ))}
            </ul>
          )}
          <div className="register-container">
            <p className="register-text">ยังไม่มีบัญชี?</p>
            <a className="register-link" href="#">ลงทะเบียนเลย</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
