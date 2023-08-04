import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import '../App.css';
import { AuthorsMain } from "../components/AuthorsMain";

export const AuthorsPage = () => {
  return (
    <>
      <Navbar/>
      <AuthorsMain/>
      <Footer/>
    </>
  )
}

export default AuthorsPage;