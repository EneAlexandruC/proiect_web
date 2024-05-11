import NavigationBar from "./navi/Navbar";
import backgroundImage from "./assets/background-player-on-right.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sectii from "./sectii/Sectii";
import Introduction from "./homepage/Introduction";
import Anunturi from "./anunturi/Anunturi";

function App() {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    minHeight: "100vh",
    width: "100%",
  };

  return (
    <Router>
      <div fluid="true" style={containerStyle}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/sectii" element={<Sectii />} />
          <Route path="/anunturi" element={<Anunturi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
