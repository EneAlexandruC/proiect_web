import Introduction from "./homepage/Introduction";
import NavigationBar from "./navi/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import backgroundImage from "./assets/background-player-on-right.jpg";
import "./App.css";

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
    <div fluid style={containerStyle}>
      <NavigationBar />
      <Introduction />
    </div>
  );
}

export default App;
