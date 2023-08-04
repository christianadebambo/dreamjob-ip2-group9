import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../App.css';
import { GetStartedMain } from "../components/GetStartedMain";

export const GetStartedPage = () => {
  return (
    <>
      <Navbar/>
      <GetStartedMain/>
      <Footer/>
    </>
  )
}

export default GetStartedPage;