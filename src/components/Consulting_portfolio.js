import pic from "../assets/Imvest_logo.png";
import pinter from "../assets/pinter.png"
import Servicecard from "./Servicecard";
import "./MainPage.css";
import { useRef, useState } from "react";
import ig from "../assets/ig_logo.png";
import face from "../assets/facebook_logo.png";
import link from "../assets/linkedin_logo.png";
import x from "../assets/X_logo.png";
import email from "../assets/email_logo.png";
import line from "../assets/Line_logo.png";
import BackToTopButton from "./Backtotop";
import AnchorTemporaryDrawer from "./Drawer";
import "./Mainpage_mol.css";
import molser from "../assets/molser.png.png";
import highlight from "../assets/highlight.png";
import cheatail from "../assets/cheatail.png";
import hi1 from "../assets/hi1.png";
import hi2 from "../assets/hi2.png";
import ScrollableList from "./Scrollablelist";
import pic2 from "../assets/pic2.png";
import "./Consulting_portfolio.css";
import mol_port from "../assets/mol_port.png"
import { useNavigate } from "react-router-dom";
function Consulting_portfolio() {
    var isMobile = window.innerWidth <= 500;
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
    const handleLogout = () => {
      localStorage.removeItem('isLoggedIn');
      navigate('/');
      window.location.reload(); // Optional: to refresh the page
    };
  return (
    <>
    {isMobile?(<>
        <div className="molbar">
            <img src={pic}></img>

            <AnchorTemporaryDrawer />
          </div>
          
          <div className="molar_select">
            <div style={{ width: "350px", display: "flex" }}>
              <div
                className="molar_ar"
                style={{
                  width: "186px",
                  height: "74px",
                  borderRadius: "10px 10px 0px 0px",
                  color: "#000",
                  fontFamily: '"LINE Seed Sans TH"',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "80px",
                  textAlign: "center",
                }}
              >
                <a href="Consulting_service">our service</a>
              </div>
              <div
                className="molar_course"
                style={{
                  width: "164px",
                  height: "74px",
                  borderRadius: "10px 10px 0px 0px",
                  background: "#89CDBA",
                  color: "#000",
                  fontFamily: '"LINE Seed Sans TH"',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "80px",
                  textAlign: "center",
                }}
              >
                <a href="Consulting_portfolio">portfolio</a>

              </div>
              
            </div>
            
          </div>
          
      <div
            style={{
              width: "350px",
              height: "163px",
              background: 'linear-gradient(180deg, #89CDBA 0%, rgba(217, 217, 217, 0.00) 100%)',
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                width: "348px",
                height: "136px",
                color: "#000",
                fontFamily: '"LINE Seed Sans TH"',
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "40px",
                paddingTop: "57px",
              }}
            >
              Impvest เชื่อและมั่นใจ<br></br> ในศักยภาพของ<br></br>  ผู้ประกอบการไทย

            </div>
            <div
              style={{
                
                width: "354px",
                height: "188px",
                color: "#000",
                fontFamily: '"LINE Seed Sans TH"',
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
           ด้วยปัญหาธุรกิจในก็ตาม ทีมของเรามีความแน่แน่และมีความยินดี
ที่จะให้ความช่วยเหลือกับ SME ทุกขนาด  ไม่ว่าจะเป็นธุรกิจที่กำลังเริ่มก่อตั้ง
หรือธุรกิจที่มีรากฐานมาเป็นเวลานานแล้ว
<img src={mol_port} style={{marginTop:'30px', marginBottom:'10px'}}></img>

            </div>  

               
   
            </div>
            <div className="momofooter" style={{marginLeft:'auto',marginRight:'auto',marginTop:'1640px'}}>
            <img src={pic2} className="foot1" ></img>
            <div className="foot2">
            <div style={{color:'white',display:'flex',gap:'90px',marginBottom:'32px',marginTop:'16px',lineHeight:'30px'}}>
                  <div>
                        <div><a href="/">About us</a></div>
                        <div><a href="Consulting_article">Academy</a></div>

                        <div><a href="Contact">Contact us</a></div>
                      </div>
                      <div>
                        {" "}
                        <div><a href="Consulting_service">Consulting</a></div>
                        <div><a href="Innovation">Innovation</a></div>
                        <div>Sign in</div>
                      </div>
                    </div>

            </div>
            <div className="foot3">

            <div className="footer_log" style={{marginLeft:'16px'}}>
                    <img src={line} style={{marginRight:'17px'}}></img>
                    <img src={face} style={{marginRight:'17px'}}></img>

                    <img src={ig} style={{marginRight:'17px'}}></img>

                    <img src={link} style={{marginRight:'17px'}}></img>

                    <img src={x} style={{marginRight:'17px'}}></img>

                    <img src={email} style={{marginRight:'17px'}}></img>

                  </div>
                  © 2023 Impvest. All Rights Reserved
            </div>

          </div>
    
    
    </>):( <>
      <div className="header">
      <div className="logo_box">
        <a href='/'><img src={pic} alt="Logo" /></a>
      </div>
      <div className="appbar">
        <div className="menu">
          <div className="menu_box">
            <a href="/">About us</a>
          </div>
          <div className="menu_box">
            <a href="/Consulting_service">Consulting</a>
          </div>
          <div className="menu_box">
            <a href="/Consulting_article">Academy</a>
          </div>
          <div className="menu_box">
            <a href="/Innovation">Innovation</a>
          </div>
          <div className="menu_box">
            <a href="/Contact">Contact us</a>
          </div>
          <div className="button_signin">
            {isLoggedIn ? (
              <a onClick={handleLogout}>Logout</a>
            ) : (
              <a href="/Sign_in">Sign in</a>
            )}
          </div>
        </div>
        <div className="underline"></div>
      </div>
    </div>
        <div className="service_selector">
          <div className="consulting_text">Consulting</div>
          <div className="ourservice_port" style={{background:'white'}}><a href = 'Consulting_service'>Our service</a></div>
          <div className="portfolio_port" style={{background:'#89CDBA'}}>Portfolio</div>
        </div>
        <div></div>
        <div className="service_fader_port">
          <div className="service_fader_top_port">
          <div style={{width: '621px',
    color: '#000',
    fontFamily: '"LINE Seed Sans TH"',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '60px',position:'absolute',right:'20px',top:'150px'}}>Impvest เชื่อและมั่นใจใน
ศักยภาพของผู้ประกอบการไทย</div>

<div style={{width: '553px',
    color: '#000',
    fontFamily: '"LINE Seed Sans TH"',
    fontSize: '19px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '25px',position:'absolute',right:'85px',top:'300px',marginBottom:'163px'}}>ด้วยปัญหาธุรกิจในก็ตาม ทีมของเรามีความแน่แน่และมีความยินดี
    ที่จะให้ความช่วยเหลือกับ SME ทุกขนาด  ไม่ว่าจะเป็นธุรกิจที่กำลังเริ่มก่อตั้ง
    หรือธุรกิจที่มีรากฐานมาเป็นเวลานานแล้ว</div>

          <img src={pinter} style={{marginLeft:'50px',position:'relative'}}>

            
          </img>
     
            
            
          </div>
          
        
        </div>
        <div className="footer_black" style={{marginTop:'1800px'}}>
                  <img src={pic2} style={{width: '230.493px',
height: '59px',marginLeft:'110px',marginRight:'387px'}}></img>
                  <div className="footer_log">
                    <img src={line} style={{marginRight:'17px'}}></img>
                    <img src={face} style={{marginRight:'17px'}}></img>

                    <img src={ig} style={{marginRight:'17px'}}></img>

                    <img src={link} style={{marginRight:'17px'}}></img>

                    <img src={x} style={{marginRight:'17px'}}></img>

                    <img src={email} style={{marginRight:'17px'}}></img>

                  </div>
                  
                  <div style={{display:'flex',gap:'90px',fontSize:'20px',fontStyle:'normal',fontWeight:'400',marginLeft:'96px',lineHeight:'30px'}}>
                  <div>
                        <div>About us</div>
                        <div><a href="Consulting_article">Academy</a></div>

                        <div><a href="Contact">Contact us</a></div>
                      </div>
                      <div>
                        {" "}
                        <div><a href="Consulting_service">Consulting</a></div>
                        <div><a href="Innovation">Innovation</a></div>
                        <div>Sign in</div>
                      </div>
                    </div>
                </div>
        
      </>)}
     
    </>
  );
}

export default Consulting_portfolio;
