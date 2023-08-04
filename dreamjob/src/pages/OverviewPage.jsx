import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../App.css';
import { OverviewMain } from "../components/OverviewMain";

export const OverviewPage = () => {
  return (
    <>
      <Navbar/>
      <OverviewMain/>
      <Footer/>
    </>
  )
}

export default OverviewPage;