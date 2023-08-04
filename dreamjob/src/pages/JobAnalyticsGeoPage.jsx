import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../App.css';
import { JobAnalyticsGeo } from "../components/JobAnalyticsGeo";

export const JobAnalyticsGeoPage = () => {
  return (
    <>
      <Navbar/>
      <JobAnalyticsGeo/>
      <Footer/>
    </>
  )
}

export default JobAnalyticsGeoPage;