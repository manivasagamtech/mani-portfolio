import React from 'react';
import { Mail, Calendar, MessageCircle, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  // Updated contact actions: mailto links with subject/body and WhatsApp
  const contactMethods = [
    {
      icon: Mail,
      title: 'Primary Email',
      value: 'maniskk1414@gmail.com',
      href:
        'mailto:maniskk1414@gmail.com?' +
        'subject=Enquiry%20About%20Services&' +
        'body=Hi%20Mani,%20I%20would%20like%20to%20learn%20more%20about%20your%20services.'
    },
    {
      icon: Mail,
      title: 'Business Email',
      value: 'manivasagam.tech@gmail.com',
      href:
        'mailto:manivasagam.tech@gmail.com?' +
        'subject=Enquiry%20About%20Services&' +
        'body=Hi%20Mani,%20I%20would%20like%20to%20learn%20more%20about%20your%20services.'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      value: 'Book a consultation',
      href:
        'https://wa.me/919659652945?' +
        'text=Hi%20IM%20looking%20to%20schedule%20a%20call%20to%20enquire%20more%20about%20the%20services'
    },
    {
      icon: MessageCircle,
      title: 'Quick Response',
      value: 'Within 24 hours',
      href: '#' // keep as a placeholder or link to an FAQ/contact page
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/20 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-header">Let's Create Something Amazing</h2>
          <p className="section-subtitle mx-auto">
            Ready to transform your business with premium digital marketing and automation? 
            Let's discuss your project and explore how we can achieve exceptional results together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you need comprehensive digital marketing strategies, automation solutions, 
                or content creation services, I'm here to help you achieve your business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="glass-card hover-lift p-6 group transition-all duration-300 hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-luxury rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <method.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Proof / Why Choose Me */}
            <div className="glass-card p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Why Choose Me?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  5+ years of proven experience in digital marketing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Specialist in Facebook Ads, Google Ads, and automation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Track record with premium brands and successful projects
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Dedicated to delivering measurable ROI and results
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Start Your Project
              </h3>

              {/* Formspree form: uses action attribute to post to your Form ID */}
              <form
                action="https://formspree.io/f/mnnbpvnn"
                method="POST"
                className="space-y-6"
              >
                {/* optional email subject for the notification email you receive */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New project enquiry from your portfolio site"
                />

                {/* anti-spam honeypot (hidden field) */}
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="_replyto"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interest
                  </label>
                    <select
                      name="serviceInterest"
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    >
                      <option value="" disabled selected>Select a service</option>
                      <option>Facebook Ads Management</option>
                      <option>Google Ads Campaigns</option>
                      <option>Content Creation</option>
                      <option>Website Development</option>
                      <option>Email Automation</option>
                      <option>Social Media Marketing</option>
                      <option>Complete Digital Strategy</option>
                    </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="projectDetails"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Tell me about your project goals, timeline, and budget..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-luxury flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
