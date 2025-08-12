import React from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface PortfolioSectionProps {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ title, subtitle, items }) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="section-header">{title}</h2>
          <p className="section-subtitle mx-auto">{subtitle}</p>
        </div>
        
        <div className="scroll-container">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="portfolio-card animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-xs text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;