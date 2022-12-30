import { useRef } from "react";

import AboutUs from "../../components/about-us";
import Footer from "../../components/footer";
import HeroSection from "../../components/hero-section";
import ImageGallery from "../../components/image-gallery";
import Merchandise from "../../components/merchandise";
import Products from "../../components/products";
import TryEveryThing from "../../components/try-everything";

const LandingPage = () => {
  const product = useRef(null);
  const heroSection = useRef(null);

  const scrollToProduct = () => {
    product.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    heroSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div ref={heroSection}>
        <HeroSection scrollToProduct={scrollToProduct} />
      </div>
      <div ref={product}>
        <Products />
      </div>
      <AboutUs />
      <TryEveryThing />
      <Merchandise />
      <ImageGallery />
      <Footer scrollToTop={scrollToTop} />
    </div>
  );
};

export default LandingPage;
