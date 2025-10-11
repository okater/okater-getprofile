import dynamic from 'next/dynamic';

// Lazy load non-critical components
export const TestimonialSection = dynamic(
  () => import('./partials/TestimonialSection'),
  {
    loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded"></div>,
    ssr: true,
  }
);

export const BrandsSection = dynamic(
  () => import('./partials/BrandsSection'),
  {
    loading: () => <div className="animate-pulse h-64 bg-gray-200 rounded"></div>,
    ssr: true,
  }
);

export const CertificationsSection = dynamic(
  () => import('./partials/CertificationsSection'),
  {
    loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded"></div>,
    ssr: true,
  }
);

export const BadgesSection = dynamic(
  () => import('./partials/BadgesSection'),
  {
    loading: () => <div className="animate-pulse h-64 bg-gray-200 rounded"></div>,
    ssr: true,
  }
);

// Critical components - load immediately
export { default as HeroSection } from './partials/HeroSection';
export { default as AboutSection } from './partials/AboutSection';
export { default as ExperienceSection } from './partials/ExperienceSection';
export { default as EducationSection } from './partials/EducationSection';