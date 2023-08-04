import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../App.css';
import { ContactUsMain } from "../components/ContactUsMain";

export const ContactUsPage = () => {
  return (
    <>
      <Navbar/>
      <ContactUsMain/>
      <Footer/>
    </>
  )
}

export default ContactUsPage;