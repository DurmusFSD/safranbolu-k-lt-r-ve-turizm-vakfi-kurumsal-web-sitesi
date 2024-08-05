import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://www.sixt.com.tr/storage/cache/0b62abbeec594a9b1a77fa0fe91ac298b3803768.webp"
        title="Safranbolu: Bin Yıllık Tarihin Sadık Bekçisi"
        text="Safranbolu Kültür Ve Turizm Vakfı"
        buttonText="Safranbolu"
        url="https://www.youtube.com/@safranbolukulturveturizmvakfi"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
