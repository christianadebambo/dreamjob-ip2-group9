import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";
import image6 from "../assets/image-6.png";
import image7 from "../assets/image-7.png";
import image8 from "../assets/image-8.png";
import image9 from "../assets/image-9.png";

export const OverviewMain = () => {
  return (
    <>
      <h1>Overview</h1>
      <br />
      <div className="content-container">
        <div className="content">
          <div className="flex-row">
            <div className="flex-item flex-item-stretch flex-column">
              <a>
                <img
                  className="image max-width-400"
                  src={image4}
                  alt="image 4"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-large">About dreamjob</p>
              <p>
                At dreamjob, we believe that information is best understood when
                it's visually presented. That's why we've integrated
                cutting-edge visualization capabilities into our platform,
                revolutionizing the way you explore job-related information.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="flex-row">
            <div className="flex-item flex-item-stretch flex-column">
              <a>
                <img
                  className="image max-width-400"
                  src={image5}
                  alt="image 5"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">
                <a href="/jobanalytics">Explore Job Analytics</a>
              </p>
              <p>
                Our dynamic charts and graphs provide a dynamic and engaging way
                to interpret job-related data.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="flex-row">
            <div className="flex-item flex-item-stretch flex-column">
              <a>
                <img
                  className="image max-width-400"
                  src={image6}
                  alt="image 6"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">
                <a href="/getstarted">Get Started</a>
              </p>
              <p>
                Here, you'll find everything you need to know about accessing
                our APIs, executing code for visualizations, and understanding
                the data that drives our powerful matching capabilities.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="flex-row">
            <div className="flex-item flex-item-stretch flex-column">
              <a>
                <img
                  className="image max-width-400"
                  src={image7}
                  alt="image 7"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">
                <a href="/authors">Explore Authors</a>
              </p>
              <p>
                Here, you will discover the talented developers that designed
                and developed the dreamjob website.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="flex-row">
            <div className="flex-item flex-item-stretch flex-column">
              <a>
                <img
                  className="image max-width-400"
                  src={image8}
                  alt="image 8"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">
                <a
                  href="https://drive.google.com/file/d/10pwpvWE12NK3SakG6DmxogNWJ2trZQn3/view?usp=drive_link"
                  target="_blank"
                >
                  Project Specifications
                </a>
              </p>
              <p>
                This leads to a comprehensive document that outlines the
                detailed specifications, requirements, and objectives of the
                dreamjob project.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="flex-row">
            <div className="flex-item flex-item-stretch flex-column">
              <a>
                <img
                  className="image max-width-400"
                  src={image9}
                  alt="image 9"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">
                <a href="/contactus">Contact Us</a>
              </p>
              <p>
                We value your feedback, inquiries, and suggestions. Our team is
                here to assist you and provide any information you may need.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default OverviewMain;