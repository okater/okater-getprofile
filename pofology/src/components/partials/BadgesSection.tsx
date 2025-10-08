import SectionTitle from '@/components/shared/SectionTitle';
import Image from "next/legacy/image";

const CertificationsSection = () => {
  return (
    <>
      <SectionTitle>Badges</SectionTitle>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
        <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
          <Image
            src="/images/badges/sf_b2c_architect.webp"
            alt="Certified B2C Commerce Architect"
            width={150}
            height={150}
            className="h-auto w-auto"
          />
        </div>
        <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
          <Image
            src="/images/badges/sf_b2c_developer.webp"
            alt="Certified B2C Commerce Developer"
            width={150}
            height={150}
            className="h-auto w-auto"
          />
        </div>
        <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
          <Image
            src="/images/badges/agentforce_legend.webp"
            alt="Agentforce Legend 2025"
            width={150}
            height={150}
            className="h-auto w-auto"
          />
        </div>
        <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
          <Image
            src="/images/badges/sf_agentforce.webp"
            alt="Certified Agentforce Specialist"
            width={150}
            height={150}
            className="h-auto w-auto"
          />
        </div>
        <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
          <Image
            src="/images/badges/sf_js_developer.webp"
            alt="Certified JavaScript Developer"
            width={150}
            height={150}
            className="h-auto w-auto"
          />
        </div>
        <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
          <Image
            src="/images/badges/sf_einstein_accredited.webp"
            alt="Accredited Commerce Cloud Einstein"
            width={150}
            height={150}
            className="h-auto w-auto"
          />
        </div>
        <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
          <Image
            src="/images/badges/sf_platform_foundations.webp"
            alt="Salesforce Platform Foundations"
            width={150}
            height={150}
            className="h-auto w-auto"
          />
        </div>
        <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
          <Image
            src="/images/badges/sf_ai_associate.webp"
            alt="Certified AI Associate"
            width={150}
            height={150}
            className="h-auto w-auto"
          />
        </div>
        <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
          <Image
            src="/images/badges/shopify-headless.webp"
            alt="Headless at Shopify for Developers"
            width={150}
            height={150}
            className="h-auto w-auto"
          />
        </div>
        <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
          <Image
            src="/images/badges/shopify_dev_fundamentals.webp"
            alt="Shopify Development Fundamentals"
            width={150}
            height={150}
            className="h-auto w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default CertificationsSection;