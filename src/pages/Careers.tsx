import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Zap, 
  Heart, 
  Trophy,
  Rocket,
  GraduationCap,
  Coffee,
  ChevronRight,
  Send,
  Building2,
  Globe
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const jobListings = [
  {
    id: 1,
    title: 'Senior Robotics Engineer',
    department: 'Engineering',
    location: 'Noida, India',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of next-generation solar panel cleaning robots with cutting-edge automation.',
    requirements: ['Python/C++', 'ROS', 'Computer Vision', 'Machine Learning'],
  },
  {
    id: 2,
    title: 'Sales Manager - Solar Solutions',
    department: 'Sales',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Drive business growth by connecting with solar power plants across India.',
    requirements: ['B2B Sales', 'Solar Industry', 'CRM Tools', 'Negotiation'],
  },
  {
    id: 3,
    title: 'IoT Solutions Architect',
    department: 'Technology',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Design and implement IoT infrastructure for real-time robot monitoring systems.',
    requirements: ['AWS/Azure IoT', 'MQTT', 'Data Analytics', 'System Design'],
  },
  {
    id: 4,
    title: 'Field Service Technician',
    department: 'Operations',
    location: 'Rajasthan, India',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Maintain and service robotic cleaning systems at solar installations.',
    requirements: ['Electrical Systems', 'Troubleshooting', 'Field Service', 'Documentation'],
  },
  {
    id: 5,
    title: 'Marketing Executive',
    department: 'Marketing',
    location: 'Noida, India',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Create compelling campaigns to showcase our sustainable technology solutions.',
    requirements: ['Digital Marketing', 'Content Creation', 'SEO/SEM', 'Analytics'],
  },
  {
    id: 6,
    title: 'Mechanical Design Engineer',
    department: 'Engineering',
    location: 'Noida, India',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Design robust mechanical systems for industrial robotic applications.',
    requirements: ['CAD/CAM', 'SolidWorks', 'Prototyping', 'Manufacturing'],
  },
];

const culturePoints = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We encourage bold ideas and experimentation to push the boundaries of clean energy technology.',
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'Work alongside brilliant minds in a team that values diverse perspectives and open communication.',
  },
  {
    icon: Heart,
    title: 'Purpose-Driven',
    description: 'Every day, your work contributes to a cleaner planet and a sustainable future for generations.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Access training programs, certifications, and conferences to grow your skills.',
  },
];

const benefits = [
  { icon: Coffee, label: 'Free Meals & Snacks' },
  { icon: Heart, label: 'Health Insurance' },
  { icon: Trophy, label: 'Performance Bonuses' },
  { icon: Clock, label: 'Flexible Hours' },
  { icon: Globe, label: 'Remote Options' },
  { icon: Zap, label: 'Fast Growth' },
];

const Careers = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', resume: '', coverLetter: '' });
    setSelectedJob(null);
  };

  const selectedJobData = jobListings.find(job => job.id === selectedJob);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">
              Join Our Team
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6">
              Shape the Future of
              <span className="text-gradient-solar block mt-2">Clean Energy</span>
            </h1>
            <p className="text-lg text-card/80 max-w-2xl mx-auto">
              Join a team of innovators, engineers, and dreamers working together to revolutionize 
              solar energy maintenance through cutting-edge robotics and AI.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Culture
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Skilancer Solar, we believe great work happens when people are passionate, 
              supported, and empowered to make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {culturePoints.map((point, index) => (
              <Card 
                key={index} 
                className="bg-card border-border/50 hover:shadow-elevated transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <point.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-secondary/5 rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
              Benefits & Perks
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find your perfect role and help us build the future of sustainable technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {jobListings.map((job) => (
              <Card 
                key={job.id}
                className={`bg-card border-border/50 hover:shadow-elevated transition-all duration-300 cursor-pointer ${
                  selectedJob === job.id ? 'ring-2 ring-primary shadow-glow' : ''
                }`}
                onClick={() => setSelectedJob(job.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-display text-lg text-foreground mb-1">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {job.department}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.experience}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center text-primary font-medium text-sm">
                    Apply Now <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Apply Now
              </h2>
              <p className="text-muted-foreground">
                {selectedJobData 
                  ? `Applying for: ${selectedJobData.title}`
                  : 'Select a position above or submit a general application'
                }
              </p>
            </div>

            <Card className="bg-card border-border/50 shadow-elevated">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/LinkedIn URL *</Label>
                    <Input
                      id="resume"
                      name="resume"
                      value={formData.resume}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you'd be a great fit for this role..."
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;
