import SectionTitle from '@/components/shared/SectionTitle';
import Image from 'next/image';
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';

const CertificationsSection = ({ showTitle = true }: { showTitle?: boolean }) => {
  const [autoplay, setAutoplay] = useState(true);

  const certifications = [
    {
      src: '/images/certifications/cert_sf_b2c_architect.webp',
      alt: 'Salesforce B2C Commerce Architect Certification'
    },
    {
      src: '/images/certifications/cert_sf_b2c_developer.webp',
      alt: 'Salesforce B2C Commerce Developer Certification'
    },
    {
      src: '/images/certifications/cert_agentforce_specialist.webp',
      alt: 'Salesforce Agentforce Specialist Certification'
    },
    {
      src: '/images/certifications/cert_sf_js_dev.webp',
      alt: 'Salesforce JavaScript Developer Certification'
    },
    {
      src: '/images/certifications/cert_cc_einstein.webp',
      alt: 'Commerce Cloud Einstein Certification'
    },
    {
      src: '/images/certifications/cert_sf_platform_foundations.webp',
      alt: 'Salesforce Platform Foundations Certification'
    },
    {
      src: '/images/certifications/cert_sf_ai_associate.webp',
      alt: 'Salesforce AI Associate Certification'
    }
  ];

  const certificationSettings: Settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
                      className="h-[350px] w-auto object-contain shadow-lg md:h-[320px]"
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