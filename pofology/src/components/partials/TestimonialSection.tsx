import { reviews } from '@/data/reviews';
import Image from 'next/image';
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import SectionTitle from '../shared/SectionTitle';

const Testimonial = () => {
  const [autoplay, setAutoplay] = useState(true);

  const reviewSettings: Settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
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
          arrows: false
        }
      }
    ]
  };
  return (
    <>
      <SectionTitle>Reviews</SectionTitle>
      <div className="mt-16">
        <div onMouseDown={() => setAutoplay(false)}>
          <Slider {...reviewSettings}>
            {reviews.map((review, index) => (
              <div className="mb-6 px-4" key={index}>
                <div className="flex flex-col items-center">
                  <div className="h-24 w-24 rounded-full">
                    <Image src={review.author.imageUrl} height={100} width={100} alt={review.author.name} className="object-cover rounded-full" />
                  </div>
                  <h6 className="mt-3 text-lg font-semibold">{review.author.name}</h6>
                  <p className="text-sm text-gray-400 dark:text-gray-200">
                    {review.author.designation} at {review.author.company}.
                  </p>
                  <div className="mt-6 max-w-2xl mx-auto rounded-2xl bg-white p-8 text-gray-500 shadow-lg dark:bg-gray-700 dark:text-gray-200">
                    {review.comment}
                    {review.urlLink && review.urlTitle && (
                      <div className="mt-4">
                        <a
                          href={review.urlLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        >
                          {review.urlTitle}
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
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

export default Testimonial;
