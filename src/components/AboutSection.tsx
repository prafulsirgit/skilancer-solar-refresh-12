import { CheckCircle2, Award, Leaf, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cleaningRobot from '@/assets/cleaning-robot.jpg';

const highlights = [
  { icon: Award, text: '8+ Years of Experience' },
  { icon: Leaf, text: 'Eco-Friendly Solutions' },
  { icon: Zap, text: 'Advanced Automation' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={cleaningRobot}
                alt="Solar panel cleaning robot"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-elevated border border-border max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-solar rounded-xl flex items-center justify-center shadow-glow">
                  <span className="font-display text-2xl font-bold text-foreground">8+</span>
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-foreground">Years of</div>
                  <div className="text-muted-foreground">Excellence</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Skilancer Solar</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Revolutionizing Solar Panel
              <span className="text-gradient-solar block">Maintenance</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              <strong className="text-foreground">Skilancer Solar</strong> specializes in developing premium automatic dry-cleaning Robotic Solar Panel Cleaning Solutions for solar power plants, helping reduce manual effort and operational costs.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Renowned in the solar industry, we excel in deploying advanced cleaning systems for both commissioned and under-construction projects. Our innovative approach ensures maximum energy output while minimizing environmental impact.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <Button variant="solar" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
