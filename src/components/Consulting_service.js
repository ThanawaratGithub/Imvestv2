import "./Consulting_service.css";
import pic from "../assets/Imvest_logo.png";
import Servicecard from "./Servicecard";
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
              <div className="menu_box">Consulting</div>
              <div className="menu_box">
                <a href="Consulting_article">Academy</a>
              </div>
              <div className="menu_box">Innovation</div>
              <div className="menu_box">Contact us</div>
              <div className="button_signin">Sign in</div>
            </div>
            <div className="underline"></div>
          </div>
        </div>
        <div className="service_selector">
          <div className="consulting_text">Consulting</div>
          <div className="ourservice">Our service</div>
          <div className="portfolio">Portfolio</div>
        </div>
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
      </>
    </>
  );
}

export default Consulting_service;
