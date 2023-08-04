import image10 from "../assets/image-10.png";
import image11 from "../assets/image-11.png";
import image12 from "../assets/image-12.png";

export const JobAnalyticsMain = () => {
  return (
    <>
      <h1>Job Analytics</h1>
      <br />
      <div className="content-container">
        <div className="content">
          <div className="flex-row">
            <div className="flex-item flex-item-stretch flex-column">
              <a>
                <img
                  className="image max-width-400"
                  src={image10}
                  alt="image 10"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">
                <a href="/jobanalyticspie">Job Analytics - Job Market Insights</a>
              </p>
              <p>
              Here, you'll gain access to valuable and up-to-date insights on the dynamic job market. 
              We understand that staying informed about employment trends is essential for making informed career decisions.
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
                  src={image11}
                  alt="image 11"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">
                <a href="/jobanalyticsgeo">Job Analytics - Job Search</a>
              </p>
              <p>
              Finding your dream job is now easier than ever with dreamjob! Easily explore data by 
              filtering, zooming, and interacting with the visualization.
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
                  src={image12}
                  alt="image 12"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">
                <a href="/jobanalyticsbar">Job Analytics - Salary Data</a>
              </p>
              <p>
              Understanding salary information is crucial when making informed decisions about your career path 
              and negotiating job offers. Visualize salary distributions, and salary ranges through our interactive chart.
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

export default JobAnalyticsMain;