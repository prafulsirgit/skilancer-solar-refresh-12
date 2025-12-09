import { Award, Shield, CheckCircle } from 'lucide-react';

const recognitions = [
  { name: 'Make in India', description: 'Certified Indian Manufacturer' },
  { name: 'IP68 Certified', description: 'Waterproof Rating' },
  { name: 'NISE Approved', description: 'National Institute of Solar Energy' },
  { name: 'Trina Solar', description: 'Official Partner' },
  { name: 'Jinko Solar', description: 'Certified Compatible' },
  { name: 'UL Listed', description: 'Safety Certification' },
];

export const RecognitionsSection = () => {
  return (
    <section className="py-24 bg-gradient-ocean relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full mb-6 border border-card/20">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-card text-sm font-semibold uppercase tracking-wider">Industry Recognitions</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-card mb-4">
            Certifications & <span className="text-primary">Partners</span>
          </h2>
        </div>

        {/* Recognitions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {recognitions.map((item, index) => (
            <div
              key={item.name}
              className="group bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-card/20 hover:bg-card/20 hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-card/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold text-card mb-1">{item.name}</h3>
              <p className="text-card/60 text-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
