import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../App.css';
import { JobAnalyticsBar } from "../components/JobAnalyticsBar";

export const JobAnalyticsBarPage = () => {
  return (
    <>
      <Navbar/>
      <JobAnalyticsBar/>
      <Footer/>
    </>
  )
}

export default JobAnalyticsBarPage;