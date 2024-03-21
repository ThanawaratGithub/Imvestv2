import './Innovation.css'
import pic from '../assets/Imvest_logo.png'
import phonepic from '../assets/phonepic.png'
import apppic from '../assets/apppic.png'
function Innovation(){
    return (<> <div className="lord">
    <div className="landlord">
  <div className="header">
    <div className="logo_box">
      <img src={pic}></img>
    </div>
    <div className="appbar">
      <div className="menu">
        <div className="menu_box">About us</div>
        <div className="menu_box"><a href="Consulting_service">Consulting</a></div>
        <div className="menu_box"><a href="Consulting_article">Academy</a></div>
        <div className="menu_box"><a href="Innovation">Innovation</a></div>
        <div className="menu_box">Contact us</div>
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
  
  </>);



}

export default Innovation;