import React from 'react';
import styles from '@/styles/modules/HeroBackground.module.scss';
import {
  FiBarChart2,
  FiBell,
  FiCircle,
  FiCloud,
  FiCode,
  FiHexagon,
  FiPieChart,
  FiStar,
  FiTriangle,
} from 'react-icons/fi';
import { SiSalesforce } from 'react-icons/si';

const HeroBackground = () => {
  return (
    <>
      <FiBarChart2 size={30} className="absolute  top-60 left-10 hidden text-teal-500 sm:inline-block md:left-24" />
      <FiBell size={30} className="animate-bell  absolute top-28 right-2/3 hidden text-red-500 sm:inline-block" />
      <FiCode size={30} className="absolute  top-48 right-1/2 hidden animate-bounce text-indigo-500 sm:inline-block" />
      <FiPieChart
        size={30}
        className="animate-move  absolute bottom-10 right-20 hidden text-fuchsia-500 sm:inline-block md:right-48"
      />
      <FiStar size={30} className="absolute  top-36 right-10 hidden text-yellow-500 sm:inline-block md:right-24" />
      <FiTriangle
        size={30}
        className="animate-move-rotate  absolute top-1/3 right-1/4 hidden text-green-500 sm:inline-block"
      />
      <FiCloud size={30} className="absolute bottom-48  left-2/3 hidden animate-pulse text-blue-500 sm:inline-block" />
      <FiCircle
        size={30}
        className="absolute bottom-20  left-16 hidden animate-bounce text-amber-500 sm:inline-block md:left-40"
      />
      <FiHexagon size={30} className="absolute top-96 left-1/4 hidden animate-spin text-purple-500 sm:inline-block" />
      <ul className={styles.circles}>
        <li><SiSalesforce size={200} className="text-primary-300" /></li>
        <li><SiSalesforce size={75} className="text-purple-300" /></li>
        <li><SiSalesforce size={50} className="text-indigo-300" /></li>
        <li><SiSalesforce size={150} className="text-emerald-300" /></li>
        <li><SiSalesforce size={75} className="text-teal-300" /></li>
        <li><SiSalesforce size={130} className="text-pink-300" /></li>
        <li><SiSalesforce size={200} className="text-blue-300" /></li>
        <li><SiSalesforce size={63} className="text-orange-300" /></li>
        <li><SiSalesforce size={63} className="text-yellow-300" /></li>
        <li><SiSalesforce size={130} className="text-gray-200 dark:text-gray-700" /></li>
      </ul>
    </>
  );
};

export default HeroBackground;
