import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../App.css';
import { GetStartedGeo } from "../components/GetStartedGeo";

export const GetStartedGeoPage = () => {
  return (
    <>
      <Navbar/>
      <GetStartedGeo/>
      <Footer/>
    </>
  )
}

export default GetStartedGeoPage;