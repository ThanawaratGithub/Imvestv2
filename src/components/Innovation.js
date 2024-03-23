import './Innovation.css'
import pic from '../assets/Imvest_logo.png'
import phonepic from '../assets/phonepic.png'
import apppic from '../assets/apppic.png'
import ig from "../assets/ig_logo.png";
import face from "../assets/facebook_logo.png";
import link from "../assets/linkedin_logo.png";
import x from "../assets/X_logo.png";
import email from "../assets/email_logo.png";
import line from "../assets/Line_logo.png";
import pic2 from "../assets/pic2.png";
import AnchorTemporaryDrawer from './Drawer';

function Innovation(){

  var isMobile = window.innerWidth <= 500;

    return (<>
    

    {isMobile?(<>
    
      <div className="molbar">
            <img src={pic}></img>

            <AnchorTemporaryDrawer />
          </div>
          <div style={{width:'100%',height:'624px',display:'flex',justifyContent:'center',flexDirection:'column'}}>

      <div className='foo1'>

      </div>
      <div className='foo2'>(Coming Soon)</div>
      <div className='foo3'>JAIBOON</div>
      <div className='foo4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</div>
      <div className='foo5' style={{marginBottom:'30px'}}></div>


    </div>
    
    <div className="momofooter">
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

          </div></>):(<><> <div className="lord">
    <div className="landlord">
  <div className="header">
  <div className="logo_box">
                  <a href='/'><img src={pic}></img></a>
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
  </div></div></div>
  <div className='inv_group' style={{display:'flex'}}>
  <div className='inv_body'><img src={phonepic}></img></div>
  <div className='inv_text'>
  <div style={{ 
    color: "#C8C8C8",
    fontFamily: '"LINE Seed Sans TH"',
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "110px",
    marginTop:'127px',
    height:'80px'

}}>(Coming Soon)</div>
   <div style={{ 
    color: "#000",
    fontFamily: '"LINE Seed Sans TH"',
    fontSize: "64px",
    fontStyle: "normal",
    fontWeight: 700,
    marginBottom:'50px'
}}>JAIBOON</div>
    <div style={{ 
    display: "flex",
    width: "439px",
    height: "153px",
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
    color: "#000",
    fontFamily: '"LINE Seed Sans TH"',
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px"
}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div className='apppic'><img src = {apppic}></img></div>
    </div></div>

    <div className="footer_black" style={{marginTop:'0px'}}>
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
  </></>)}
    </>);



}

export default Innovation;