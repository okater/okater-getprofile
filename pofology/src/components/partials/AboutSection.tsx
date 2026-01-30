import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const AboutSection = () => {
  return (
    <>
      <SectionTitle level={2}>About Me</SectionTitle>

      <div className="">
        {/* Bio */}
        <div className="">
          <p className="indent-3 leading-8">
            Hi there! 👋 My name is Oleksandr Katerynchuk. I'm based in Chicago, IL 🏠
          </p>
          <p className="indent-3 leading-8">I am a Salesforce Commerce Cloud (SFCC / Agentforce Commerce) Success Architect with extensive experience in e-commerce development.
          </p>
          <p className="indent-3 leading-8">
            I specialize in building scalable and efficient Salesforce Commerce Cloud solutions.
          </p>
          <p className="indent-3 leading-8">
            I have experience with PWA Kit, SFRA and SiteGenesis architectures and worked on numerous projects for very well-known brands. I did different kind of integrations with third-party systems, and performance optimization.
          </p>
          {/* <Button className="mt-5">Download CV</Button> */}
        </div>

        {/* Skills */}
        {/* <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h4 className="font-semibold">Backend</h4>
              <p>85%</p>
            </div>
            <ProgressBar color="blue" progress={85} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h4 className="font-semibold">Frontend</h4>
              <p>95%</p>
            </div>
            <ProgressBar color="amber" progress={95} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h4 className="font-semibold">Mobile App</h4>
              <p>75%</p>
            </div>
            <ProgressBar color="rose" progress={75} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h4 className="font-semibold">UI/UX</h4>
              <p>90%</p>
            </div>
            <ProgressBar color="green" progress={80} />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AboutSection;
