import "./Header.css";
import ufc_logo from "../../assets/ufc_logo.png";

const Header = () => {
  return (
    <header className="App-header">
      <img src={ufc_logo} className="App-logo" alt="App-logo" />
    </header>
  );
};

export default Header;
