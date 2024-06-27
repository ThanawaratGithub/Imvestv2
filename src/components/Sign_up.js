import React, { useState } from 'react';
import axios from 'axios';
import './Sign_up.css';
import log from "../assets/Imvest_logo.png";

const SignUpComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    company: '',
    companysize: '',
    industry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      url: 'http://api.impvest.com/auth/signup',
      headers: { 'Content-Type': 'application/json' },
      data: formData,
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = '/'; // Redirect to the main page after successful signup
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-setup-page">
      <div className="profile-setup-container">
        <div className="profile-sidebar">
          <div className="auth-method">
            <img style={{width:'281px',height:'72px'}} src= {log} alt="Apple" />
          </div>
          <div className="progress-steps">
            <div className="step actived">
              <span>ลงทะเบียน</span>
            </div>
            <div className="step completed">
              <span>รายละเอียดโปรไฟล์</span>
            </div>
            
          </div>
        </div>
        <div className="profile-form">
          <h2 className="form-title">
            การตั้งค่าโปรไฟล์
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>อีเมล</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>รหัสผ่าน</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>ชื่อจริง</label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>นามสกุล</label>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>เบอร์โทรศัพท์</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>หมวดธุรกิจ</label>
                <select name="industry" value={formData.industry} onChange={handleChange} required>
                  <option value="">เลือกหมวดธุรกิจ</option>
                  <option value="agriculture">เกษตรและอุตสาหกรรมอาหาร</option>
                  <option value="consumer_goods">สินค้าอุปโภคบริโภค</option>
                  <option value="finance">ธุรกิจการเงิน</option>
                  <option value="industry">สินค้าอุตสาหกรรม</option>
                  <option value="real_estate">อสังหาริมทรัพย์และการก่อสร้าง</option>
                  <option value="resources">ทรัพยากร</option>
                  <option value="services">บริการ</option>
                  <option value="technology">เทคโนโลยี</option>
                </select>
              </div>
              <div className="form-group">
                <label>ขนาดธุรกิจ</label>
                <select name="companysize" value={formData.companysize} onChange={handleChange} required>
                  <option value="">เลือกขนาดธุรกิจ</option>
                  <option value="micro">ธุรกิจรายย่อย (ลูกจ้าง 1 - 4 คน)</option>
                  <option value="small">ธุรกิจขนาดย่อม (ลูกจ้าง 5 - 19 คน)</option>
                  <option value="medium">ธุรกิจขนาดกลาง (ลูกจ้าง 20 - 99 คน)</option>
                  <option value="large">ธุรกิจขนาดใหญ่ (ลูกจ้าง 100 คนและมากกว่า)</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>ที่ตั้งธุรกิจ</label>
                <textarea name="company" value={formData.company} onChange={handleChange} required>
                </textarea>
              </div>
            </div>
            <button type="submit" className="submit-button">เสร็จสิ้น</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
