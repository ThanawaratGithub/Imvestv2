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

function Consulting_portfolio() {
  return (
    <>
      <>
        <div className="header">
          <div className="logo_box">
            <a href="/">
              {" "}
              <img src={pic}></img>
            </a>
          </div>
          <div className="appbar">
            <div className="menu">
            <div className="menu_box">About us</div>
                    <div className="menu_box">
                      <a href="Consulting_service">Consulting</a>
                    </div>
                    <div className="menu_box">
                      <a href="Consulting_article">Academy</a>
                    </div>
                    <div className="menu_box">
                      <a href="Innovation">Innovation</a>
                    </div>
                    <div className="menu_box">
                      <a href="Contact">Contact us</a>
                    </div>
                    <div className="button_signin">Sign in</div>
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

<div style={{width: '621px',
    color: '#000',
    fontFamily: '"LINE Seed Sans TH"',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px',position:'absolute',right:'20px',top:'300px',marginBottom:'163px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

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
        
      </>
    </>
  );
}

export default Consulting_portfolio;
