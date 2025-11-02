import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "reshuffle@college.edu",
      link: "mailto:reshuffle@college.edu"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      value: "@reshuffle_fest",
      link: "https://instagram.com/reshuffle_fest"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Commerce College Campus",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-card relative">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/20" />

      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            Have questions? Reach out to us through any of these channels
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="bg-background border border-border rounded-sm p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group flex items-start gap-4"
              >
                <div className="text-primary mt-1 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-inter mb-1">
                    {item.label}
                  </div>
                  <div className="text-foreground font-inter font-medium group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="bg-muted/30 border border-border rounded-sm h-80 flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground font-inter">
                Map embed placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
