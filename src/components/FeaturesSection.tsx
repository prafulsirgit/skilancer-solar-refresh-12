import { Cog, Battery, Droplets, Brush } from 'lucide-react';

const features = [
  {
    icon: Cog,
    number: '01',
    title: 'Fully Automatic',
    subtitle: 'Cleaning Machine',
    color: 'from-primary to-solar-gold-light',
  },
  {
    icon: Battery,
    number: '02',
    title: 'Self Powered',
    subtitle: 'Machines',
    color: 'from-eco to-eco-light',
  },
  {
    icon: Droplets,
    number: '03',
    title: 'Waterless Cleaning',
    subtitle: 'Robot',
    color: 'from-sky to-ocean-light',
  },
  {
    icon: Brush,
    number: '04',
    title: 'Ultra Soft PBT Brush',
    subtitle: 'for efficient cleaning',
    color: 'from-ocean to-ocean-light',
  },
];

export const FeaturesSection = () => {
  return (
    <section id="technology" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Automation, Power,{' '}
            <span className="text-gradient-solar">Waterless Cleaning</span>
            <br />& Soft Brush Technology
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-muted rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="font-display text-3xl font-bold text-foreground">{feature.number}</span>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-soft`}>
                <feature.icon className="w-8 h-8 text-card" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.subtitle}</p>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
