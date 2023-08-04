import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../App.css';
import { GetStartedBar } from "../components/GetStartedBar";

export const GetStartedBarPage = () => {
  return (
    <>
      <Navbar/>
      <GetStartedBar/>
      <Footer/>
    </>
  )
}

export default GetStartedBarPage;