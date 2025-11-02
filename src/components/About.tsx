import { Sparkles, Users, Trophy } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competitive Events",
      description: "Challenge yourself across diverse business domains"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Network & Grow",
      description: "Connect with peers from colleges nationwide"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation Hub",
      description: "Showcase your entrepreneurial spirit"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      {/* Decorative Corner */}
      <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-border opacity-20" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              About Reshuffle
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto" />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
            Reshuffle is more than just a commerce fest—it's a celebration of strategic thinking, 
            business acumen, and innovative minds. Drawing inspiration from the calculated precision 
            of a card game, we bring together students to compete, collaborate, and create lasting 
            connections in the world of commerce.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-sm border border-border shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-inter">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
