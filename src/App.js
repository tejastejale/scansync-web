import logo from "./logo.svg";
import "./App.css";
import { StickyNavbar } from "./Components/Nav";
import Home from "./Screens/Home";
import Foot from "./Components/Footer";

function App() {
  return (
    <div>
      <StickyNavbar />
      <Home />
      <Foot />
    </div>
  );
}

export default App;
