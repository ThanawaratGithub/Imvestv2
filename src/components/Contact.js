import "./Contact.css";
import pic from "../assets/Imvest_logo.png";
import ig from "../assets/ig_logo.png";
import face from "../assets/facebook_logo.png";
import link from "../assets/linkedin_logo.png";
import x from "../assets/X_logo.png";
import email from "../assets/email_logo.png";
import line from "../assets/Line_logo.png";
import pic2 from "../assets/pic2.png";
import AnchorTemporaryDrawer from "./Drawer";
function Contact() {
  var isMobile = window.innerWidth <= 500;

  return (
    <>
      {isMobile ? (
        <>
          <div className="molbar">
            <img src={pic}></img>

            <AnchorTemporaryDrawer />
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="mol_contactgroup"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="mol_con_head">Contact us</div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="con_text">หัวข้อ :</div>
                <textarea
                      className="con_box"
                  style={{
              
                    minWidth: "349px",
                    height: "42px",
                    background: "#D9D9D9",

                    opacity: "0.4",
                  }}
                ></textarea>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="con_text">เนื้อหา :</div>
                <textarea

                                    className ="con_box"

                  style={{
                    minWidth: "349px",
                    minHeight: "190px",
                    background: "#D9D9D9",
                    color:'black',
                    opacity: "0.4",
                  }}
                ></textarea>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="con_text">ช่องทางติดต่อ</div>
                <textarea
                  className ="con_box"
                  style={{
                    width: "349px",
                    height: "42px",
                    background: "#D9D9D9",

                    opacity: "0.4",
                  }}
                ></textarea>
              </div>
              <svg style={{marginTop:'37px'}}  xmlns="http://www.w3.org/2000/svg" width="40" height="26" viewBox="0 0 40 26" fill="none">
<path d="M0 -1.74846e-06L40 12L9.04215 12L0 -1.74846e-06Z" fill="#3E3E3E"/>
<path d="M0 26L40 14L9.04215 14L0 26Z" fill="#3E3E3E"/>
</svg>

            </div>
          </div>
          <div className="momofooter" style={{marginTop:'30px',marginLeft:'auto',marginRight:'auto'}}>
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
        </>
        
      ) : (
        <>
          <>
            <>
              <div className="lord">
                <div className="landlord">
                  <div className="header">
                    <div className="logo_box">
                      <a href="/">
                        <img src={pic}></img>
                      </a>
                    </div>
                    <div className="appbar">
                      <div className="menu">
                        <div className="menu_box"><a href = '/'>About us</a></div>
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
                  </div>{" "}
                </div>
              </div>
              <div
                style={{
                  color: "#000",
                  fontFamily: '"LINE Seed Sans TH"',
                  fontSize: "40px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "110px",
                  marginLeft: "53px",
                }}
              >
                Contact us{" "}
              </div>
              <div className="contact_group">
                <div className="contact_head">
                  <div className="contact_head_t">
                    <p>หัวข้อ:</p>
                  </div>
                  <textarea className="contact_head_b"></textarea>
                </div>
                <div className="contact_body">
                  <div className="contact_body_t">
                    <p>เนื้อหา:</p>
                  </div>
                  <textarea className="contact_body_b"></textarea>
                </div>
                <div className="contact_line">
                  <div className="contact_line_t">
                    <p>ช่องทางติดต่อ:</p>
                  </div>
                  <textarea className="contact_line_b"></textarea>
                  <svg
                    style={{ alignSelf: "flex-end", marginLeft: "34px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="28"
                    viewBox="0 0 44 28"
                    fill="none"
                  >
                    <path
                      d="M6.48499e-05 -1.89019e-06L43.2427 12.9231L9.77521 12.9231L6.48499e-05 -1.89019e-06Z"
                      fill="#3E3E3E"
                    />
                    <path
                      d="M6.48499e-05 28L43.2427 15.0769L9.77522 15.0769L6.48499e-05 28Z"
                      fill="#3E3E3E"
                    />
                  </svg>
                  <div></div>
                </div>
              </div>

              <div className="footer_black" style={{ marginTop: "150px" }}>
                <img
                  src={pic2}
                  style={{
                    width: "230.493px",
                    height: "59px",
                    marginLeft: "110px",
                    marginRight: "387px",
                  }}
                ></img>
                <div className="footer_log">
                  <img src={line} style={{ marginRight: "17px" }}></img>
                  <img src={face} style={{ marginRight: "17px" }}></img>

                  <img src={ig} style={{ marginRight: "17px" }}></img>

                  <img src={link} style={{ marginRight: "17px" }}></img>

                  <img src={x} style={{ marginRight: "17px" }}></img>

                  <img src={email} style={{ marginRight: "17px" }}></img>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "90px",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    marginLeft: "96px",
                    lineHeight: "30px",
                  }}
                >
                  <div>
                    <div>About us</div>
                    <div>
                      <a href="Consulting_article">Academy</a>
                    </div>

                    <div>
                      <a href="Contact">Contact us</a>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div>
                      <a href="Consulting_service">Consulting</a>
                    </div>
                    <div>
                      <a href="Innovation">Innovation</a>
                    </div>
                    <div>Sign in</div>
                  </div>
                </div>
              </div>
            </>
          </>
        </>
      )}
    </>
  );
}

export default Contact;
