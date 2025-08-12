import React from 'react';
import { ArrowDown, Star, Award, Users, TrendingUp } from 'lucide-react';
import heroPortrait from '@/assets/hero-portrait.jpg';

const HeroSection: React.FC = () => {
  const stats = [
    { icon: Star, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '150+', label: 'Happy Clients' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: TrendingUp, value: '300%', label: 'ROI Average' },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-foreground">Digital Marketing</span>
                <br />
                <span className="text-luxury">&amp; Automation</span>
                <br />
                <span className="text-foreground">Expert</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Transforming businesses through strategic digital marketing, 
                cutting-edge automation, and premium content creation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-luxury">
                View My Work
              </button>
              <button 
                onClick={scrollToAbout}
                className="btn-ghost-luxury"
              >
                About Me
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center glass-card p-4 hover-lift"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <div className="aspect-square rounded-3xl overflow-hidden glass-card p-4">
                <img
                  src={heroPortrait}
                  alt="Mani Vasagam"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-card p-4 animate-glow">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Available for Projects</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-luxury">IndiaTherapist.com</div>
                  <div className="text-sm text-muted-foreground">& IndianLifeCoaches.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-2 text-primary hover:text-accent transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;