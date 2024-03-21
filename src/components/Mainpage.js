import "./MainPage.css";
import pic from "../assets/Imvest_logo.png";
import ig from "../assets/ig_logo.png";
import face from "../assets/facebook_logo.png";
import link from "../assets/linkedin_logo.png";
import x from "../assets/X_logo.png";
import email from "../assets/email_logo.png";
import line from "../assets/Line_logo.png";
import BackToTopButton from "./Backtotop";
import AnchorTemporaryDrawer from "./Drawer";
import './Mainpage_mol.css'
import SampleComponent from "./Swiper";
import { useEffect } from "react";
function MainPage() {
  var isMobile = window.innerWidth <= 5000;

  return (
    
    <>
    {isMobile?<>
    
    <div className="molbar">
      <img src = {pic}></img>
     
<AnchorTemporaryDrawer/>  


    </div>
    <div className="molmain">
      <div className="molmain_textb">Impvest พร้อมที่จะอยู่เคียงข้างคุณ ผลักดันธุรกิจ SMEs ไทยเติบโตอย่างยั่งยืน</div>
      <div className="molmain_textp">เรามุ่งมั่นสนับสนุนให้ธุรกิจ SMEs ไทยประสบ ความสำเร็จอย่างยั่งยืน ผ่านการให้คำปรึกษา ให้ความรู้ และ สร้างนวัตกรรมต่าง ๆ เพื่อ เสริมสร้างศักยภาพให้กับผู้ประกอบการไทย</div>

    </div>
    
    
    
    
    
    
    
    </>:<> <div className="lord">
        <div className="landlord">
        <SampleComponent/>  

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
      </div>
      <div className="main_page">
        <div className="main_img">
          <div className="img_content">
            Impvest พร้อมที่จะอยู่เคียงข้างคุณ<br></br>ผลักดันธุรกิจ SMEs
            ไทยเติบโตอย่างยั่งยืน
          </div>
          <div className="img_subcontent">
            เรามุ่งมั่นสนับสนุนให้ธุรกิจ SMEs ไทย ประสบความสำเร็จ<br></br>
            อย่างยั่งยืนผ่านการให้คำปรึกษา ให้ความรู้ และสร้างนวัตกรรม<br></br>
            ต่าง ๆ เพื่อเสริมสร้างศักยภาพให้กับผู้ประกอบการไทย
          </div>
        </div>
      </div>
      <div className="service">
        <div className="service_box">
          <div className="service_box_top">
          <div className="service_box_header">Consulting</div>

            <div className="service_box_bottom"></div>
          </div>
          <div className="service_box_top">
          <div className="service_box_header">Academy</div>
            <div className="service_box_bottom"></div>
          </div>
          <div className="service_box_top">
          <div className="service_box_header">Innovation</div>
            <div className="service_box_bottom"></div>
          </div>
        </div>
        <div className="service_content">
          <div className="service_content_head">บริการของเรา</div>
          <div className="service_content_line"></div>
          <div className="service_content_typo">
            <div>
            <div></div> <b>Consulting </b><br></br>
            ให้คำปรึกษาและบริการทางธุรกิจสำหรับ SME
            <br></br>และบุคคลทั่วไปตั้งแต่เริ่มก่อตั้งไปจนถึงการดำเนินธุรกิจ
            </div>
            <br></br>
            <div>
            <b>Academy</b><br></br>
            ให้ความรู้และเสริมสร้างทักษะทางธุรกิจสำหรับ SME <br></br>และบุคคลทั่วไป
            </div>
            <br></br>
            <div>
            <b>Innovation</b> <br></br>
            สร้างนวัตกรรมดิจิทัลต่าง ๆ เพื่อสนับสนุน <br></br>การดำเนินการธุรกิจของ SME
            และบุคคลทั่วไป</div>
          </div>
          <div className="service_button">เรียนรู้เพิ่มเติมเลย!</div>
        </div>

      </div>
      <div className="footer">
        <div className="footer_green">
        <div className="footer_green_content">มาร่วมกันสร้างคอมมูนิตี้ SMEs ไทย<br></br> ที่แข็งแกร่ง ไปกับ Impvest</div>
        <div className="footer_green_logo"><img src={ig}></img>
            <img src={link}></img>

            <img src={line}></img>

            <img src={email}></img>

            <img src={x}></img>
            <img src={face}></img>
</div>
            


        </div>

        <div className="footer_black"></div>


      </div>
      <BackToTopButton/>
      </div>
      </div></>}
     
    </>
    
  );
}
export default MainPage;
