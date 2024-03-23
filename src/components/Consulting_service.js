import "./Consulting_service.css";
import pic from "../assets/Imvest_logo.png";
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
function Consulting_service() {
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
          <div className="ourservice">Our service</div>
          <div className="portfolio"><a href="Consulting_portfolio">Portfolio</a></div>
        </div>
        <div></div>
        <div className="service_fader">
          <div className="service_fader_top">
            {" "}
            <div className="service_fader_body">
              <div>
                <div className="fader_text">
                  Impvest พร้อมรับฟัง<br></br>
                  และช่วยเหลือ SME ไทย <br></br>
                  สู่การเติบโตแบบยั่งยืน
                </div>
                <div
                  style={{
                    color: "#6D6D6D",
                    fontFamily: '"LINE Seed Sans TH"',
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                    width: "572px",
                    height: "118px",
                    marginLeft: "30px",
                    marginTop: "55px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div
                  style={{
                    width: "216px",
                    height: "45px",
                    marginLeft: "30px",
                    marginTop: "55px",
                    color: "#FFF", // Changed to white (#FFF)
                    fontFamily: '"LINE Seed Sans TH"',
                    fontSize: "24px", // Updated font size
                    fontStyle: "normal",
                    fontWeight: 700, // Updated font weight
                    lineHeight: "45px", // Updated line height
                    borderRadius: "8px",
                    textAlign: "center",
                    background: "#56D7A6",
                    boxShadow: "6px 7px 14.7px 1px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  คุยกับเราเลย!
                </div>
              </div>
              <div className="fader_pic"></div>
            </div>
            <div className="service_fader_bot"></div>
            <div className="service_main">
              <div className="service_content_top">Business Strategy</div>
              <div
                style={{
                  width: "1340px",
                  height: "2px",
                  background: "#114940",
                  marginTop: "19px",
                }}
              ></div>
              <div className="service_content_body">
                <div className="service_content_body_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="service_content_body_pic">
                  <Servicecard
                    val={{
                      subword1: "ออกแบบภาพรวมธุรกิจ",
                      subword2: "วางตำแหน่งทางการตลาด",
                      tail: "พัฒนากลยุทธ์",
                      picid: 0,
                    }}
                  />
                  <Servicecard
                    val={{
                      subword1: "กำจัดงานซ้ำซ้อน",
                      subword2: "พัฒนาบุคลากร",
                      tail: "เพิ่มประสิทธิภาพ",
                      picid: 1,
                    }}
                  />
                  <Servicecard
                    val={{
                      subword1: "กู้ยืมธนาคาร",
                      subword2: "ออกแบบ Pitch Deck",
                      tail: "สรรหาเงินทุน",
                      picid: 2,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="service_main" style={{marginTop:'112px'}}>
              <div  className="service_content_top" style={{marginLeft:'960px'}} >Marketing & Branding</div>
              <div
                style={{
                  width: "1340px",
                  height: "2px",
                  background: "#114940",
                  marginTop: "19px",
                }}
              ></div>
              <div className="service_content_body">
                {" "}
               
                <div className="service_content_body_pic">
                  <Servicecard
                    val={{
                      subword1: "พัฒนาเอกลักษณ์",
                      subword2: "ขยายกลุ่มลูกค้า",
                      tail: "กลยุทธ์แบรนด์",
                      picid: 3,
                    }}
                  />
                  <Servicecard
                    val={{
                      subword1: "การตลาดออนไลน์",
                      subword2: "แคมเปญโฆษณา",
                      tail: "เพิ่มยอดขาย",
                      picid: 4,
                    }}
                  />
                  <Servicecard
                    val={{
                      subword1: "เพิ่มความพึงพอใจ",
                      subword2: "สร้างลูกค้าประจำ",
                      tail: "รักษาลูกค้า",
                      picid: 5,
                    }}
                  />
                </div>

                <span className="service_content_body_text" style={{direction:'rtl',marginLeft:'90px', marginRight: '0px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </span>
              </div>
            </div>
            <div className="service_main" style={{marginTop:'112px'}}>
            <div className="service_content_top">Digital Transformation</div>
              <div
                style={{
                  width: "1340px",
                  height: "2px",
                  background: "#114940",
                  marginTop: "19px",
                }}
              ></div>
              <div className="service_content_body">
                {" "}
                <div className="service_content_body_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="service_content_body_pic">
                  <Servicecard
                    val={{
                      subword1: "สร้างหน้าร้านออนไลน์",
                      subword2: "พัฒนา Database และ Digital Product",
                      tail: "จัดวางระบบ IT",
                      picid: 6,
                    }}
                  />
                  <Servicecard
                    val={{
                      subword1: "ทำ Data Analysis",
                      subword2: "สร้าง Dashboard",
                      tail: "เติบโตด้วย Data",
                      picid: 7,
                    }}
                  />
                  <Servicecard
                    val={{
                      subword1: "ลดเวลาทำงาน",
                      subword2: "บูรณาการระบบ Cloud",
                      tail: "ประสิทธิภาพจาก AI",
                      picid: 8,
                    }}
                  />
                </div>
                
              </div>
            </div>
            
            
          </div>
          
        
        </div>
        <div className="footer_black" style={{marginTop:'2400px'}}>
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

export default Consulting_service;
