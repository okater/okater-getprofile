import SectionTitle from '@/components/shared/SectionTitle';
import Image from 'next/image';
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { certifications } from '@/data/certifications';

const CertificationsSection = ({ showTitle = true }: { showTitle?: boolean }) => {
  const [autoplay, setAutoplay] = useState(true);

  const certificationSettings: Settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: autoplay ? 1 : 2,
    autoplay: autoplay,
    arrows: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    onSwipe: () => setAutoplay(false),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <>
      {showTitle && <SectionTitle>Certifications</SectionTitle>}
      
      <div className="mt-10">
        <div onMouseDown={() => setAutoplay(false)}>
          <Slider {...certificationSettings}>
            {certifications.map((cert, index) => (
              <div key={index} className="px-4 mb-6">
                <div className="flex justify-center">
                  <div className="mx-auto">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={500}
                      height={500}
                      className="w-auto object-contain shadow-lg md:h-[320px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CertificationsSection;