const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground font-sans">
        © {new Date().getFullYear()} Adithya Ramachar. Built with intention.
      </p>
      <p className="text-xs text-muted-foreground font-sans">
        Madrid, Spain · Open to opportunities across Europe
      </p>
    </div>
  </footer>
);

export default Footer;
