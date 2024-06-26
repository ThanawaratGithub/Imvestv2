import "./Consulting_article.css";
import pic from "../assets/Imvest_logo.png";
import Card from "./Card";
import AnchorTemporaryDrawer from "./Drawer";
import ig from "../assets/ig_logo.png";
import face from "../assets/facebook_logo.png";
import link from "../assets/linkedin_logo.png";
import x from "../assets/X_logo.png";
import email from "../assets/email_logo.png";
import line from "../assets/Line_logo.png";
import pic2 from "../assets/pic2.png";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
function Consulting_article() {
  var isMobile = window.innerWidth <= 500;
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'false';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
    window.location.reload(); // Optional: to refresh the page
  };
  const customerPersona = {
    title: "Customer Persona",
    author: "Author Name",
    date: "dd/mm/yy",
    views: 1600,
    sections: [
      {
        title: "Demographic",
        text: "การใช้ข้อมูลประชากรศาสตร์เช่น เพศ อายุ สัญชาติ สถานะ และรายได้ เช่น กลุ่มลูกค้าชาวไทย และ กลุ่มลูกค้าที่เป็นนักท่องเที่ยวชาวต่างชาติ เป็นต้น"
      },
      // Add more sections as needed
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
  return (
    <>
      {isMobile ? (
        <>
          <div className="molbar">
            <img src={pic}></img>

            <AnchorTemporaryDrawer />
          </div>
          <div className="molsearch">
            <form>
              <input placeholder="ค้นหาสิ่งที่น่าสนใจ..."></input>
            </form>
          </div>

          <div className="molar_select">
            <div style={{ width: "350px", display: "flex" }}>
              <div
                className="molar_ar"
                style={{
                  width: "186px",
                  height: "74px",
                  borderRadius: "10px 10px 0px 0px",
                  background: "#C8F0C0",
                  color: "#000",
                  fontFamily: '"LINE Seed Sans TH"',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "80px",
                  textAlign: "center",
                }}
              >
                บทความน่าสนใจ
              </div>
              <div
                className="molar_course"
                style={{
                  width: "164px",
                  height: "74px",
                  borderRadius: "10px 10px 25px 10px",
                  background: "white",
                  color: "#000",
                  fontFamily: '"LINE Seed Sans TH"',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "80px",
                  textAlign: "center",
                }}
              >
                <a href="Consulting_course">คอร์สเรียน</a>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "350px",
              height: "163px",
              background:
                "linear-gradient(180deg, #C8F0C0 0%, rgba(217, 217, 217, 0.00) 100%)",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
              
            }}
          >
            
            <div
              style={{
                width: "350px",
                height: "263px",
                display:'flex',
                justifyContent:'space-between',
                marginBottom:'16px',
                paddingTop:'36px'
              }}
            >
              <div
                style={{
                  width: "167px",
                  height: "263px",
                  background: "white",
                  borderRadius: "10px 10px 25px 10px",
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px',
                  background: "white",
                }}
              >
                <div
                  style={{
                    width: "167px",
                    height: "143px",
                    background: "#D9D9D9",
                    borderRadius: "10px 10px 25px 10px",

                  }}
                >
                  <div
                    style={{
                      width: "167px",
                      color: "#000",
                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "22px",
                      paddingTop:'155px',
                      paddingLeft:'8px'
                    }}
                  >
                    Impvest จับมือ สสส. อบรมผู้ประกอบการไทยประจำปี 2567

                  </div>
                  <div style={{width:'151px',height:'30px',display:'flex',justifyContent:'space-between'}}>
                    <div style={{     color: "#B2B2B2",
                                          paddingLeft:'8px',

                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px"}}>20 ม.ค. 67</div>
                        <div style={{     color: "#B2B2B2",
                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px",}}>อ่านต่อ</div>

                  </div>
                  
                </div>
              </div>
              <div
                style={{
                  width: "167px",
                  height: "263px",
                  background: "white",
                  borderRadius: "10px 10px 25px 10px",
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px',
                  background: "white",
                }}
              >
                <div
                  style={{
                    width: "167px",
                    height: "143px",
                    background: "#D9D9D9",
                    borderRadius: "10px 10px 25px 10px",

                  }}
                >
                  <div
                    style={{
                      width: "167px",
                      color: "#000",
                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "22px",
                      paddingTop:'155px',
                      paddingLeft:'8px'
                    }}
                  >
                    Impvest จับมือ สสส. อบรมผู้ประกอบการไทยประจำปี 2567

                  </div>
                  <div style={{width:'151px',height:'30px',display:'flex',justifyContent:'space-between'}}>
                    <div style={{     color: "#B2B2B2",
                                          paddingLeft:'8px',

                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px"}}>20 ม.ค. 67</div>
                        <div style={{     color: "#B2B2B2",
                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px",}}>อ่านต่อ</div>

                  </div>
                  
                </div>
              </div>
             
            </div>
              <div
              style={{
                width: "350px",
                height: "263px",
                display:'flex',
                justifyContent:'space-between',
                marginBottom:'16px',
              }}
            >
              <div
                style={{
                  width: "167px",
                  height: "263px",
                  background: "white",
                  borderRadius: "10px 10px 25px 10px",
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px',
                  background: "white",
                }}
              >
                <div
                  style={{
                    width: "167px",
                    height: "143px",
                    background: "#D9D9D9",
                    borderRadius: "10px 10px 25px 10px",

                  }}
                >
                  <div
                    style={{
                      width: "167px",
                      color: "#000",
                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "22px",
                      paddingTop:'155px',
                      paddingLeft:'8px'
                    }}
                  >
                    Impvest จับมือ สสส. อบรมผู้ประกอบการไทยประจำปี 2567

                  </div>
                  <div style={{width:'151px',height:'30px',display:'flex',justifyContent:'space-between'}}>
                    <div style={{     color: "#B2B2B2",
                                          paddingLeft:'8px',

                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px"}}>20 ม.ค. 67</div>
                        <div style={{     color: "#B2B2B2",
                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px",}}>อ่านต่อ</div>

                  </div>
                  
                </div>
              </div>
              <div
                style={{
                  width: "167px",
                  height: "263px",
                  background: "white",
                  borderRadius: "10px 10px 25px 10px",
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px',
                  background: "white",
                }}
              >
                <div
                  style={{
                    width: "167px",
                    height: "143px",
                    background: "#D9D9D9",
                    borderRadius: "10px 10px 25px 10px",

                  }}
                >
                  <div
                    style={{
                      width: "167px",
                      color: "#000",
                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "22px",
                      paddingTop:'155px',
                      paddingLeft:'8px'
                    }}
                  >
                    Impvest จับมือ สสส. อบรมผู้ประกอบการไทยประจำปี 2567

                  </div>
                  <div style={{width:'151px',height:'30px',display:'flex',justifyContent:'space-between'}}>
                    <div style={{     color: "#B2B2B2",
                                          paddingLeft:'8px',

                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px"}}>20 ม.ค. 67</div>
                        <div style={{     color: "#B2B2B2",
                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px",}}>อ่านต่อ</div>

                  </div>
                  
                </div>
              </div>
             
            </div>
            <div
              style={{
                width: "350px",
                height: "263px",
                display:'flex',
                justifyContent:'space-between',
                marginBottom:'16px',
              }}
            >
              <div
                style={{
                  width: "167px",
                  height: "263px",
                  background: "white",
                  borderRadius: "10px 10px 25px 10px",
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px',
                  background: "white",
                }}
              >
                <div
                  style={{
                    width: "167px",
                    height: "143px",
                    background: "#D9D9D9",
                    borderRadius: "10px 10px 25px 10px",

                  }}
                >
                  <div
                    style={{
                      width: "167px",
                      color: "#000",
                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "22px",
                      paddingTop:'155px',
                      paddingLeft:'8px'
                    }}
                  >
                    Impvest จับมือ สสส. อบรมผู้ประกอบการไทยประจำปี 2567

                  </div>
                  <div style={{width:'151px',height:'30px',display:'flex',justifyContent:'space-between'}}>
                    <div style={{     color: "#B2B2B2",
                                          paddingLeft:'8px',

                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px"}}>20 ม.ค. 67</div>
                        <div style={{     color: "#B2B2B2",
                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px",}}>อ่านต่อ</div>

                  </div>
                  
                </div>
              </div>
              <div
                style={{
                  width: "167px",
                  height: "263px",
                  background: "white",
                  borderRadius: "10px 10px 25px 10px",
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 5px, rgba(0, 0, 0, 0.22) 0px 5px 10px',
                  background: "white",
                }}
              >
                <div
                  style={{
                    width: "167px",
                    height: "143px",
                    background: "#D9D9D9",
                    borderRadius: "10px 10px 25px 10px",

                  }}
                >
                  <div
                    style={{
                      width: "167px",
                      color: "#000",
                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "22px",
                      paddingTop:'155px',
                      paddingLeft:'8px'
                    }}
                  >
                    Impvest จับมือ สสส. อบรมผู้ประกอบการไทยประจำปี 2567

                  </div>
                  <div style={{width:'151px',height:'30px',display:'flex',justifyContent:'space-between'}}>
                    <div style={{     color: "#B2B2B2",
                                          paddingLeft:'8px',

                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px"}}>20 ม.ค. 67</div>
                        <div style={{     color: "#B2B2B2",
                      fontFamily: '"LINE Seed Sans TH"',
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "30px",}}>อ่านต่อ</div>

                  </div>
                  
                </div>
              </div>
             
            </div>
           
          </div>
          <div className="momofooter" style={{marginTop:'750px',marginLeft:'auto',marginRight:'auto'}}>
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
          {" "}
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
          <div className="appbar_selector">
            <div className="appbar_article">
              <a href="Consulting_article">บทความน่าสนใจ</a>
            </div>
            <div className="appbar_course_group">
              <div className="appbar_course">
                <a href="Consulting_course">คอร์สเรียน</a>
              </div>
              <div className="searchbar">
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
          <div className="fader">
            <table
              className="table"
              style={{ width: "100%", paddingLeft: "60px" }}
            >
              <tr>
                <th>

                <Card title="Customer Persona" subtitle="Understanding yours" link="/customer-persona" />
                </th>
                <th>
                <Card title="Marketing Campaign" subtitle="Framework for Marketing" link="/marketing-campaign" />
                </th>
                <th>
                <Card title="Purchase Funnel" subtitle="Customer Purchase" link="/customer-purchase-funnel" />
                </th>
              </tr>
             
            </table>
          </div>
          <div className="footer_black" style={{ marginTop: "1400px" }}>
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
      )}
    </>
  );
}

export default Consulting_article;
