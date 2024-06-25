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
// register Swiper custom elements
register();
const root = ReactDOM.createRoot(document.getElementById("root"));
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
