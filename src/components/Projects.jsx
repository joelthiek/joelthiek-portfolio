import Title from "./Title";
import ProjectsCard from "./ProjectCard"
import { employeeManager, financeFlow, visionBoard } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id='projects'
      className='w-full py-20 border-b-[1px] border-b-gray-700'
    >
      <FadeIn>
        <div className='flex justify-center items-center text-center'>
          <Title
            title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK' des='Collaborative Projects'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
          <ProjectsCard
            title='Finance Tracker'
            description='Finance Tracker is a web app for easy financial management. Built with HTML, CSS, and JavaScript, it features dashboards, expense tracking, and data visualizations to help users stay organized.'
            src={financeFlow}
            tech_stack='HTML, CSS, JavaScript'
            githubLink='https://github.com/joelthiek/finance_tracker'
            liveProject='https://leoj-finance-tracker.netlify.app'
          />
          <ProjectsCard
            title='Vision Board'
            description='An interactive digital whiteboard for streamlined remote brainstorming and planning. It offers intuitive tools like sticky notes, drawing options, and canvas management features to enhance productivity.'
            src={visionBoard}
            tech_stack='HTML, CSS, JavaScript, Firebase'
            githubLink='https://github.com/joelthiek/vision_board'
            liveProject='https://leojvisionboard.netlify.app'
          />
        </div>
      </FadeIn>
      <FadeIn>
        <div className='flex justify-center items-center text-center mt-10'>
          <Title
            title=''
            des='Personal Projects'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
          <ProjectsCard
            title='Employees Manager'
            description='Employees Manager is a user-friendly app for efficient employee management, enabling you to add, update, and delete employee records, with built-in expenditure tracking through visual graphs for insightful analysis. Ideal for streamlined team oversight and budget management.'
            src={employeeManager}
            tech_stack='React, Firebase, Chakra UI'
            githubLink='https://github.com/joelthiek/employeesManager'
            liveProject='https://leojemployeemanager.netlify.app'
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
