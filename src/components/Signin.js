import React from 'react';
import './SignInComponent.css';

const SignInComponent = () => {
  return (
    <div className="signin-page">
      <div className="signin-section">
        <div className="signin-container">
          <h1 className="signin-title">ยินดีต้อนรับ</h1>
          <p className="signin-subtitle">ลงชื่อเข้าใช้</p>
          <div className="signin-buttons">
            <button className="signin-button google">
              <img src="google-icon.png" alt="Google" /> ผ่าน Google
            </button>
            <button className="signin-button facebook">
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
