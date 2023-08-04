import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../App.css';
import { JobAnalyticsPie } from "../components/JobAnalyticsPie";

export const JobAnalyticsPiePage = () => {
  return (
    <>
      <Navbar/>
      <JobAnalyticsPie/>
      <Footer/>
    </>
  )
}

export default JobAnalyticsPiePage;