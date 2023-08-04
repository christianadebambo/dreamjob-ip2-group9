import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../App.css';
import { GetStartedPie } from "../components/GetStartedPie";

export const GetStartedPiePage = () => {
  return (
    <>
      <Navbar/>
      <GetStartedPie/>
      <Footer/>
    </>
  )
}

export default GetStartedPiePage;