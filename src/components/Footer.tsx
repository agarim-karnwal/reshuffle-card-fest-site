const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-primary-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-playfair font-bold mb-2">Reshuffle</h3>
            <p className="text-sm text-primary-foreground/70 font-inter">
              Where Strategy Meets Opportunity
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/70 font-inter">
              © {currentYear} Reshuffle. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
