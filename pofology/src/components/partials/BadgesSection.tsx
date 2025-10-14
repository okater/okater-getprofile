import SectionTitle from '@/components/shared/SectionTitle';
import Image from 'next/image';
import React, { useState, useCallback, memo } from 'react';
import Slider, { Settings } from 'react-slick';
import { badges } from '@/data/badges';

const BadgesSection = memo(({ showTitle = true }: { showTitle?: boolean }) => {
  const [autoplay, setAutoplay] = useState(true);

  const handleAutoplayStop = useCallback(() => {
    setAutoplay(false);
  }, []);

  const badgesSettings: Settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 1200,
    speed: 1200,
    slidesToShow: 2,
    slidesToScroll: autoplay ? 1 : 2,
    autoplay: autoplay,
    arrows: false,
    pauseOnHover: true,
    onSwipe: handleAutoplayStop,
    lazyLoad: 'ondemand',
    useCSS: true,
    useTransform: true,
    accessibility: true,
    focusOnSelect: false,
    draggable: true,
    touchMove: true,
    swipeToSlide: true,
    waitForAnimate: false
  };

  return (
    <>
      {showTitle && <SectionTitle>Badges</SectionTitle>}
      
      {/* Mobile Carousel */}
      <div className="mt-10 md:hidden" role="region" aria-label="Professional badges carousel">
        <Slider {...badgesSettings}>
          {badges.map((badge, index) => (
            <div key={index} className="px-2">
              <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={120}
                  height={120}
                  className="h-auto w-auto"
                  loading="lazy"
                  quality={80}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="mt-10 h-0 md:h-auto overflow-hidden md:overflow-visible grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-2">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center justify-center p-4 transition-transform hover:scale-105">
            <Image
              src={badge.src}
              alt={badge.alt}
              width={120}
              height={120}
              className="h-auto w-auto"
              loading="lazy"
              quality={80}
            />
          </div>
        ))}
      </div>
    </>
  );
});

BadgesSection.displayName = 'BadgesSection';

export default BadgesSection;