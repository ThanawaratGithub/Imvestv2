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
              <a href="Consulting_article">Consulting</a>
            </div>
            <div className="menu_box">Academy</div>
            <div className="menu_box">Innovation</div>
            <div className="menu_box">Contact us</div>
            <div className="button_signin">Sign in</div>
          </div>
          <div className="underline"></div>
        </div>
      </div>
      <div className="appbar_selector">
        <div className="appbar_article">บทความน่าสนใจ</div>
        <div className="appbar_course_group">
          <div className="appbar_course">คอร์สเรียน</div>
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
      <table className="table" style={{width:'100%',paddingLeft:'60px'}}>
  <tr>
    <th><Card/></th>
    <th><Card/></th>
    <th><Card/></th>
  </tr>
  <tr>
  <th><Card/></th>
    <th><Card/></th>
    <th><Card/></th>
  </tr>
  <tr>
  <th><Card/></th>
    <th><Card/></th>
    <th><Card/></th>
  </tr>
</table>
      </div>
    </>
  );
}

export default Consulting_course;
