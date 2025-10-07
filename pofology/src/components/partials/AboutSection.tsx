import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

import Image from 'next/image';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="">
        {/* Bio */}
        <div className="">
          <p className="indent-3 leading-8">
            Hi there! My name is Oleksandr Katerynchuk. I am a Salesforce B2C Commerce (SFCC) TechLead with extensive experience in e-commerce development.
          </p>
          <p className="indent-3 leading-8">
            I specialize in building scalable and efficient Salesforce Commerce Cloud <span className="nowrap">e-commerce</span> solutions using SFCC.
          </p>
          <p className="indent-3 leading-8">
            I have experience with PWA Kit, SFRA and SiteGenesis architectures. I worked on numerous projects for a very well-known brands. I did different kind of integrations with third-party systems, and performance optimization.
          </p>
          {/* <Button className="mt-5">Download CV</Button> */}
        </div>

        {/* Skills */}
        {/* <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Backend</h6>
              <p>85%</p>
            </div>
            <ProgressBar color="blue" progress={85} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Frontend</h6>
              <p>95%</p>
            </div>
            <ProgressBar color="amber" progress={95} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Mobile App</h6>
              <p>75%</p>
            </div>
            <ProgressBar color="rose" progress={75} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">UI/UX</h6>
              <p>90%</p>
            </div>
            <ProgressBar color="green" progress={80} />
          </div>
        </div> */}
      </div>

      {/* Certifications */}
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

export default AboutSection;
