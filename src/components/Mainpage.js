import "./MainPage.css";
import { useRef, useState } from "react";
import pic from "../assets/Imvest_logo.png";
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
import hi3 from "../assets/hi3.png";
import hi4 from "../assets/hi4.png";
import tryer from "../assets/try.png";
import pic2 from "../assets/pic2.png";
import talk from "../assets/talk 1.png";
import book from "../assets/book.png";
import innovation from "../assets/innovation.png";
import collab from "../assets/Group 134.png"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import collab_mol from "../assets/Group 5773.png"
/* git rm -r --cached .
git add --all .
git commit -a -m "final draft v2"
git push  */
function MainPage() {
  var isMobile = window.innerWidth <= 500;

  // ScrollableItem component definition
  function ScrollableItem({ hi1, underpic_head, underpic_desc }) {
    return (
      <div>
        <div
          style={{
            width: "600px",
            height: "495px",
            marginLeft: "72px",
            marginTop: "55px",
          }}
        >
          <div style={{ height: "494px", width: "100%" }}>
            <div
              style={{
                width: "580px",
                height: "494px",
                background: "white",
                borderRadius: "0px 0px 100px 0px",
              }}
            >
              <img
                src={hi1}
                style={{
                  width: "580px",
                  height: "332px",
                  borderRadius: "0px 0px 100px 0px",
                }}
                alt="Item Visual"
              />
              <div
                className="underpic_head"
                style={{
                  color: "#3A3A3A",
                  fontFamily: '"LINE Seed Sans TH"',
                  fontSize: "32px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "24px",
                  marginLeft: "40px",
                  marginTop: "25px",
                }}
              >
                {underpic_head}
              </div>
              <div
                className="underpic_desc"
                style={{
                  color: "#3A3A3A",
                  width: "479px",
                  height: "63px",
                  fontFamily: '"LINE Seed Sans TH"',
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                  marginLeft: "40px",
                  marginTop: "15px",
                  whiteSpace: "initial",
                }}
              >
                {underpic_desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ScrollableList component maps over items and passes new props to ScrollableItem
  function ScrollableList({ items }) {
    const listRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const startDragging = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - listRef.current.offsetLeft);
      setScrollLeft(listRef.current.scrollLeft);
    };

    const stopDragging = () => {
      setIsDragging(false);
    };

    const onDrag = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - listRef.current.offsetLeft;
      const walk = (x - startX) * 2; // The * 2 is the speed of the scrolling
      listRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
      <div
        ref={listRef}
        className="scrollable-container"
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={onDrag}
      >
        {items.map((item, index) => (
          <ScrollableItem
            key={index}
            hi1={item.hi1}
            underpic_head={item.underpic_head}
            underpic_desc={item.underpic_desc}
          />
        ))}
      </div>
    );
  }

  const items = [
    {
      hi1: hi1,
      underpic_head: "Amazon SME Workshop",
      underpic_desc:
        "พาร์ทเนอร์กับ Amazon ร่วมจัดงานเวิร์คชอปภายใต้หัวข้อ Product Selection Workshop สำหรับผู้ประกอบการกว่า 70 ท่าน",
    },
    {
      hi1: hi2,
      underpic_head: "BMA Partnership",
      underpic_desc:
        "พาร์ทเนอรกับกรุงเทพมหานคร (กทม.) ในการให้บริการที่ปรึกษาสำหรับธุรกิจ SMEs ไทยในชุมชนตลาดน้อย",
    },
    {
      hi1: hi3,
      underpic_head: "KBANK SME Bootcamp",
      underpic_desc:
        "หารือร่วมกับคุณธเนศ นวะบุศย์ รองผู้อำนวยการฝ่ายพัฒนาและส่งเสริมเครือข่ายธุรกิจธนาคารกสิกรไทย ในการสร้างความรู้ทางการเงินให้ SME",
    },
    {
      hi1: hi4,
      underpic_head: "Consulting Training",
      underpic_desc:
        "จัดการอบรมเสริมสร้างทักษะการให้คำปรึกษาเชิงธุรกิจเพื่อพัฒนาศักยภาพสำหรับผู้ประกอบการธุรกิจและที่ปรึกษาทางด้านกลยุทธ์ธุรกิจ",
    },
    // Add more items as needed
  ];
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
    window.location.reload(); // Optional: to refresh the page
  };
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>

      {isMobile ? (
        <>
          <div className="molbar">
            <img src={pic}></img>

            <AnchorTemporaryDrawer />
          </div>
          <div className="molmain">
            <div className="molmain_textb">
              Impvest พร้อมที่จะอยู่เคียงข้างคุณ ผลักดันธุรกิจ SMEs
              ไทยเติบโตอย่างยั่งยืน
            </div>
            <div className="molmain_textp">
              เรามุ่งมั่นสนับสนุนให้ธุรกิจ SMEs ไทยประสบ ความสำเร็จอย่างยั่งยืน
              ผ่านการให้คำปรึกษา ให้ความรู้ และ สร้างนวัตกรรมต่าง ๆ เพื่อ
              เสริมสร้างศักยภาพให้กับผู้ประกอบการไทย
            </div>
         
            <img
              onClick={()=>{    window.location.href = 'https://www.instagram.com/impvest_official/';
              }}
              className="tryer"
              src={tryer}
              style={{ marginLeft: "26px", marginTop: "40px" }}
            ></img>
      
          </div>
          <div className="mol_impact-section">

      <div className="mol_impact-stats">
        <div className="mol_impact-stat">
        <h1 className="mol_impact-title" style = {{marginTop:'20px'}}>OUR IMPACT</h1>
          <h3>12,000+</h3>
          <p>Individuals Impacted</p>
          <p>สร้างผลกระทบให้คนไทยมากกว่า 12,000 ราย</p>
        </div>
        <div className="mol_impact-stat">
          <h3>300+</h3>
          <p>Community Members</p>
          <p>สร้างเครือข่ายเยาวชนไทย มากกว่า 300 ราย</p>
        </div>
        <div className="mol_impact-stat">
          <h3>20+</h3>
          <p>Collaborations</p>
          <p>ร่วมมือผลักดัน SME ไทย กับมากกว่า 20 องค์กร</p>
        </div>
      </div>
    </div>
          <div className="mol_service">
            {" "}
            <div
              style={{
                color: "#3A3A3A",
                fontFamily: '"LINE Seed Sans TH"',
                fontSize: "35px",
                fontStyle: "normal",
                fontWeight: 700,
                marginLeft: "20px",
                paddingTop: "48px",
              }}
            >
              บริการของเรา
            </div>
            <div
              style={{
                width: "329px",
                height: "2px",
                background: "#6D6D6D",
                marginLeft: "20px",
              }}
            ></div>
            <div
              style={{
                marginTop: "28px",
                width: "325px",
                height: "325px",
                borderRadius: "0px 0px 70px 0px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <swiper-container
                pagination="true"
                navigation="true"
                className="mySwiper"
                style={{
                  height: "550px",
                  borderRadius: "0px 0px 70px 0px",
                  position: "relative",
                }}
              >
                <swiper-slide
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    src={talk}
                    style={{
                      left:'80px',
                      top:'120px',
                      position: "absolute",
                      width: "160px",
                      height: "160px",
                    }}
                  ></img>
                  <div
                    style={{
                      marginTop: "349px",
                      position: "absolute",
                      width: "329px",
                      height: "114px",
                    }}
                  >
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "23px",
                        fontStyle: "normal",
                        fontWeight: 700,
                      }}
                    >
                      Consulting
                    </div>
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "23px",
                        fontStyle: "normal",
                        fontWeight: 400,
                      }}
                    >
                      ให้คำปรึกษาและบริการทางธุรกิจ สำหรับ SME และบุคคลทั่วไป
                      ตั้งแต่ เริ่มก่อตั้งไปจนถึงการดำเนินธุรกิจ
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    src={book}
                    style={{
                      left:'85px',
                      top:'100px',
                      position: "absolute",
                      width: "160px",
                      height: "160px",
                    }}
                  ></img>
                  <div
                    style={{
                      marginTop: "349px",
                      position: "absolute",
                      width: "329px",
                      height: "114px",
                    }}
                  >
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "23px",
                        fontStyle: "normal",
                        fontWeight: 700,
                      }}
                    >
                      Academy
                    </div>
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "23px",
                        fontStyle: "normal",
                        fontWeight: 400,
                      }}
                    >
                      ให้ความรู้และเสริมสร้างทักษะทางธุรกิจ
                      ผ่านบทความ คอร์สเรียน และงานสัมมนา
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    src={innovation}
                    style={{
                      left:'85px',
                      top:'100px',
                      position: "absolute",
                      width: "160px",
                      height: "160px",
                    }}
                  ></img>
                  <div
                    style={{
                      marginTop: "349px",
                      position: "absolute",
                      width: "329px",
                      height: "114px",
                    }}
                  >
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "23px",
                        fontStyle: "normal",
                        fontWeight: 700,
                      }}
                    >
                      Innovation
                    </div>
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "23px",
                        fontStyle: "normal",
                        fontWeight: 400,
                      }}
                    >
                      สร้างนวัตกรรมดิจิทัลและปัญญาประดิษฐ์
                      เพื่อสนับสนุนการดำเนินการธุรกิจ
                    </div>
                  </div>
                </swiper-slide>
              </swiper-container>
              <div
                style={{
                  width: "323px",
                  height: "67px",
                  background: "#12574C",
                  color: "white",
                  borderRadius: "15px",
                  fontFamily: '"LINE Seed Sans TH"',
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "65px",
                  textAlign: "center",
                }}
              >
                เรียนรู้เพิ่มเติมเลย!
              </div>
            </div>
          </div>

          <div
            className="mol_service"
            style={{
              height: "730px",
              background: "#E2F9CC",
              marginTop: "38px",
            }}
          >
            {" "}
            <div
              style={{
                color: "#3A3A3A",
                fontFamily: '"LINE Seed Sans TH"',
                fontSize: "35px",
                fontStyle: "normal",
                fontWeight: 700,
                marginLeft: "20px",
                paddingTop: "48px",
              }}
            >
              Highlights
            </div>
            <div
              style={{
                width: "329px",
                height: "2px",
                background: "#6D6D6D",
                marginLeft: "20px",
              }}
            ></div>
            <div
              style={{
                marginTop: "28px",
                width: "325px",
                height: "325px",
                borderRadius: "0px 0px 70px 0px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <swiper-container
                pagination="true"
                navigation="true"
                className="mySwiper"
                style={{
                  height: "550px",
                  borderRadius: "0px 0px 70px 0px",
                  position: "relative",
                }}
              >
                <swiper-slide
                  style={{
                    borderRadius: "30px 0px 70px 0px",
                    position: "relative",
                    background: "white",
                  }}
                >
                  <div
                    className="hi1"
                    style={{
                      position: "absolute",
                      width: "325px",
                      height: "325px",
                    }}
                  ></div>
                  <div
                    style={{
                      marginTop: "349px",
                      position: "absolute",
                      width: "329px",
                      height: "114px",
                    }}
                  >
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "23px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        marginLeft: "20px",
                      }}
                    >
                      Amazon SME Workshop
                    </div>
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                        width: "283px",
                        height: "96px",
                        marginLeft: "20px",
                      }}
                    >
                      พาร์ทเนอร์กับ Amazon ร่วมจัดงานเวิร์คชอป ภายใต้หัวข้อ
                      Product Selection
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  style={{
                    borderRadius: "30px 0px 70px 0px",
                    position: "relative",
                    background: "white",
                  }}
                >
                  <div
                    className="hi2"
                    style={{
                      position: "absolute",
                      borderRadius: "30px 0px 70px 0px",

                      width: "325px",
                      height: "325px",
                    }}
                  ></div>
                  <div
                    style={{
                      marginTop: "349px",
                      position: "absolute",
                      width: "329px",
                      height: "114px",
                    }}
                  >
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "23px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        marginLeft: "20px",
                      }}
                    >
                      BMA Partnership{" "}
                    </div>
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                        width: "283px",
                        height: "96px",
                        marginLeft: "20px",
                      }}
                    >
                      พาร์ทเนอรกับกรุงเทพมหานคร (กทม.)
                      ในการให้บริการที่ปรึกษาสำหรับธุรกิจ SMEs
                      ไทยในชุมชนตลาดน้อย
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  style={{
                    borderRadius: "30px 0px 70px 0px",
                    position: "relative",
                    background: "white",
                  }}
                >
                  <div
                    className="hi3"
                    style={{
                      position: "absolute",
                      width: "325px",
                      height: "325px",
                    }}
                  ></div>
                  <div
                    style={{
                      marginTop: "349px",
                      position: "absolute",
                      width: "329px",
                      height: "114px",
                    }}
                  >
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "23px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        marginLeft: "20px",
                      }}
                    >
                      KBANK SME Bootcamp{" "}
                    </div>
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                        width: "283px",
                        height: "96px",
                        marginLeft: "20px",
                      }}
                    >
                      หารือร่วมกับคุณธเนศ นวะบุศย์ รองผู้อำนวยการ
                      ฝ่ายพัฒนาและส่งเสริมเครือข่ายธุรกิจธนาคาร
                    </div>
                  </div>
                </swiper-slide>

                <swiper-slide
                  style={{
                    borderRadius: "30px 0px 70px 0px",
                    position: "relative",
                    background: "white",
                  }}
                >
                  <div
                    className="hi4"
                    style={{
                      position: "absolute",
                      borderRadius: "30px 0px 70px 0px",

                      width: "325px",
                      height: "325px",
                    }}
                  ></div>
                  <div
                    style={{
                      marginTop: "349px",
                      position: "absolute",
                      width: "329px",
                      height: "114px",
                    }}
                  >
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "23px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        marginLeft: "20px",
                      }}
                    >
                      Consulting Training{" "}
                    </div>
                    <div
                      style={{
                        color: "#3A3A3A",
                        fontFamily: '"LINE Seed Sans TH"',
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                        width: "283px",
                        height: "96px",
                        marginLeft: "20px",
                      }}
                    >
                      จัดการอบรมเสริมสร้างทักษะการให้คำปรึกษา
                      เชิิงธุรกิจเพื่อพัฒนาศักยภาพสำหรับผู้ปร{" "}
                    </div>
                  </div>
                </swiper-slide>
              </swiper-container>
            </div>
          </div>
          <img src={cheatail} style={{ width: "100%" }}></img>
          <img src={collab_mol} style={{ width: "100%" ,marginBottom:'20px'}}></img>

          <div className="momofooter">
            <img src={pic2} className="foot1"></img>
            <div className="foot2">
              <div
                style={{
                  color: "white",
                  display: "flex",
                  gap: "90px",
                  marginBottom: "32px",
                  marginTop: "16px",
                  lineHeight: "30px",
                }}
              >
                <div>
                  <div>
                    <a href="/">About us</a>
                  </div>
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
            <div className="foot3">
              <div className="footer_log" style={{ marginLeft: "16px" }}>
                <img src={line} style={{ marginRight: "17px" }}></img>
                <img src={face} style={{ marginRight: "17px" }}></img>

                <img src={ig} style={{ marginRight: "17px" }}></img>

                <img src={link} style={{ marginRight: "17px" }}></img>

                <img src={x} style={{ marginRight: "17px" }}></img>

                <img src={email} style={{ marginRight: "17px" }}></img>
              </div>
              © 2023 Impvest. All Rights Reserved
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="lord">
            <div className="landlord">
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
              <div className="main_page">
              <div class="main_img">
  <div class="img_content">
    Impvest พร้อมที่จะอยู่เคียงข้างคุณ
  </div>
  <div class="img_subcontent">
    ผลักดัน SME ไทยให้เติบโตอย่างยั่งยืน <br></br>
    เรามีความมุ่งมั่นในการเสริมสร้างศักยภาพให้กับผู้ประกอบการไทยและสนับสนุนให้ประสบความสำเร็จอย่างยั่งยืน ผ่านการให้คำปรึกษา การมอบความรู้ และการสร้างนวัตกรรม
  </div>
</div>

              </div>
              <div class="impact-section">
                <div className="foo_imp">OUR IMPACT</div>
  <div class="impact-content">
    <div class="impact-item">
      
      <div class="impact-number">12,000+</div>
      <div class="impact-title">Individuals Impacted</div>
      <div class="impact-description">สร้างผลกระทบให้คนไทยมากกว่า 12,000 ราย</div>
    </div>
    
    <div class="impact-item">
      
      <div class="impact-number" style={{marginLeft:'20px'}}>300+</div>
      <div class="impact-title">Community Members</div>
      <div class="impact-description">สร้างเครือข่ายเยาวชนไทยมากกว่า 300 ราย</div>
    </div>
    <div class="impact-item">
      <div class="impact-number">20+</div>
      <div class="impact-title">Organizational Collaborations</div>
      <div class="impact-description">ร่วมมือผลักดัน SME ไทยกับมากกว่า 20 องค์กร</div>
    </div>
  </div>
</div>
<div class="services-section">
  <p class="services-title">OUR SERVICES</p>
  <div class="services-content">
    <div class="service-item">
    <h3 class="service-title">Consulting</h3>

      <img src={talk}></img>
      <p class="service-description">ให้คำปรึกษาและบริการทางธุรกิจตั้งแต่เริ่มก่อตั้งไปจนถึงการดำเนินธุรกิจ</p>
      <button class="service-button"><a href="/Consulting_service">ศึกษาเพิ่มเติม</a></button>
    </div>
    <div class="service-item">
    <h3 class="service-title">Academy</h3>

    <img src={book}></img>
      <p class="service-description">ให้ความรู้และเสริมสร้างทักษะทางธุรกิจผ่านบทความ คอร์สเรียน และงานสัมมนา</p>
      <button class="service-button"><a href="/Consulting_article">ศึกษาเพิ่มเติม</a></button>
    </div>
    <div class="service-item">
    <h3 class="service-title">Innovation</h3>

    <img src={innovation}></img>

      <p class="service-description">สร้างนวัตกรรมดิจิทัลและปัญญาประดิษฐ์เพื่อสนับสนุนการดำเนินการธุรกิจ</p>
      <button class="service-button"><a href="/Innovation">ศึกษาเพิ่มเติม</a></button>
    </div>
  </div>
</div>
              <div className="slider_wrapper">
              <div
                className="service_slider"
                style={{
                  width: "99vw",
                  height: "728px",
                  backgroundColor: "#E2F9CC",
                  marginTop: "57px",
                }}
              >
                <div
                  style={{
                    color: "#3A3A3A",
                    fontFamily: '"LINE Seed Sans TH"',
                    fontSize: "40px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "24px",
                    width: "385px",
                    height: "33px",
                    marginLeft: "69px",
                    paddingTop: "63px",
                  }}
                >
                  Highlights
                </div>
                <div
                  style={{
                    width: "494px",
                    height: "2px",
                    background: "#6D6D6D",
                    marginLeft: "69px",
                    marginTop: "20px",
                  }}
                ></div>
                <ScrollableList items={items} />
              </div></div>
              <div style={{width:"100%" ,backgroundColor:'white',display:'flex',justifyContent:'center'}}>
                <img  src = {collab}></img>
              </div>
              <div className="footer">
                <div className="footer_green">
                  <div className="footer_green_content">
                    มาร่วมกันสร้างคอมมูนิตี้ SMEs ไทย<br></br> ที่แข็งแกร่ง
                    ไปกับ Impvest
                  </div>
                  
                  <div className="footer_green_logo">
                    <img src={line}></img>

                    <img src={face}></img>
                    <img src={ig}></img>
                    <img src={link}></img>
                    <img src={x}></img>

                    <img src={email}></img>
                  </div>
                </div>
                <div className="footer_black">
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
              </div>
              <BackToTopButton />
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default MainPage;
