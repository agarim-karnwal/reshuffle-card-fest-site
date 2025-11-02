import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-inter">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
