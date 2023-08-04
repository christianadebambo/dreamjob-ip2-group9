import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../App.css';
import { JobAnalyticsMain } from "../components/JobAnalyticsMain";

export const JobAnalyticsPage = () => {
  return (
    <>
      <Navbar/>
      <JobAnalyticsMain/>
      <Footer/>
    </>
  )
}

export default JobAnalyticsPage;