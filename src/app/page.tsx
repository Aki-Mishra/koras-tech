import Image from "next/image";
import ContactUs from "./components/ContactUs";
import ImageSlider from "./components/ImageSlider";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import CustomerReview from "./components/CustomerReview";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* What we do section */}
<Services/>

      {/* Other sections */}
      <Projects />
      <ContactUs />
      <CustomerReview />
      <Leadership />
    </>
  );
}
