import { Sun, Battery, Wind, Wrench, Settings, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Off Grid Plant',
    description: 'Generates electricity independently of the main power grid, providing self-sustaining energy for remote locations.',
    color: 'from-primary to-solar-gold-light',
  },
  {
    icon: Battery,
    title: 'On Grid Plant',
    description: 'Connects solar energy systems to the main power grid, allowing for efficient energy distribution and consumption.',
    color: 'from-eco to-eco-light',
  },
  {
    icon: Wind,
    title: 'Hybrid Plant',
    description: 'Combines on-grid and off-grid systems, utilizing both grid-connected electricity & self-sustained energy production.',
    color: 'from-sky to-ocean-light',
  },
  {
    icon: Wrench,
    title: 'Installation',
    description: 'Setting up equipment or systems according to specifications, ensuring proper functioning and performance.',
    color: 'from-ocean to-secondary',
  },
  {
    icon: Settings,
    title: 'Annual Maintenance',
    description: 'Comprehensive service agreement for regular upkeep and repair of equipment or systems throughout the year.',
    color: 'from-accent to-eco',
  },
  {
    icon: Sparkles,
    title: 'Cleaning',
    description: 'Professional removal of dirt, dust, and stains, ensuring optimal panel efficiency and maximum power generation.',
    color: 'from-primary to-eco',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean/10 rounded-full mb-6">
            <span className="text-ocean-light text-sm font-semibold uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-solar">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Robotic Cleaning System & Complete EPC Solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-soft`}>
                <service.icon className="w-8 h-8 text-card" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Bottom Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
            </div>
          ))}
        </div>

        {/* Service Descriptions */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Robotic Cleaning System',
              description: 'Skilancer solar is in the business of maximizing energy production from Solar panels. We design and manufacture automatic, self-powered, waterless Solar Module cleaners for decentralized, rooftop, and utility scale solar power plants.',
            },
            {
              title: 'Operations & Maintenance',
              description: 'Our experienced O&M division takes preventive and corrective maintenance services for solar power plants. Our team operates and maintains solar power plants with monthly reporting on generation and activities.',
            },
            {
              title: 'EPC and I&C',
              description: 'Skilancer Solar is a fully forward-integrated EPC solutions provider. We deploy world-class technology to design, install and commission benchmark solar projects with our highly skilled team.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-secondary/5 rounded-2xl p-8 border border-border/30">
              <h4 className="font-display text-lg font-bold text-foreground mb-3">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
