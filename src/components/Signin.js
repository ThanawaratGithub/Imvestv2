import React, { useState } from 'react';
import axios from 'axios';
import './SignInComponent.css';
import { useNavigate } from 'react-router-dom';
const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const handleEmailSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://api.impvest.com/auth/login', {
        email,
        password,
      });
      console.log('Successfully signed in:', response.data);
      // Set localStorage status to true
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to the main page after successful login
      window.location.href = '/';
    } catch (error) {
      console.error('Error during email sign-in:', error);
      setError('Email sign-in failed. Please try again.');
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-section">
        <div className="signin-container">
        <button className="back-button"  onClick={() => navigate('/')}>
            ← 
          </button>
          <h1 className="signin-title">ยินดีต้อนรับ</h1>
          <p className="signin-subtitle">ลงชื่อเข้าใช้</p>
          <form onSubmit={handleEmailSignIn}>
            <div className="form-group">
              <label htmlFor="email">อีเมล</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">รหัสผ่าน</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="signin-button">ลงชื่อเข้าใช้</button>
          </form>
          <div className="register-container">
            <p className="register-text">ยังไม่มีบัญชี?</p>
            <a className="register-link" href="/Sign_up">ลงทะเบียนเลย</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
