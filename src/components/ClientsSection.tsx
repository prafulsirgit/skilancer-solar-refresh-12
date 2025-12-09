const clients = [
  'Adani', 'Renew Power', 'O2 Power', 'GSK', 'Avaada', 'HUL', 
  'Tata Power', 'Premier', 'Denso', 'Hero', 'Wilmar', 'NTPC'
];

export const ClientsSection = () => {
  return (
    <section className="py-20 bg-card border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Trusted by <span className="text-gradient-solar">Industry Leaders</span>
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

        {/* First Row */}
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-4 bg-muted/50 rounded-xl border border-border/30 hover:border-primary/50 transition-colors group"
            >
              <span className="font-display text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
