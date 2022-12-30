import AboutUs from "../../components/about-us";
import Footer from "../../components/footer";
import HeroSection from "../../components/hero-section";
import ImageGallery from "../../components/image-gallery";
import Merchandise from "../../components/merchandise";
import Products from "../../components/products";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Products />
      <AboutUs />
      <Merchandise />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default LandingPage;
