import './Contact.css'
import pic from "../assets/Imvest_logo.png";
function Contact(){
return (<>
 <div className="lord">
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
            <div className="menu_box"><a href="Contact">Contact us</a></div>
            <div className="button_signin">Sign in</div>
          </div>
          <div className="underline"></div>
        </div>
      </div>      </div></div>
      <div style={{ 
    color: "#000",
    fontFamily: '"LINE Seed Sans TH"',
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "110px",
    marginLeft:'53px'
}}>Contact us </div>
      <div className='contact_group'>
      <div className='contact_head'><div className='contact_head_t'><p>หัวข้อ:</p></div><textarea className='contact_head_b'></textarea></div>
      <div className='contact_body'><div className='contact_body_t'><p>เนื้อหา:</p></div><textarea className='contact_body_b'></textarea></div>
      <div className='contact_line'><div className='contact_line_t'><p>ช่องทางติดต่อ:</p></div><textarea className='contact_line_b'></textarea><svg style = {{alignSelf:'flex-end',marginLeft:'34px'}} xmlns="http://www.w3.org/2000/svg" width="44" height="28" viewBox="0 0 44 28" fill="none">
<path d="M6.48499e-05 -1.89019e-06L43.2427 12.9231L9.77521 12.9231L6.48499e-05 -1.89019e-06Z" fill="#3E3E3E"/>
<path d="M6.48499e-05 28L43.2427 15.0769L9.77522 15.0769L6.48499e-05 28Z" fill="#3E3E3E"/>
</svg><div></div></div>
      </div>


</>)
}

export default Contact;