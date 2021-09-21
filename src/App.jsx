// Components
import Intro from "components/Intro";
import Topbar from "components/Topbar";
import Portfolio from "components/Portfolio";
import Works from "components/Works";
import Testimonials from "components/Testimonials";
import Contact from "components/Contact";

// Styles
import "./app.scss";

// App
function App() {
  return (
    <div className="app">
      <Topbar />
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
