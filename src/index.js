import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/Mainpage";
import Consulting_article from "./components/Consulting_article";
import Consulting_course from "./components/Consulting_course";
import Consulting_service from "./components/Consulting_service";
import Innovation from "./components/Innovation";
import Contact from "./components/Contact";
import { register } from 'swiper/element/bundle';
import Consulting_portfolio from "./components/Consulting_portfolio";
import SignInComponent from "./components/Signin";
import ProfileSetupComponent from "./components/Sign_up";
import PrivateRoute from "./components/PrivateRoute";

import ArticlePage from "./components/Article";
// register Swiper custom elements
register();
const root = ReactDOM.createRoot(document.getElementById("root"));
const customerPersona = {
  title: "Customer Persona",
  author: "Author Name",
  date: "dd/mm/yy",
  views: 1600,
  sections: [
    {
      title: "Introduction",
      text: "ทำความรู้จักและเข้าใจลูกค้าอย่างแท้จริง พื้นฐานสู่ความสำเร็จที่มักถูกมองข้าม สาเหตุที่ผู้ประกอบการบางท่านยังไม่สามารถบรรลุเป้าหมายทางธุรกิจที่ตั้งเอาไว้ได้อาจมาจากการขาดสิ่งสำคัญซึ่งเป็นพื้นฐานของกลยุทธ์ทางการตลาดอย่างการเข้าใจกลุ่มลูกค้า (Target Customer) ทำให้ไม่สามารถทำการตลาดได้เหมาะสมและน่าดึงดูดสำหรับกลุ่มลูกค้าเป้าหมายของตนเอง โดยบทความนี้จะนำเสนอแนวทางการวิเคราะห์กลุ่มลูกค้าในแง่มุมต่าง ๆ ผ่านหลักการ Customer Persona ซึ่งจะสามารถช่วยให้ผู้ประกอบการเข้าใจลักษณะ พฤติกรรม และความต้องการของลูกค้าแต่ละกลุ่มมากยิ่งขึ้น ข้อมูลต่อไปนี้จะเป็นการยกตัวอย่างองค์ประกอบต่าง ๆ ใน Customer Persona โดยผู้ประกอบการสามารถนำไปปรับเปลี่ยนต่างๆให้เข้ากับธุรกิจของตนเองมากขึ้นได้ตามความเหมาะสม ในกรณีตัวอย่างนี้จะเป็นการทำ Customer Persona สำหรับร้านอาหาร ซึ่งจะมีองค์ประกอบทั้งหมด 7 อย่างในการจำแนกลักษณะ พฤติกรรม และความต้องการของลูกค้า คือ"
    },
    {
      title: "Demographic",
      text: "การใช้ข้อมูลประชากรศาสตร์เช่น เพศ อายุ สัญชาติ สถานะ และรายได้ เช่น กลุ่มลูกค้าชาวไทย และ กลุ่มลูกค้าที่เป็นนักท่องเที่ยวชาวต่างชาติ เป็นต้น"
    },
    {
      title: "Personality and Value",
      text: "ลักษณะนิสัยและสิ่งที่ลูกค้าให้คุณค่า เช่น กลุ่มนักท่องเที่ยวที่แสวงหาประสบการณ์ที่แปลกใหม่ เป็นต้น"
    },
    {
      title: "Average spending",
      text: "ราคาที่ลูกค้าจ่ายให้กับสินค้าหรือบริการใดๆโดยเฉลี่ย หรือเรียกอีกอย่างหนึ่งก็คือ แบ่งลูกค้าออกตาม Willingness to pay หรือ ราคาสูงสุดที่ผู้บริโภคเต็มใจที่จะจ่ายให้กับสินค้าหรือบริการ เช่น กลุ่มลูกค้าที่จ่ายเงินหนึ่งพันถึงสองพันบาทเมื่อไปรับประทานอาหารที่ร้านอาหาร เป็นต้น"
    },
    {
      title: "Preferred channel of communication",
      text: "ช่องทางที่ลูกค้าใช้ในการติดตามข้อมูลที่สนใจและข่าวสารต่างๆในชีวิตประจำวันเป็นหลัก เช่น กลุ่มลูกค้าที่ใช้ Facebook เป็นหลัก หรือ กลุ่มลูกค้าที่ใช้ Google Maps ในการค้นหาข้อมูลเพิ่มเติมเกี่ยวกับร้านอาหาร เป็นต้น"
    },
    {
      title: "Motivation",
      text: "สิ่งที่ลูกค้าให้คุณค่ามากที่สุด หรือสิ่งที่เป็นแรงจูงใจในการตัดสินใจเรื่องต่างๆในชีวิตประจำวันของลูกค้า เช่น กลุ่มลูกค้าที่ให้คุณค่ากับเงิน โดยกลุ่มลูกค้าประเภทนี้มีแนวโน้มที่จะชื่นชอบการตลาดที่เกี่ยวกับโปรโมชั่นลดราคา"
    },
    {
      title: "Wants that needs to be addressed",
      text: "องค์ประกอบใดๆที่ลูกค้าต้องการ เช่น กลุ่มลูกค้าที่เป็นนักท่องเที่ยวชาวต่างชาติต้องการไปทานอาหารที่ร้านอาหารที่มีพนักงานที่สื่อสารภาษาอังกฤษได้ดี เป็นต้น"
    },
    {
      title: "Preferred time",
      text: "ช่วงเวลาที่ลูกค้าสะดวกหรือต้องการเข้ามาใช้บริการ เช่น กลุ่มลูกค้าที่ต้องการมาทานอาหารช่วงเย็นถึงค่ำ เป็นต้น"
    },
    {
      title: "Conclusion",
      text: "เมื่อทำความรู้จักและเข้าใจลูกค้ามากขึ้นแล้ว เพียงเท่านี้การทำการตลาดให้โดนใจกลุ่มลูกค้าเป้าหมายและบรรลุเป้าหมายทางธุรกิจก็ไม่ใช่เรื่องยากอีกต่อไป"
    }
  ]
};

const marketingCampaign = {
  title: "Marketing Campaign",
  author: "Author Name",
  date: "dd/mm/yy",
  views: 1200,
  sections: [
    {
      title: "Overview",
      text: "ในการคิด campaign การวิเคราะห์ธุรกิจให้รอบด้านเป็นสิ่งสำคัญ ผ่านการวิเคราะห์โครงสร้าง 3 กลุ่ม..."
    },
    // Add more sections as needed
  ]
};

const purchaseFunnel = {
  title: "Purchase Funnel",
  author: "Author Name",
  date: "dd/mm/yy",
  views: 1800,
  sections: [
    {
      title: "Awareness",
      text: "ในขั้นตอนนี้ลูกค้าจะเริ่มรู้จักแบรนด์ สินค้าหรือบริการผ่านช่องทางต่างๆ เช่น โซเชียลมีเดีย โฆษณาทั้งออนไลน์และออฟไลน์..."
    },
    // Add more sections as needed
  ]
};
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <MainPage />
            </div>
          }
        ></Route>

        <Route
          path="/Consulting_article"
          element={
            <>
             <Consulting_article />
       
            </>
          }
        ></Route>

        <Route
          path="/customer-purchase-funnel"
          element={<ArticlePage {...purchaseFunnel} />}
        ></Route>
  <Route
          path="/marketing-campaign"
          element={<ArticlePage {...marketingCampaign} />}
        ></Route>
  <Route
          path="/customer-persona"
          element={<ArticlePage {...customerPersona} />}
        ></Route>
  <Route
          path="/Consulting_course"
          element={
            <>
             <Consulting_course />
            </>
          }
        ></Route>
        <Route
          path="/Consulting_service"
          element={
            <>
              <Consulting_service />
            </>
          }
        ></Route>

        
<Route
          path="/Innovation"
          element={
            <>
              <Innovation />
            </>
          }
        ></Route>
        <Route
          path="/Contact"
          element={
            <>
              <Contact />
            </>
          }
        ></Route>

<Route
          path="/Consulting_portfolio"
          element={
            <>
              <Consulting_portfolio />
            </>
          }
        ></Route>
<Route
          path="/Sign_in"
          element={
            <>
              <SignInComponent />
            </>
          }
        ></Route>

<Route
          path="/Sign_up"
          element={
            <>
              <ProfileSetupComponent />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
