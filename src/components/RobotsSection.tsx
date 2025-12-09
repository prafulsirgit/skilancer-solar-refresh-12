import { Battery, Cloud, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cleaningRobot from '@/assets/cleaning-robot.jpg';

const robots = [
  {
    type: 'Fully Automatic',
    name: 'Dry Cleaning Robot',
    features: [
      { icon: Zap, label: 'Self-Charging' },
      { icon: Users, label: 'Less Manpower' },
      { icon: Cloud, label: 'Cloud Controlling' },
    ],
    color: 'from-primary to-solar-gold-light',
    badge: 'Best Seller',
  },
  {
    type: 'Semi-Automatic',
    name: 'Dry Cleaning Robot',
    features: [
      { icon: Zap, label: 'Self-Charging' },
      { icon: Users, label: 'Less Manpower' },
      { icon: Battery, label: 'Portable Battery' },
    ],
    color: 'from-eco to-eco-light',
    badge: 'Popular',
  },
  {
    type: 'Manual Robot',
    name: 'Dry Cleaning Robot',
    features: [
      { icon: Zap, label: 'External-Charging' },
      { icon: Users, label: 'Less Manpower' },
      { icon: Battery, label: 'Portable Battery' },
    ],
    color: 'from-ocean to-ocean-light',
    badge: 'Budget Friendly',
  },
];

export const RobotsSection = () => {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Products</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            3+ Advanced Solar <span className="text-gradient-solar">Cleaning Robots</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each optimized for specific applications and requirements
          </p>
        </div>

        {/* Robots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {robots.map((robot, index) => (
            <div
              key={robot.type}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50"
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r ${robot.color}`}>
                <span className="text-card text-xs font-bold">{robot.badge}</span>
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cleaningRobot}
                  alt={robot.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${robot.color} opacity-20`} />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-muted-foreground text-sm mb-1">{robot.name}</div>
                <h3 className={`font-display text-2xl font-bold mb-6 bg-gradient-to-r ${robot.color} bg-clip-text text-transparent`}>
                  {robot.type}
                </h3>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {robot.features.map((feature) => (
                    <div key={feature.label} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${robot.color} flex items-center justify-center`}>
                        <feature.icon className="w-4 h-4 text-card" />
                      </div>
                      <span className="text-foreground font-medium">{feature.label}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
