import chris from "../assets/chris.png";
import megane from "../assets/megane.png";
import sumeiya from "../assets/sumeiya.png";
import rohan from "../assets/rohan.png";
import anna from "../assets/anna.png";
import francis from "../assets/francis.png";

export const AuthorsMain = () => {
  return (
    <>
      <h1>Authors</h1>
      <br />
      <div className="content-container">
        <div className="content">
          <div className="flex-row">
            <div className="flex-item flex-item-stretch flex-column">
              <a>
                <img
                  className="image max-width-400"
                  src={rohan}
                  alt="headshot"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">Rohan Jankee</p>
              <p>
                <strong>Nationality: </strong>Mauritian
                <br />
                <br />
                <strong>Technical Interests: </strong>Data Analytics, Quality
                Assurance and Process Automation
                <br />
                <br />
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
                  src={francis}
                  alt="headshot"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">Francis Kikulwe</p>
              <p>
                <strong>Nationality: </strong>Tanzanian
                <br />
                <br />
                <strong>Technical Interests: </strong>Game Development and Backend Development
                <br />
                <br />
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
                  src={chris}
                  alt="headshot"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">Christian Adebambo</p>
              <p>
                <strong>Nationality: </strong>Nigerian
                <br />
                <br />
                <strong>Technical Interests: </strong>Data Science and Machine
                Learning
                <br />
                <br />
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
                  src={sumeiya}
                  alt="headshot"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">Sumeiya Juma</p>
              <p>
                <strong>Nationality: </strong>Kenyan
                <br />
                <br />
                <strong>Technical Interests: </strong>Mobile Development and
                Cybersecurity
                <br />
                <br />
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
                  src={anna}
                  alt="headshot"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">Anna Akhigbe</p>
              <p>
                <strong>Nationality: </strong>Nigerian
                <br />
                <br />
                <strong>Technical Interests: </strong>Data Science and Web
                Development
                <br />
                <br />
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
                  src={megane}
                  alt="headshot"
                />
              </a>
            </div>
            <div className="flex-item flex-item-stretch-4 flex-column">
              <p className="text-medium">Megane Demgne</p>
              <p>
                <strong>Nationality: </strong>Cameroonian
                <br />
                <br />
                <strong>Technical Interests: </strong>Data Science and Web
                Design
                <br />
                <br />
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

export default AuthorsMain;
