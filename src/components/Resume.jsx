import { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import { FadeIn } from "./FadeIn";

const Resume = () => {
  const [activeSection, setActiveSection] = useState('education');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-gray-700">
      <FadeIn>
        <div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <li
              tabIndex={0}
              onClick={() => handleSectionChange('education')}
              onKeyPress={(e) => e.key === 'Enter' && handleSectionChange('education')}
              className={`${
                activeSection === 'education' ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
            >
              Education
            </li>
            <li
              tabIndex={0}
              onClick={() => handleSectionChange('skills')}
              onKeyPress={(e) => e.key === 'Enter' && handleSectionChange('skills')}
              className={`${
                activeSection === 'skills' ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
            >
              Professional Skills
            </li>
            <li
              tabIndex={0}
              onClick={() => handleSectionChange('experience')}
              onKeyPress={(e) => e.key === 'Enter' && handleSectionChange('experience')}
              className={`${
                activeSection === 'experience' ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
            >
              Experience
            </li>
          </ul>
        </div>
        {activeSection === 'education' && <Education />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'experience' && <Experience />}
      </FadeIn>
    </section>
  );
};

export default Resume;
