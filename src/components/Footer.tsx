import {
  Sun,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Robotic Cleaning", href: "#services" },
    { name: "O&M Services", href: "#services" },
    { name: "EPC Solutions", href: "#services" },
    { name: "Installation", href: "#services" },
  ],
  resources: [
    { name: "Projects", href: "#projects" },
    { name: "Technology", href: "#technology" },
    { name: "Blog", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: "#fffffff2" }}
              >
                <img
                  src="https://www.skilancersolar.com/web/image/website/1/logo/Skilancer%20Solar?unique=667c3e1"
                  alt="Skilancer Solar Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <span className="font-display font-bold text-xl text-card">
                SKILANCER<span className="text-primary">SOLAR</span>
              </span>
            </a>

            <p className="text-card/70 mb-6 max-w-sm">
              Premium automatic dry-cleaning Robotic Solar Panel Cleaning
              Solutions for solar power plants, reducing manual effort and
              operational costs.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-card/80">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91-9971045274</span>
              </div>
              <div className="flex items-center gap-3 text-card/80">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@skilancersolar.com</span>
              </div>
              <div className="flex items-center gap-3 text-card/80">
                <MapPin className="w-4 h-4 text-primary" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-card mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-card/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-card mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-card/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-card mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-card/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/60 text-sm">
              © {new Date().getFullYear()} Skilancer Solar. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-card/10 rounded-lg flex items-center justify-center text-card/70 hover:bg-primary hover:text-foreground transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
