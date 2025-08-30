import React from 'react';
import { Briefcase, Heart, Target, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: 'Professional Experience',
      description: 'Working with IndiaTherapist.com and IndianLifeCoaches.com to deliver exceptional digital solutions.'
    },
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'Dedicated to creating premium digital experiences that drive real business results.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focus on measurable outcomes and ROI for every client project and campaign.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge automation and marketing technologies for competitive advantage.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-header">About Mani Vasagam</h2>
          <p className="section-subtitle mx-auto">
            A passionate digital marketing strategist and automation expert dedicated to 
            transforming businesses through innovative solutions and premium service delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-3xl font-display font-bold text-foreground">
              Crafting Digital Excellence Since 2019
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                With 3+ Years Experience (since 2022) in digital marketing and automation, I specialize in 
                creating comprehensive solutions that drive growth and efficiency for businesses across industries.
              </p>
              <p>
                Currently contributing to the success of <span className="text-primary font-semibold">IndiaTherapist.com</span> and 
                <span className="text-primary font-semibold"> IndianLifeCoaches.com</span>, I bring expertise in 
                Facebook Ads, Google Ads, content creation, and advanced automation systems.
              </p>
              <p>
                My approach combines strategic thinking with technical excellence, ensuring every project 
                delivers measurable results and exceeds client expectations.
              </p>
            </div>
            
          <div className="pt-6">
  <a
    href="https://wa.me/919659652945?text=Hi%20I%20have%20sent%20an%20enquiry%20to%20learn%20more%20about%20your%20service"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-luxury"
  >
    Enquiry Now
  </a>
</div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="glass-card hover-lift p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-luxury rounded-2xl mb-4">
                  <highlight.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Highlights */}
        <div className="glass-card p-8 text-center animate-fade-in-up">
          <h3 className="text-2xl font-display font-bold text-luxury mb-6">
            Trusted Partner For Premium Brands
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-primary">IndiaTherapist.com</h4>
              <p className="text-muted-foreground">Leading therapy platform in India</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border"></div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-primary">IndianLifeCoaches.com</h4>
              <p className="text-muted-foreground">Premier life coaching network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
