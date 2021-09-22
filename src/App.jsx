import { useState } from "react";

// Components
import Intro from "components/Intro";
import Topbar from "components/Topbar";
import Portfolio from "components/Portfolio";
import Works from "components/Works";
import Testimonials from "components/Testimonials";
import Contact from "components/Contact";

// Styles
import "./app.scss";
import Menu from "components/Menu";

// App
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
