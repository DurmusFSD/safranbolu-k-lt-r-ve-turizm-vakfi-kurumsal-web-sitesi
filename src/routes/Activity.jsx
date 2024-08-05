import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Activity() {
  return (
    <>
      {" "}
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://www.sixt.com.tr/storage/cache/cc7621afb17e333e6980de1fe85947b6f206e681.webp"
        title="Faliyetlerimiz"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Activity;
