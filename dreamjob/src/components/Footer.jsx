import logo2 from "../assets/logo2.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";


export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="content-container">
          <div className="content">
            <div className="flex-row">
              <div className="flex-item flex-item-stretch flex-column">
                <a href="/">
                  <img src={logo2} alt="dreamjob icon" />
                </a>
                <p className="n2">
                  At dreamjob, we believe that information is best understood
                  when it's visually presented. That's why we've integrated
                  cutting-edge visualization capabilities into our platform,
                  revolutionizing the way you explore job-related information.
                </p>
                <div className="social">
                  <a href="https://www.instagram.com/" target="_blank">
                    <img src={instagram} alt="Instagram" />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <img src={linkedin} alt="LinkedIn" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <img src={facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
              <div className="flex-item flex-item-stretch-4 flex-column">
                <p className="n2">
                  <a id="n3">Useful Links</a>
                  <br />
                  <br />
                  <a href="/">Home</a>
                  <br />
                  <a href="/overview">Overview</a>
                  <br />
                  <a href="/authors">Authors</a>
                  <br />
                  <a href="/jobanalytics">Job Analytics</a>
                  <br />
                  <a href="/getstarted">Get Started</a>
                  <br />
                  <a href="/contactus">Contact Us</a>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;