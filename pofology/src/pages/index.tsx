import AboutSection from '@/components/partials/AboutSection';
import BlogSection from '@/components/partials/BlogSection';
import BadgesSection from '@/components/partials/BadgesSection';
import BrandsSection from '@/components/partials/BrandsSection';
import CertificationsSection from '@/components/partials/CertificationsSection';
import ContactSection from '@/components/partials/ContactSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import EducationSection from '@/components/partials/EducationSection';
import HeroSection from '@/components/partials/HeroSection';
import RecentWorkSection from '@/components/partials/RecentWorkSection';
import ServiceSection from '@/components/partials/ServiceSection';
import TestimonialSection from '@/components/partials/TestimonialSection';
import AppLayout from '@/layouts/AppLayout';
import { api } from '@/lib/api';
import type { GetServerSideProps, NextPage } from 'next';

// type Props = {
//   experiences: ;
// }

const Home: NextPage = () => {
  return (
    <AppLayout 
      title="Oleksandr Katerynchuk - Salesforce Commerce Cloud Tech Lead & Architect"
      description="Experienced Salesforce Commerce Cloud Tech Lead with 8+ years in e-commerce development. Certified B2C Commerce Architect & Developer. Specializing in SFCC, JavaScript, and enterprise e-commerce solutions. Available for consulting projects."
      keywords="Salesforce Commerce Cloud Tech Lead, SFCC Architect, B2C Commerce Developer, JavaScript Expert, E-commerce Consultant, Salesforce Certified, Commerce Cloud Einstein, Agentforce Specialist, Technical Leadership, Software Architecture, Under Armour, Hot Topic, Shoe Carnival"
      canonical="/"
    >
      <HeroSection />
      <section className="container pt-20 pb-10">
        <AboutSection />
      </section>
      
      {/* Mobile Layout - Badges shown separately */}
      <section className="container py-8 md:hidden">
        <BadgesSection />
      </section>

      {/* Desktop Layout - Experience/Education in left column, Badges in right column */}
      <section className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Experience and Education */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <ExperienceSection />
            </div>
            <div className="pt-8">
              <EducationSection />
            </div>
          </div>
          
          {/* Right Column - Badges (Desktop only) */}
          <div className="hidden md:block">
            <BadgesSection showTitle={true} />
          </div>
        </div>
      </section>
      <section className="container py-8">
        <TestimonialSection />
      </section>
      <section className="container py-8">
        <BrandsSection />
      </section>
      {/* <section className="container py-8">
        <ServiceSection />
      </section>
      <section className="container py-8">
        <RecentWorkSection />
      </section> */}
      <section className="container py-8">
        <CertificationsSection />
      </section>
      {/* <section className="container py-8">
        <BlogSection />
      </section>
      <section className="container py-8">
        <ContactSection />
      </section>
       */}
    </AppLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({}) => {
//   const getExperiences = api.get('/experiences').then((res) => res.data.data);
//   const getEducations = api.get('/educations').then((res) => res.data.data);
//   const profile = api.get('/profile').then((res) => res.data.data);
//   const result = await Promise.all([getExperiences, getEducations, profile]);
//   return {
//     props: {
//       experiences: result[0],
//       educations: result[1],
//       profile: result[2],
//     },
//   };
// };

export default Home;
