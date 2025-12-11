import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import heroVideo from "@/assets/hero-solar-video.mp4";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-40 left-10 w-96 h-96 bg-sky/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full border border-card/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-card/90 text-sm font-medium">
              8+ Years of Excellence in Solar Technology
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-card mb-6 leading-tight animate-slide-up">
            Clean panels, higher generation —
            <span className="text-gradient-solar block mt-2">
              powered by automation.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-card/80 text-lg md:text-xl max-w-2xl mb-10 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Premium automatic dry-cleaning{" "}
            <strong className="text-card">
              Robotic Solar Panel Cleaning Solutions
            </strong>{" "}
            for solar power plants, reducing manual effort and operational
            costs.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl">
              Get Started
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Preview */}
          <div
            className="flex flex-wrap gap-8 mt-16 pt-5 pb-4 border-t border-card/20 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { value: "50+", label: "Happy Clients" },
              { value: "95+", label: "Projects Completed" },
              { value: "18M+", label: "Litres Water Saved" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary font-display">
                  {stat.value}
                </div>
                <div className="text-card/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-card/60 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-card/40 to-transparent" />
      </div>
    </section>
  );
};
