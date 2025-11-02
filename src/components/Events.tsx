import eventBusiness from "@/assets/event-business.jpg";
import eventMarketing from "@/assets/event-marketing.jpg";
import eventFinance from "@/assets/event-finance.jpg";

const Events = () => {
  const events = [
    {
      title: "Business Strategy Challenge",
      description: "Test your strategic planning skills in this high-stakes case competition where teams analyze real-world business scenarios.",
      image: eventBusiness
    },
    {
      title: "Marketing Maverick",
      description: "Showcase your creative prowess in crafting compelling campaigns that capture attention and drive results.",
      image: eventMarketing
    },
    {
      title: "Finance Fusion",
      description: "Navigate complex financial puzzles and demonstrate your analytical abilities in investment and portfolio management.",
      image: eventFinance
    },
    {
      title: "Entrepreneurship Pitch",
      description: "Present your innovative startup ideas to industry experts and compete for recognition and potential funding.",
      image: eventBusiness
    },
    {
      title: "Trade Wars",
      description: "Engage in strategic trading simulations that mirror global market dynamics and test your negotiation skills.",
      image: eventMarketing
    },
    {
      title: "Digital Commerce Arena",
      description: "Master the art of e-commerce and digital marketing in this fast-paced online business simulation.",
      image: eventFinance
    }
  ];

  return (
    <section id="events" className="py-24 bg-card relative">
      {/* Decorative Elements */}
      <div className="absolute top-12 left-12 w-3 h-3 bg-primary rounded-full opacity-40" />
      <div className="absolute bottom-12 right-12 w-3 h-3 bg-primary rounded-full opacity-40" />

      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Featured Events
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            Choose your game and prove your expertise across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <div 
              key={index}
              className="group bg-background border border-border rounded-sm overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-playfair font-semibold text-foreground">
                  {event.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
