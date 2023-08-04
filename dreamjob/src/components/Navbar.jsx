import logo from "../assets/logo.png";
import menu from "../assets/menu.png";

export const Navbar = () => {
  return (
    <>
      <div className="menu-container">
        <div className="menu">
          <div className="menu-table flex-row-space-between">
            <div className="logo flex-row-center">
              <a href="/">
                <img src={logo} alt="dreamjob icon" />
              </a>
            </div>
            <a className="menu-button" tabindex="0" href="#">
              <img src={menu} alt="menu button" />
            </a>
            <div className="menu-items flex-row-center flex-item">
              <a href="/overview">Overview</a>
              <a href="/authors">Authors</a>
              <a href="/jobanalytics">Job Analytics</a>
              <a href="/getstarted">Get Started</a>
              <a id="bluecontact" href="/contactus">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Navbar;