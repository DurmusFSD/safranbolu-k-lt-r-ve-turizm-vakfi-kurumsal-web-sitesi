import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      {" "}
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://www.sixt.com.tr/storage/cache/399fd462a29167c1753b524b83842df91b2cb7b3.webp"
        title=""
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
