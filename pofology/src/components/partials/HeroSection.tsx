import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import { useTyped } from '@/hooks/useTyped';

const HeroSection = () => {
  const typedRef = useTyped({
    strings: ['Architect', 'Technical Lead', 'Developer'],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
  });

  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="flex h-[188px] w-[188px] items-center justify-center overflow-hidden rounded-full border-4 border-primary-500">
          <Image src="/images/avatar/man.webp" width={180} height={180} alt="avatar" className="block" />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Oleksandr Katerynchuk</h1>
        <div className="mt-2 flex gap-1">
          I'm a Salesforce Commerce Cloud
          <span ref={typedRef}></span>
        </div>
        <div className="mt-4  flex gap-5">
          <Link
            href="https://www.linkedin.com/in/okater/"
            className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
            <FiLinkedin size={25} />
          </Link>
          <Link
            href="https://www.github.com/okater/"
            className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
            <FiGithub size={25} />
          </Link>
        </div>
        <Button className="mt-5 px-8">Hire Me</Button>
      </div>
      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
