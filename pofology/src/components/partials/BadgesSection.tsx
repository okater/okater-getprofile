import SectionTitle from '@/components/shared/SectionTitle';
import Image from 'next/image';

const BadgesSection = ({ showTitle = true }: { showTitle?: boolean }) => {
  const badges = [
    {
      src: '/images/badges/sf_b2c_architect.webp',
      alt: 'Certified B2C Commerce Architect'
    },
    {
      src: '/images/badges/sf_b2c_developer.webp',
      alt: 'Certified B2C Commerce Developer'
    },
    {
      src: '/images/badges/agentforce_legend.webp',
      alt: 'Agentforce Legend 2025'
    },
    {
      src: '/images/badges/sf_agentforce.webp',
      alt: 'Certified Agentforce Specialist'
    },
    {
      src: '/images/badges/sf_js_developer.webp',
      alt: 'Certified JavaScript Developer'
    },
    {
      src: '/images/badges/sf_einstein_accredited.webp',
      alt: 'Accredited Commerce Cloud Einstein'
    },
    {
      src: '/images/badges/sf_platform_foundations.webp',
      alt: 'Salesforce Platform Foundations'
    },
    {
      src: '/images/badges/sf_ai_associate.webp',
      alt: 'Certified AI Associate'
    },
    {
      src: '/images/badges/shopify-headless.webp',
      alt: 'Headless at Shopify for Developers'
    },
    {
      src: '/images/badges/shopify_dev_fundamentals.webp',
      alt: 'Shopify Development Fundamentals'
    }
  ];

  return (
    <>
      {showTitle && <SectionTitle>Badges</SectionTitle>}
      
      {/* Mobile Carousel */}
      <div className="mt-10 md:hidden">
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-4" style={{ width: `${badges.length * 160}px` }}>
            {badges.map((badge, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center p-4 transition-transform hover:scale-105" style={{ width: '150px' }}>
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={120}
                  height={120}
                  className="h-auto w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="mt-10 hidden md:grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-2">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center justify-center p-4 transition-transform hover:scale-105">
            <Image
              src={badge.src}
              alt={badge.alt}
              width={120}
              height={120}
              className="h-auto w-auto"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BadgesSection;