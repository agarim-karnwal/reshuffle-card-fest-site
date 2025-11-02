import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-dark opacity-90" />
      </div>

      {/* Card Corner Accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary opacity-60" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary opacity-60" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary opacity-60" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary opacity-60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Logo Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-card/10 backdrop-blur-sm border-2 border-primary flex items-center justify-center">
            <span className="text-primary-foreground font-playfair text-4xl font-bold">R</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-primary-foreground mb-6">
            Reshuffle
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-inter font-light max-w-2xl mx-auto">
            Where Strategy Meets Opportunity – A Premier Commerce Fest
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity font-inter font-medium px-8 py-6 text-lg group"
              onClick={() => window.open('https://forms.google.com', '_blank')}
            >
              Register Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
