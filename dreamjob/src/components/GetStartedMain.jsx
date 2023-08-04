import image13 from "../assets/image-13.png";
import image14 from "../assets/image-14.png";
import image15 from "../assets/image-15.png";

export const GetStartedMain = () => {
  return (
    <>
      <h1>Get Started</h1>
      <br />
      <div className="content-container">
        <div className="content">
          <div className="flex-row">
            <div className="flex-item flex-item-stretch flex-column">
              <a>
                <img
                  className="image max-width-400"
                  src={image13}
                  alt="image 13"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">
                <a href="/getstartedpie">Get Started - Job Market Insights</a>
              </p>
              <p>
              Here, you'll find everything you need to know about accessing our Job Market Insights API, 
              executing code for visualizations, and understanding the data that drives our powerful matching capabilities.
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
                  src={image14}
                  alt="image 14"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">
                <a href="/getstartedgeo">Get Started - Job Search</a>
              </p>
              <p>
              Here, you'll find everything you need to know about accessing our Job Search API, 
              executing code for visualizations, and understanding the data that drives our powerful matching capabilities.
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
                  src={image15}
                  alt="image 15"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">
                <a href="/getstartedbar">Get Started - Salary Data</a>
              </p>
              <p>
              Here, you'll find everything you need to know about accessing our Salary Data API, 
              executing code for visualizations, and understanding the data that drives our powerful matching capabilities.
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

export default GetStartedMain;