import "./Consulting_course.css";
import pic from "../assets/Imvest_logo.png";
import Card from "./Card";
import Grid from '@mui/material/Grid';
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
              Consulting
            </div>
            <div className="menu_box"><a href="Consulting_article">Academy</a></div>
            <div className="menu_box">Innovation</div>
            <div className="menu_box">Contact us</div>
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
    </>
  );
}

export default Consulting_course;
