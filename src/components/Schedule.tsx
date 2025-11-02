import { Calendar, Clock } from "lucide-react";

const Schedule = () => {
  const scheduleData = [
    {
      time: "09:00 AM",
      title: "Registration & Welcome",
      description: "Check-in and opening ceremony"
    },
    {
      time: "10:30 AM",
      title: "Business Strategy Challenge",
      description: "Round 1 begins"
    },
    {
      time: "12:00 PM",
      title: "Marketing Maverick",
      description: "Creative pitch presentations"
    },
    {
      time: "01:30 PM",
      title: "Lunch Break",
      description: "Networking and refreshments"
    },
    {
      time: "02:30 PM",
      title: "Finance Fusion",
      description: "Portfolio analysis competition"
    },
    {
      time: "04:00 PM",
      title: "Trade Wars",
      description: "Final trading session"
    },
    {
      time: "05:30 PM",
      title: "Prize Distribution",
      description: "Awards ceremony and closing"
    }
  ];

  return (
    <section id="schedule" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
          <div className="flex items-center justify-center gap-2 text-muted-foreground font-inter">
            <Calendar className="w-5 h-5" />
            <span>March 15, 2025</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {scheduleData.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10" />

                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-16 md:pl-0`}>
                    <div className="bg-card border border-border rounded-sm p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                      <div className="flex items-center gap-2 text-primary mb-2 font-inter font-medium">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                      <h3 className="text-xl font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-inter text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
