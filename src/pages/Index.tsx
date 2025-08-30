import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

// Import unique images for each service
import contentStorytellingImg from '@/assets/content-storytelling.jpg';
import blogWritingImg from '@/assets/blog-writing.jpg';
import videoProductionImg from '@/assets/video-production.jpg';
import socialStrategyImg from '@/assets/social-strategy.jpg';
import communityManagementImg from '@/assets/community-management.jpg';
import socialAnalyticsImg from '@/assets/social-analytics.jpg';
import paidSocialImg from '@/assets/paid-social.jpg';
import corporateVideoImg from '@/assets/corporate-video.jpg';
import shortFormVideoImg from '@/assets/short-form-video.jpg';
import educationalVideoImg from '@/assets/educational-video.jpg';
import productDemoImg from '@/assets/product-demo.jpg';
import facebookCampaignImg from '@/assets/facebook-campaign.jpg';
import ecommerceFacebookImg from '@/assets/ecommerce-facebook.jpg';
import brandAwarenessImg from '@/assets/brand-awareness.jpg';
import retargetingImg from '@/assets/retargeting.jpg';
import googleSearchImg from '@/assets/google-search.jpg';
import googleDisplayImg from '@/assets/google-display.jpg';
import youtubeAdsImg from '@/assets/youtube-ads.jpg';
import businessWebsiteImg from '@/assets/business-website.jpg';
import ecommerceStoreImg from '@/assets/ecommerce-store.jpg';
import landingPageImg from '@/assets/landing-page.jpg';
import marketingMastermindImg from '@/assets/marketing-mastermind.jpg';
import businessCoachingImg from '@/assets/business-coaching.jpg';
import emailWorkflowImg from '@/assets/email-workflow.jpg';
import websiteAutoSystemsImg from '@/assets/website-auto-systems.jpg';
import aiChatbotImg from '@/assets/ai-chatbot.jpg';
import leadQualificationImg from '@/assets/lead-qualification.jpg';
import workflowAutomationImg from '@/assets/workflow-automation.jpg';

const Index = () => {
  console.log('Index component loading...');
  // Portfolio data for each section
  const portfolioSections = [
    {
      id: 'content-creation',
      title: 'Content Creation',
      subtitle: 'Premium content that captures attention and drives engagement across all digital platforms.',
      items: [
        {
          id: 1,
          title: 'Brand Storytelling Campaigns',
          description: 'Compelling narratives that connect with your audience and build brand loyalty through authentic storytelling.',
          image: contentStorytellingImg,
          tags: ['Storytelling', 'Brand Identity', 'Visual Content']
        },
        {
          id: 2,
          title: 'Video Content Production',
          description: 'High-quality video content including promotional videos, tutorials, and brand documentaries.',
          image: videoProductionImg,
          tags: ['Video Production', 'Scriptwriting', 'Post-Production']
        },
        {
          id: 3,
          title: 'Blog & Article Writing',
          description: 'SEO-optimized content that establishes thought leadership and drives organic traffic.',
          image: blogWritingImg,
          tags: ['SEO Writing', 'Blog Posts', 'Thought Leadership']
        },
        {
          id: 4,
          title: 'Social Media Content',
          description: 'Engaging posts, stories, and multimedia content tailored for each social platform.',
          image: socialStrategyImg,
          tags: ['Social Posts', 'Stories', 'Multimedia']
        },
        {
          id: 5,
          title: 'Email Marketing Content',
          description: 'Persuasive email campaigns that nurture leads and drive conversions.',
          image: emailWorkflowImg,
          tags: ['Email Campaigns', 'Newsletters', 'Automation']
        }
      ]
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      subtitle: 'Strategic social media campaigns that build communities and drive business growth.',
      items: [
        {
          id: 1,
          title: 'Platform Strategy Development',
          description: 'Comprehensive social media strategies tailored to your brand and target audience.',
          image: socialStrategyImg,
          tags: ['Strategy', 'Platform Optimization', 'Audience Research']
        },
        {
          id: 2,
          title: 'Community Management',
          description: 'Active community engagement, moderation, and relationship building with your audience.',
          image: communityManagementImg,
          tags: ['Community Building', 'Engagement', 'Customer Service']
        },
        {
          id: 3,
          title: 'Influencer Partnerships',
          description: 'Strategic influencer collaborations to expand reach and build brand credibility.',
          image: brandAwarenessImg,
          tags: ['Influencer Marketing', 'Partnerships', 'Brand Collaborations']
        },
        {
          id: 4,
          title: 'Social Media Analytics',
          description: 'Data-driven insights and reporting to optimize social media performance.',
          image: socialAnalyticsImg,
          tags: ['Analytics', 'Reporting', 'Performance Optimization']
        },
        {
          id: 5,
          title: 'Paid Social Campaigns',
          description: 'Targeted advertising campaigns across social platforms for maximum ROI.',
          image: paidSocialImg,
          tags: ['Paid Advertising', 'Targeting', 'ROI Optimization']
        }
      ]
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      subtitle: 'Professional video editing services that transform raw footage into compelling visual stories.',
      items: [
        {
          id: 1,
          title: 'Corporate Video Production',
          description: 'Professional corporate videos including company profiles, testimonials, and presentations.',
          image: corporateVideoImg,
          tags: ['Corporate Videos', 'Testimonials', 'Presentations']
        },
        {
          id: 2,
          title: 'Social Media Video Content',
          description: 'Engaging short-form videos optimized for social media platforms and viral potential.',
          image: shortFormVideoImg,
          tags: ['Short-form Content', 'Social Videos', 'Viral Content']
        },
        {
          id: 3,
          title: 'Educational Content',
          description: 'Tutorial videos, online courses, and educational content with professional editing.',
          image: educationalVideoImg,
          tags: ['Tutorials', 'Educational', 'Online Courses']
        },
        {
          id: 4,
          title: 'Product Demonstrations',
          description: 'Compelling product videos that showcase features, benefits, and use cases.',
          image: productDemoImg,
          tags: ['Product Videos', 'Demonstrations', 'Marketing']
        },
        {
          id: 5,
          title: 'Event Highlights',
          description: 'Event coverage, highlights reels, and promotional videos for conferences and gatherings.',
          image: videoProductionImg,
          tags: ['Event Coverage', 'Highlights', 'Promotional']
        }
      ]
    },
    {
      id: 'facebook-ads',
      title: 'Facebook Ads',
      subtitle: 'High-converting Facebook advertising campaigns that maximize your return on ad spend.',
      items: [
        {
          id: 1,
          title: 'Lead Generation Campaigns',
          description: 'Targeted campaigns designed to capture high-quality leads for your business.',
          image: facebookCampaignImg,
          tags: ['Lead Generation', 'Lead Magnets', 'Conversion Optimization']
        },
        {
          id: 2,
          title: 'E-commerce Sales Campaigns',
          description: 'Product-focused campaigns that drive online sales and revenue growth.',
          image: ecommerceFacebookImg,
          tags: ['E-commerce', 'Product Sales', 'Revenue Growth']
        },
        {
          id: 3,
          title: 'Brand Awareness Campaigns',
          description: 'Strategic campaigns to increase brand visibility and reach new audiences.',
          image: brandAwarenessImg,
          tags: ['Brand Awareness', 'Reach', 'Audience Expansion']
        },
        {
          id: 4,
          title: 'Retargeting Campaigns',
          description: 'Advanced retargeting strategies to convert website visitors into customers.',
          image: retargetingImg,
          tags: ['Retargeting', 'Conversion', 'Customer Journey']
        },
        {
          id: 5,
          title: 'Video Ad Campaigns',
          description: 'Engaging video advertisements that capture attention and drive action.',
          image: shortFormVideoImg,
          tags: ['Video Ads', 'Engagement', 'Creative Strategy']
        }
      ]
    },
    {
      id: 'google-ads',
      title: 'Google Ads',
      subtitle: 'Strategic Google Ads campaigns that capture high-intent traffic and drive qualified leads.',
      items: [
        {
          id: 1,
          title: 'Search Campaigns',
          description: 'Keyword-targeted search campaigns that capture users actively looking for your services.',
          image: googleSearchImg,
          tags: ['Search Ads', 'Keyword Research', 'Intent Targeting']
        },
        {
          id: 2,
          title: 'Display Campaigns',
          description: 'Visual advertising campaigns across Google\'s display network to increase brand visibility.',
          image: googleDisplayImg,
          tags: ['Display Ads', 'Visual Advertising', 'Brand Visibility']
        },
        {
          id: 3,
          title: 'Shopping Campaigns',
          description: 'Product-focused campaigns that showcase your inventory directly in search results.',
          image: ecommerceStoreImg,
          tags: ['Shopping Ads', 'Product Listings', 'E-commerce']
        },
        {
          id: 4,
          title: 'YouTube Advertising',
          description: 'Video advertising campaigns on YouTube to reach your audience with compelling content.',
          image: youtubeAdsImg,
          tags: ['YouTube Ads', 'Video Marketing', 'Audience Targeting']
        },
        {
          id: 5,
          title: 'Local Campaigns',
          description: 'Location-based advertising to drive foot traffic and local business growth.',
          image: googleSearchImg,
          tags: ['Local Ads', 'Foot Traffic', 'Local Business']
        }
      ]
    },
    {
      id: 'website-creation',
      title: 'Website Creation',
      subtitle: 'Modern, responsive websites that convert visitors into customers and enhance your digital presence.',
      items: [
        {
          id: 1,
          title: 'Business Websites',
          description: 'Professional business websites with modern design and optimal user experience.',
          image: businessWebsiteImg,
          tags: ['Business Sites', 'Professional Design', 'User Experience']
        },
        {
          id: 2,
          title: 'E-commerce Platforms',
          description: 'Full-featured online stores with payment integration and inventory management.',
          image: ecommerceStoreImg,
          tags: ['E-commerce', 'Online Stores', 'Payment Integration']
        },
        {
          id: 3,
          title: 'Landing Pages',
          description: 'High-converting landing pages optimized for specific campaigns and conversions.',
          image: landingPageImg,
          tags: ['Landing Pages', 'Conversion Optimization', 'Campaign-specific']
        },
        {
          id: 4,
          title: 'Portfolio Websites',
          description: 'Stunning portfolio websites that showcase your work and attract new clients.',
          image: businessWebsiteImg,
          tags: ['Portfolio Sites', 'Creative Showcase', 'Client Attraction']
        },
        {
          id: 5,
          title: 'Mobile-First Design',
          description: 'Responsive websites optimized for mobile devices and all screen sizes.',
          image: businessWebsiteImg,
          tags: ['Mobile-First', 'Responsive Design', 'Cross-platform']
        }
      ]
    },
    {
      id: 'mastermind',
      title: 'Mastermind',
      subtitle: 'Exclusive mastermind groups and coaching programs for entrepreneurs and business leaders.',
      items: [
        {
          id: 1,
          title: 'Digital Marketing Mastermind',
          description: 'Intensive mastermind program focused on advanced digital marketing strategies.',
          image: marketingMastermindImg,
          tags: ['Digital Marketing', 'Strategy', 'Advanced Techniques']
        },
        {
          id: 2,
          title: 'Business Growth Coaching',
          description: 'One-on-one coaching sessions to accelerate business growth and overcome challenges.',
          image: businessCoachingImg,
          tags: ['Business Growth', 'Coaching', 'Strategy Development']
        },
        {
          id: 3,
          title: 'Automation Workshops',
          description: 'Hands-on workshops teaching business automation and efficiency optimization.',
          image: workflowAutomationImg,
          tags: ['Automation', 'Workshops', 'Efficiency']
        },
        {
          id: 4,
          title: 'Entrepreneurship Mentoring',
          description: 'Mentoring programs for aspiring entrepreneurs and startup founders.',
          image: businessCoachingImg,
          tags: ['Entrepreneurship', 'Mentoring', 'Startups']
        },
        {
          id: 5,
          title: 'Group Mastermind Sessions',
          description: 'Collaborative mastermind sessions with like-minded business professionals.',
          image: marketingMastermindImg,
          tags: ['Group Sessions', 'Collaboration', 'Networking']
        }
      ]
    },
    {
      id: 'email-automation',
      title: 'Email Automation',
      subtitle: 'Sophisticated email marketing automation that nurtures leads and drives customer loyalty.',
      items: [
        {
          id: 1,
          title: 'Welcome Series Automation',
          description: 'Automated welcome sequences that introduce new subscribers to your brand.',
          image: emailWorkflowImg,
          tags: ['Welcome Series', 'Onboarding', 'Brand Introduction']
        },
        {
          id: 2,
          title: 'Drip Campaign Setup',
          description: 'Educational drip campaigns that nurture leads through the sales funnel.',
          image: emailWorkflowImg,
          tags: ['Drip Campaigns', 'Lead Nurturing', 'Sales Funnel']
        },
        {
          id: 3,
          title: 'E-commerce Automation',
          description: 'Automated emails for cart abandonment, product recommendations, and follow-ups.',
          image: ecommerceFacebookImg,
          tags: ['E-commerce', 'Cart Recovery', 'Product Recommendations']
        },
        {
          id: 4,
          title: 'Behavioral Triggers',
          description: 'Trigger-based emails that respond to customer actions and behaviors.',
          image: workflowAutomationImg,
          tags: ['Behavioral Triggers', 'Customer Actions', 'Personalization']
        },
        {
          id: 5,
          title: 'Re-engagement Campaigns',
          description: 'Automated campaigns to win back inactive subscribers and customers.',
          image: retargetingImg,
          tags: ['Re-engagement', 'Win-back', 'Customer Retention']
        }
      ]
    },
    {
      id: 'website-automations',
      title: 'Website Automations',
      subtitle: 'Intelligent website automation that enhances user experience and operational efficiency.',
      items: [
        {
          id: 1,
          title: 'Lead Capture Automation',
          description: 'Automated systems to capture and process website leads effectively.',
          image: leadQualificationImg,
          tags: ['Lead Capture', 'Form Automation', 'CRM Integration']
        },
        {
          id: 2,
          title: 'Customer Support Automation',
          description: 'Automated customer support systems including FAQ bots and ticket routing.',
          image: aiChatbotImg,
          tags: ['Customer Support', 'Help Desk', 'Ticket Routing']
        },
        {
          id: 3,
          title: 'Booking & Scheduling',
          description: 'Automated booking systems for appointments, consultations, and services.',
          image: businessCoachingImg,
          tags: ['Booking Systems', 'Scheduling', 'Appointment Management']
        },
        {
          id: 4,
          title: 'Payment Processing',
          description: 'Automated payment systems with invoicing and subscription management.',
          image: ecommerceStoreImg,
          tags: ['Payment Processing', 'Invoicing', 'Subscriptions']
        },
        {
          id: 5,
          title: 'Content Personalization',
          description: 'Dynamic content delivery based on user behavior and preferences.',
          image: websiteAutoSystemsImg,
          tags: ['Personalization', 'Dynamic Content', 'User Experience']
        }
      ]
    },
    {
      id: 'chatbots',
      title: 'Chatbots',
      subtitle: 'AI-powered chatbots that provide instant customer support and drive conversions 24/7.',
      items: [
        {
          id: 1,
          title: 'Customer Service Bots',
          description: 'Intelligent chatbots that handle common customer inquiries and support requests.',
          image: aiChatbotImg,
          tags: ['Customer Service', 'Support Automation', 'AI Responses']
        },
        {
          id: 2,
          title: 'Lead Qualification Bots',
          description: 'Automated lead qualification through interactive conversations and form collection.',
          image: leadQualificationImg,
          tags: ['Lead Qualification', 'Conversation Flows', 'Data Collection']
        },
        {
          id: 3,
          title: 'E-commerce Shopping Bots',
          description: 'Shopping assistants that guide customers through product selection and purchase.',
          image: ecommerceFacebookImg,
          tags: ['Shopping Assistant', 'Product Guidance', 'Sales Support']
        },
        {
          id: 4,
          title: 'Appointment Booking Bots',
          description: 'Automated appointment scheduling and calendar management through chat interfaces.',
          image: businessCoachingImg,
          tags: ['Appointment Booking', 'Calendar Integration', 'Scheduling']
        },
        {
          id: 5,
          title: 'FAQ & Knowledge Bots',
          description: 'Knowledge base chatbots that provide instant answers to frequently asked questions.',
          image: aiChatbotImg,
          tags: ['FAQ Automation', 'Knowledge Base', 'Instant Answers']
        }
      ]
    },
    {
      id: 'make-automations',
      title: 'Make.com Automations',
      subtitle: 'Advanced business process automation using Make.com for seamless workflow integration.',
      items: [
        {
          id: 1,
          title: 'CRM Integration Workflows',
          description: 'Automated workflows that sync data between CRM systems and other business tools.',
          image: workflowAutomationImg,
          tags: ['CRM Integration', 'Data Sync', 'Workflow Automation']
        },
        {
          id: 2,
          title: 'Social Media Automation',
          description: 'Automated social media posting, engagement tracking, and content distribution.',
          image: socialStrategyImg,
          tags: ['Social Automation', 'Content Distribution', 'Engagement Tracking']
        },
        {
          id: 3,
          title: 'E-commerce Order Processing',
          description: 'End-to-end order processing automation from purchase to fulfillment.',
          image: ecommerceStoreImg,
          tags: ['Order Processing', 'E-commerce', 'Fulfillment Automation']
        },
        {
          id: 4,
          title: 'Data Collection & Analysis',
          description: 'Automated data collection, processing, and reporting from multiple sources.',
          image: socialAnalyticsImg,
          tags: ['Data Collection', 'Analytics', 'Automated Reporting']
        },
        {
          id: 5,
          title: 'Marketing Campaign Automation',
          description: 'Complex marketing automation workflows across multiple channels and platforms.',
          image: paidSocialImg,
          tags: ['Marketing Automation', 'Multi-channel', 'Campaign Management']
        }
      ]
    },
    {
      id: 'client-management',
      title: 'Client Management',
      subtitle: 'Comprehensive client relationship management systems that enhance customer satisfaction.',
      items: [
        {
          id: 1,
          title: 'CRM System Setup',
          description: 'Complete CRM system implementation and customization for optimal client management.',
          image: businessCoachingImg,
          tags: ['CRM Setup', 'System Implementation', 'Customization']
        },
        {
          id: 2,
          title: 'Client Onboarding Process',
          description: 'Streamlined onboarding workflows that ensure smooth client integration.',
          image: emailWorkflowImg,
          tags: ['Client Onboarding', 'Process Optimization', 'Integration']
        },
        {
          id: 3,
          title: 'Project Management Systems',
          description: 'Project tracking and management systems for transparent client collaboration.',
          image: workflowAutomationImg,
          tags: ['Project Management', 'Collaboration', 'Transparency']
        },
        {
          id: 4,
          title: 'Client Communication Tools',
          description: 'Automated communication systems for regular client updates and feedback.',
          image: aiChatbotImg,
          tags: ['Communication', 'Client Updates', 'Feedback Systems']
        },
        {
          id: 5,
          title: 'Performance Reporting',
          description: 'Automated performance reports and analytics for client transparency.',
          image: socialAnalyticsImg,
          tags: ['Performance Reports', 'Analytics', 'Client Transparency']
        }
      ]
    },
    {
      id: 'canva',
      title: 'Canva',
      subtitle: 'Professional graphic design and visual content creation using Canva\'s powerful platform.',
      items: [
        {
          id: 1,
          title: 'Brand Design Templates',
          description: 'Custom Canva templates that maintain brand consistency across all marketing materials.',
          image: contentStorytellingImg,
          tags: ['Brand Templates', 'Consistency', 'Design System']
        },
        {
          id: 2,
          title: 'Social Media Graphics',
          description: 'Eye-catching social media graphics optimized for each platform\'s requirements.',
          image: socialStrategyImg,
          tags: ['Social Graphics', 'Platform Optimization', 'Visual Content']
        },
        {
          id: 3,
          title: 'Marketing Collateral',
          description: 'Professional marketing materials including brochures, flyers, and presentations.',
          image: brandAwarenessImg,
          tags: ['Marketing Materials', 'Brochures', 'Presentations']
        },
        {
          id: 4,
          title: 'Infographic Design',
          description: 'Data-driven infographics that communicate complex information clearly.',
          image: socialAnalyticsImg,
          tags: ['Infographics', 'Data Visualization', 'Information Design']
        },
        {
          id: 5,
          title: 'Digital Asset Creation',
          description: 'Comprehensive digital asset libraries for consistent brand presentation.',
          image: businessWebsiteImg,
          tags: ['Digital Assets', 'Brand Library', 'Asset Management']
        }
      ]
    },
    {
      id: 'social-media-automation',
      title: 'Social Media Automation',
      subtitle: 'Streamlined social media automation that maintains engagement while saving time.',
      items: [
        {
          id: 1,
          title: 'Content Scheduling Automation',
          description: 'Automated content scheduling across multiple social media platforms.',
image: paidSocialImg,
          tags: ['Cross-platform', 'Integration', 'Workflow Automation']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      
      {/* Portfolio Sections */}
      {portfolioSections.map((section) => (
        <div key={section.id} id={section.id}>
          <PortfolioSection
            title={section.title}
            subtitle={section.subtitle}
            items={section.items}
          />
        </div>
      ))}
      
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 lg:px-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-display font-bold text-luxury mb-4">
              Mani Vasagam
            </h3>
            <p className="text-muted-foreground mb-6">
              Digital Marketing & Automation Expert
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div>© 2024 Mani Vasagam. All rights reserved.</div>
              <div className="hidden md:block">•</div>
              <div>Premium Digital Solutions</div>
              <div className="hidden md:block">•</div>
              <div>Available for Projects</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;