import React, { useState } from 'react';
import axios from 'axios';
import './Sign_up.css';

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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-setup-page">
      <div className="profile-setup-container">
        <div className="profile-sidebar">
          <img src="profile-picture.png" alt="Profile" className="profile-picture" />
          <h2 className="profile-name">ชื่อจริง-นามสกุล</h2>
          <div className="auth-method">
            <img src="apple-icon.png" alt="Apple" />
            <span>ลงชื่อเข้าใช้ผ่าน Apple</span>
          </div>
          <div className="progress-steps">
            <div className="step completed">
              <span>ลงทะเบียน</span>
            </div>
            <div className="step active">
              <span>รายละเอียดโปรไฟล์</span>
            </div>
            <div className="step">
              <span>สรุปโปรไฟล์</span>
            </div>
          </div>
        </div>
        <div className="profile-form">
          <h2 className="form-title">
            <img src="logo-icon.png" alt="Logo" className="form-title-logo" />
            การตั้งค่าโปรไฟล์
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>ชื่อจริง</label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>นามสกุล</label>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>ที่อยู่อีเมล</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>เบอร์โทรศัพท์</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>หมวดธุรกิจ</label>
                <select name="industry" value={formData.industry} onChange={handleChange}>
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
                <select name="companysize" value={formData.companysize} onChange={handleChange}>
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
                <select name="company" value={formData.company} onChange={handleChange}>
                  <option value="">เลือก</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>ปัญหาที่พบ</label>
                <textarea name="problem" value={formData.problem} onChange={handleChange}></textarea>
              </div>
              <div className="form-group">
                <label>เป้าหมายที่ตั้งไว้</label>
                <textarea name="goal" value={formData.goal} onChange={handleChange}></textarea>
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
