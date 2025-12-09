import { MapPin, Zap } from 'lucide-react';
import solarProject from '@/assets/solar-project.jpg';

const projects = [
  { name: 'Adani Hazira Port Limited', location: 'Surat', capacity: '3MW' },
  { name: 'Renew Power', location: 'Patan', capacity: '105MW' },
  { name: 'O2 Power', location: 'Georai', capacity: '25MW' },
  { name: 'AvaadaClean Project Pvt Ltd.', location: 'Yavatmal', capacity: '100MW' },
  { name: 'AWL Mantralayam', location: 'Mantralayam', capacity: '1MW' },
  { name: 'Hero Motocorp', location: 'Dharuhera', capacity: '6MW' },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-eco/10 rounded-full mb-6">
            <span className="text-eco text-sm font-semibold uppercase tracking-wider">Our Portfolio</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient-solar">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering excellence across India with cutting-edge solar cleaning solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solarProject}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {/* Capacity Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary rounded-full">
                  <span className="text-primary-foreground text-sm font-bold">{project.capacity}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-eco" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-primary" />
                    {project.capacity}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-solar transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
