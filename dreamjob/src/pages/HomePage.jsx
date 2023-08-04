import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../App.css';
import { HomeMain } from "../components/HomeMain";

export const HomePage = () => {
  return (
    <>
      <Navbar/>
      <HomeMain/>
      <Footer/>
    </>
  )
}

export default HomePage;