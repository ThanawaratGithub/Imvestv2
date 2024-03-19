import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/Mainpage";
import Consulting_article from "./components/Consulting_article";
import Consulting_course from "./components/Consulting_course";
function App() {
  return (
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
            <Consulting_article/>
            </>
          }
        ></Route>

        
<Route
          path="/Consulting_course"
          element={
            <>
            <Consulting_course/>
            </>
          }
        ></Route>
      </Routes>


    </BrowserRouter>
  );
}

export default App;
