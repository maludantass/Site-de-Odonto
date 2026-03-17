import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ContentSection />
      <Footer />
    </>
  );
}

export default Home;