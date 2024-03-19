import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import pic from "../assets/Imvest_logo.png";
import mainpic from "../assets/mainphoto.png";
import HorizontalScrollMenu from "./Dragbox";
import "./Button.css";
import rec1 from "../assets/rectangleone.png"
import rec2 from "../assets/rectangletwo.png"
import line from "../assets/Line_logo.png"
import FadingEdgeDiv from "./Fadingedge";
import BackToTopButton from "./Backtotop";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
    const items = [
        { content: 'Item 1' },
        { content: 'Item 2' },
        { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },   { content: 'Item 3' },
        // ... other items
      ];
    

  return (
    <>
      <div className="head">
        <img src={pic}></img>

        <div>About us</div>
        <div>Consulting</div>
        <div>Academy</div>
        <div>Innovation</div>
        <div>Contact us</div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#3AFFBB",
            color: "black",
            fontSize: "large",
            fontWeight: "bold",
          }}
        >
          Contained
        </Button>
      </div>
      <div className="example">
        <div className="mainpho">
          <img src={mainpic}></img>
        </div>
        <div class="overlay"></div>
      </div>
      <div className="service_sector">
        <div className="service_box">
          <div className="shape">Consulting</div>
          <div className="shape">Academy</div>
          <div className="shape">Innovation</div>
        </div>
        <div className="service_message">บริการของเรา <hr></hr>   </div>
        
    
      </div>
      <HorizontalScrollMenu items={items} />
      <FadingEdgeDiv >
        <img src = {line}></img>
        <img src = {line}></img>

        <img src = {line}></img>

        <img src = {line}></img>

        <img src = {line}></img>

        <img src = {line}></img>


      </FadingEdgeDiv>
      <BackToTopButton/>
      <div className="endpage"></div>


    </>
  );
}
export default ResponsiveAppBar;
