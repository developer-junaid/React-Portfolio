import "./intro.scss";

// iTyped
import { init } from "ityped";
import { useEffect, useRef } from "react";

// Comp
export default function Intro() {
  // useRef works like querySelector
  const textRef = useRef();

  useEffect(() => {
    // Animation
    init(textRef.current, {
      showCursor: true,
      strings: [
        "Full-Stack Developer",
        "JAM Stack Developer",
        "MERN Stack Developer",
      ],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  // Return
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image-container">
          <img src="assets/man.png" alt="man smiling" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Junaid Qureshi</h1>
          <h3>
            Freelance <span ref={textRef}></span>{" "}
          </h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="down arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}
