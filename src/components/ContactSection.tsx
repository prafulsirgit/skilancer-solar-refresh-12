import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'India' },
  { icon: Phone, label: 'Phone', value: '+91-9971045274' },
  { icon: Mail, label: 'Email', value: 'info@skilancersolar.com' },
  { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 9AM - 6PM' },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Let's Discuss Your
              <span className="text-gradient-solar block">Solar Project</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to maximize your solar panel efficiency? Contact us for a free consultation and discover how our robotic cleaning solutions can transform your energy output.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium text-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-elevated border border-border/50">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                  <Input placeholder="John Doe" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" className="h-12" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input placeholder="+91 XXXXX XXXXX" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Project Type</label>
                  <Input placeholder="e.g., Rooftop, Utility Scale" className="h-12" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea placeholder="Tell us about your project requirements..." rows={4} />
              </div>

              <Button variant="solar" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
