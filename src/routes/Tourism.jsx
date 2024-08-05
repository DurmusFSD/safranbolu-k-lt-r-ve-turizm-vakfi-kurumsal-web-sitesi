import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Tourism() {
  return (
    <>
      {" "}
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://www.etstur.com/letsgo/wp-content/uploads/2015/03/safranboluda-ne-yapilir-1.jpg"
        title="Safranboluda Turizm"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Tourism;
