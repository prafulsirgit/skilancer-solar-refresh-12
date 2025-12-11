import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sun } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home", isAnchor: true },
  { name: "Technology", href: "/#technology", isAnchor: true },
  { name: "Services", href: "/#services", isAnchor: true },
  { name: "Projects", href: "/#projects", isAnchor: true },
  { name: "About Us", href: "/#about", isAnchor: true },
  { name: "Contact", href: "/#contact", isAnchor: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-lg shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform overflow-hidden"
              style={{ backgroundColor: "#fffffff2" }}
            >
              <img
                src="https://www.skilancersolar.com/web/image/website/1/logo/Skilancer%20Solar?unique=667c3e1"
                alt="Skilancer Solar Logo"
                className="w-8 h-8 object-contain"
              />
            </div>

            <span
              className={`font-display font-bold text-xl transition-colors ${
                isScrolled ? "text-foreground" : "text-card"
              }`}
            >
              SKILANCER<span className="text-primary">SOLAR</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-sm transition-colors hover:text-primary ${
                    isScrolled ? "text-foreground" : "text-card/90"
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium text-sm transition-colors hover:text-primary ${
                    isScrolled ? "text-foreground" : "text-card/90"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919971045274"
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled ? "text-foreground" : "text-card"
              }`}
            >
              <Phone className="w-4 h-4" />
              +91-9971045274
            </a>
            <Button variant={isScrolled ? "default" : "hero"} size="default">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${
              isScrolled ? "text-foreground" : "text-card"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg shadow-elevated animate-slide-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isAnchor ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Button variant="default" className="mt-4">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
