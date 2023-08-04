import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";


export const HomeMain = () => {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <div className="flex-row">
            <div className="flex-item flex-item-stretch flex-column">
              <a>
                <img
                  className="image max-width-400"
                  src={image1}
                  alt="image 1"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-large">Discover Your Dream Job</p>
              <p>
                Welcome to dreamjob, your ultimate destination for job seekers
                of all backgrounds and aspirations. We are here to empower you
                on your journey to finding your dream job.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="flex-row">
            <div className="flex-item flex-item-stretch flex-column">
              <a>
                <img
                  className="image max-width-400"
                  src={image2}
                  alt="image 2"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-large">Uncover Hidden Insights</p>
              <p>
                From employment trends and industry demands to salary
                distributions and career growth trajectories, our intuitive
                visualizations bring data to life, allowing you to grasp complex
                information at a glance.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="flex-row">
            <div className="flex-item flex-item-stretch flex-column">
              <a>
                <img
                  className="image max-width-400"
                  src={image3}
                  alt="image 3"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-large">Real-time Updates</p>
              <p>
                Stay on top of the latest job market trends with real-time data
                updates. Our visualizations are constantly refreshed to provide
                you with the most accurate and up-to-date information, ensuring
                you make informed decisions based on the latest insights.
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

export default HomeMain;