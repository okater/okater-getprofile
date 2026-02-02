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
            I am a <strong>Commerce Cloud Success Architect at Salesforce</strong>, specializing in designing and championing complex architectural solutions for global enterprise clients. I bridge the gap between high-level business strategy and deep technical execution.
          </p>
          <p className="indent-3 leading-8">
            My expertise lies in the <strong>Salesforce B2C Commerce (Demandware)</strong> ecosystem, where I serve as a trusted advisor to <strong>Signature Success</strong> customers. I thrive on translating intricate client challenges into secure, high-performance, and scalable architectures - leveraging everything from legacy Script and Pipelines to modern <strong>Headless Commerce (PWA Kit)</strong> and <strong>Composable Storefronts</strong>.
          </p>
          <p className="indent-3 leading-8">
            Throughout my career, I have evolved from a hands-on developer to a strategic lead, consistently focusing on:
            <ul>
              <li><strong>Architectural Excellence:</strong> Designing robust data models and DevOps workflows that support multi-national, high-velocity commerce.</li>
              <li><strong>Performance Optimization:</strong> Ensuring enterprise-level storefronts operate at peak efficiency under the most demanding conditions.</li>
              <li><strong>Stakeholder Alignment:</strong> Communicating technical roadmaps effectively to audiences ranging from engineering teams to C-suite executives.</li>
            </ul>
          </p>
          <p className="indent-3 leading-8">
            I am passionate about the evolution of the Salesforce platform and dedicated to helping the world’s most ambitious brands unlock the full potential of their digital investments.
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
