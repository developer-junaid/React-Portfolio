// Styles
import "./topbar.scss";

// Icons
import Person from "@material-ui/icons/Person";
import Mail from "@material-ui/icons/Mail";

// Comp
export default function Topbar({ menuOpen, setMenuOpen }) {
  // Return
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="item-container">
            <Person className="icon" />
            <span>+44 888 12 41</span>
          </div>
          <div className="item-container">
            <Mail className="icon" />
            <span>qjunaid623@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
