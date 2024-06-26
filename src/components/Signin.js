import React, { useEffect } from 'react';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
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

const SignInComponent = () => {
    const mockData = {
        firstname: 'Puchit',
        lastname: 'Bunpleng',
        phone: '0650319581',
        company: 'Artmosphere',
        companysize: 'Micro',
        industry: 'Legal tech',
      };
  const handleGoogleSignIn = async () => {
 

    const googleProvider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const res = await axios.post('http://api.impvest.com/auth/google', mockData, {
        headers: {
          'Authorization': `Bearer ${credential.idToken}`,
          'Content-Type': 'application/json'
        }
      });

      console.log(res.data);
    } catch (error) {
      console.error('Error during Google sign-in:', error);
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

      const res = await axios.post('http://api.impvest.com/auth/facebook', mockData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });

      console.log(res.data);
    } catch (error) {
      console.error('Error during Facebook sign-in:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
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
