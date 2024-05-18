import NavigationBar from "./navi/Navbar";
import backgroundImage from "./assets/background-player-on-right.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sectii from "./sectii/Sectii";
import Introduction from "./homepage/Introduction";
import Anunturi from "./anunturi/Anunturi";
import Echipe from "./echipe/Echipe";
import Galerie from "./galerie/Galerie";
import Contact from "./contact/Contact";
import Admin from "./admin/Admin";
import { useEffect, useState } from "react";

function App() {
  const getInitialAuthState = () => {
    const storedAuthState = localStorage.getItem("isAuthorised");
    return storedAuthState === "true"; // Converteste la boolean
  };

  const [isAuthorised, setIsAuthorised] = useState(getInitialAuthState);

  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    minHeight: "100vh",
    width: "100%",
  };

  useEffect(() => {
    localStorage.setItem("isAuthorised", isAuthorised);
  }, [isAuthorised]);

  return (
    <Router>
      <div fluid="true" style={containerStyle}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/sectii" element={<Sectii />} />
          <Route
            path="/anunturi"
            element={<Anunturi isAuthorised={isAuthorised} />}
          />
          <Route
            path="/echipe"
            element={<Echipe isAuthorised={isAuthorised} />}
          />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={
              <Admin
                setIsAuthorised={setIsAuthorised}
                isAuthorised={isAuthorised}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
