import SectionTitle from '@/components/shared/SectionTitle';
import Image from 'next/image';

const BrandsSection = ({ showTitle = true }: { showTitle?: boolean }) => {
  const brands = [
    {
      src: '/images/brands/logo_under_armour.webp',
      alt: 'Under Armour'
    },
    {
      src: '/images/brands/logo_shoe_carnival.webp',
      alt: 'Shoe Carnival'
    },
    {
      src: '/images/brands/logo_hot_topic.webp',
      alt: 'Hot Topic'
    },
    {
      src: '/images/brands/logo_boxlunch.webp',
      alt: 'BoxLunch'
    },
    {
      src: '/images/brands/logo_helzberg_diamonds.webp',
      alt: 'Helzberg Diamonds'
    },
    {
      src: '/images/brands/logo_joann_fabrics.webp',
      alt: 'Joann Fabrics'
    },
    {
      src: '/images/brands/logo_netgear.webp',
      alt: 'NetGear'
    },
    {
      src: '/images/brands/logo_casper.webp',
      alt: 'Casper'
    },
    {
      src: '/images/brands/logo_strivectin.webp',
      alt: 'StriVectin'
    },
    {
      src: '/images/brands/logo_roots.webp',
      alt: 'Roots'
    }
  ];

  return (
    <>
      {showTitle && <SectionTitle>Notable Clients</SectionTitle>}
      
      {/* Mobile Carousel - Two rows */}
      <div className="mt-10 md:hidden">
        <div className="overflow-x-auto">
          <div className="grid grid-rows-2 grid-flow-col gap-y-8 gap-x-4 pb-4" style={{ width: `${(brands.length / 2) * 140}px` }}>
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center p-2 transition-transform hover:scale-105" style={{ width: '130px', height: '100px' }}>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={80}
                  height={80}
                  className="h-auto w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Grid - Two rows of 5 brands each */}
      <div className="mt-10 hidden md:grid grid-cols-5 gap-6">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-center p-4 transition-transform hover:scale-105">
            <Image
              src={brand.src}
              alt={brand.alt}
              width={120}
              height={120}
              className="h-auto w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BrandsSection;