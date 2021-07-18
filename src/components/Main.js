import logo from "../img/logo.png";
import bottom_logo from "../img/bottom_logo.png";

function Main() {
  return (
    <>
      <div className="main_navigation">
        <nav className="contener_navigation">
          <li>
            <a href="#portfolio">PORTFOLIO</a>{" "}
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <img src={logo} alt="layout" />
          <li>
            <a href="#blog">BLOG</a>
          </li>
          <li>
            <a href="#getintouch">GET IN TOUCH</a>
          </li>
        </nav>
      </div>
      <div className="bottom_logo">
        <span></span>
        <img src={bottom_logo} alt="layout" />
        <span></span>
      </div>
    </>
  );
}

export default Main;
