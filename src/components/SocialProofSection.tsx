import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';

const logos = [
  { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', alt: 'Amazon Logo' },
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg', alt: 'Microsoft Logo' },
  { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', alt: 'IBM Logo' },
  { name: 'Accenture', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg', alt: 'Accenture Logo' },
  { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg', alt: 'Infosys Logo' },
  { name: 'Wipro', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg', alt: 'Wipro Logo' },
  { name: 'Capgemini', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg', alt: 'Capgemini Logo' },
  { name: 'TCS', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Tata_Consultancy_Services_old_logo.svg', alt: 'TCS Logo' },
  { name: 'Deloitte', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Deloitte_old_blue_logo.svg', alt: 'Deloitte Logo' }
];

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Candidates Hired At
          </h2>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Our alumni have successfully joined the world's leading tech companies.
          </p>
        </div>

        <div 
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <InfiniteSlider 
            className='flex items-center' 
            duration={80}
            gap={64}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`} 
                className="group flex-shrink-0 w-48 h-24 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center p-4 transition-all duration-300 hover:bg-white/15 hover:border-white/20"
                aria-label={logo.name}
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="h-8 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
