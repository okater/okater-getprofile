import { educations } from '@/data/educations';
import styles from '@/styles/modules/ExperienceSection.module.scss';
import classNames from 'classnames';
import AcademicCap from '@/components/icons/AcademicCap';
import SectionTitle from '@/components/shared/SectionTitle';

const ExperienceSection = () => {
  return (
    <>
      <SectionTitle>Education</SectionTitle>
      <div className="py-15 mt-10 grid gap-8">
        {/* Education */}
        <div>
          <div className="rounded-2xl bg-white px-10 py-8 shadow-lg dark:bg-gray-700">
            <ol className={classNames(styles['education'], 'border-l border-gray-200 dark:border-gray-500')}>
              {educations.map((education, index) => (
                <li key={index} className={styles['education-item']}>
                  <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary-500 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-700">
                    <AcademicCap className="h-5" />
                  </span>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {education.startDate ? education.startDate + ' - ' : ''}{education.endDate}
                  </time>
                  <h3 className="mb-1 flex items-center text-lg font-semibold dark:text-gray-200">
                    {education.degree}
                  </h3>
                  <p className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    {education.school}
                  </p>
                  <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                    <ul>
                      {education.descriptions.map((description, index) => <li key={index}>{description}</li>)}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
