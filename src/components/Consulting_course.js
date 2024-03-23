import "./Consulting_course.css";
import pic from "../assets/Imvest_logo.png";
import Card from "./Card";
import Grid from '@mui/material/Grid';
import ig from "../assets/ig_logo.png";
import face from "../assets/facebook_logo.png";
import link from "../assets/linkedin_logo.png";
import x from "../assets/X_logo.png";
import email from "../assets/email_logo.png";
import line from "../assets/Line_logo.png";
import pic2 from "../assets/pic2.png";
function Consulting_course() {
  return (
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
      <div className="appbar_selector_course">
        <div className="appbar_article_course"><a href="Consulting_article">บทความน่าสนใจ</a></div>
        <div className="appbar_course_group_course">
          <div className="appbar_course_course"><a href="Consulting_course">คอร์สเรียน</a></div>
          <div className="searchbar_course">
            <form action="/search" method="GET">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search..."
                className="search"
              ></input>
            </form>
          </div>
        </div>
      </div>
      <div className="fader_course">
      COMING SOON
      </div>
      <div className="footer_black" style={{marginTop:'400px'}}>
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
  );
}

export default Consulting_course;
