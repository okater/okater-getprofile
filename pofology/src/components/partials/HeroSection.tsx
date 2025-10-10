import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiLinkedin, FiGithub, FiCloud } from 'react-icons/fi';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import { useTyped } from '@/hooks/useTyped';

const HeroSection = () => {
  const typedRef = useTyped({
    strings: ['Architect', 'TechLead', 'Developer'],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
  });

  return (
    <header className="hero relative -mt-16 flex items-center justify-center" role="banner">
      <HeroBackground />
      <div className="flex flex-col items-center text-center">
        <div className="flex h-[188px] w-[188px] items-center justify-center overflow-hidden rounded-full border-8 border-primary-500">
          <Image 
            src="/images/avatar/man.webp" 
            width={180} 
            height={180} 
            alt="Oleksandr Katerynchuk - Salesforce Commerce Cloud Tech Lead"
            className="block"
            priority
          />
        </div>
        <h1 className="mt-4 text-3xl font-bold">Oleksandr Katerynchuk</h1>
        <h2 className="mt-2 flex gap-1">
          I'm a Salesforce Commerce Cloud
          <span ref={typedRef} className="text-primary-500 font-semibold"></span>
        </h2>
        <nav className="mt-4" aria-label="Social media links">
          <div className="flex gap-5">
            <Link
              href="https://www.linkedin.com/in/okater/"
              className="text-gray-700 transition-colors duration-150 hover:text-primary-500 p-2"
              aria-label="Visit Oleksandr Katerynchuk's LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer">
              <FiLinkedin size={25} aria-hidden="true" />
            </Link>
            <Link
              href="https://www.salesforce.com/trailblazer/okater/"
              className="text-gray-700 transition-colors duration-150 hover:text-primary-500 p-2"
              aria-label="Visit Oleksandr Katerynchuk's Salesforce Trailblazer profile"
              target="_blank"
              rel="noopener noreferrer">
              <FiCloud size={25} aria-hidden="true" />
            </Link>
            <Link
              href="https://www.github.com/okater/"
              className="text-gray-700 transition-colors duration-150 hover:text-primary-500 p-2"
              aria-label="Visit Oleksandr Katerynchuk's GitHub profile"
              target="_blank"
              rel="noopener noreferrer">
              <FiGithub size={25} aria-hidden="true" />
            </Link>
          </div>
        </nav>
        <Link 
          href="https://www.linkedin.com/in/okater/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Contact Oleksandr Katerynchuk for hiring opportunities">
          <Button className="mt-5 px-8">Hire Me</Button>
        </Link>
      </div>
      <div className="absolute bottom-0 flex flex-col items-center" role="presentation" aria-hidden="true">
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-700 dark:border-gray-300">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-700 dark:bg-gray-300" style={{ top: '6px' }}></div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
