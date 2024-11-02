import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'
    >
      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <h2 className='text-2xl md:text-3xl font-bold'>Education Quality</h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Full-Stack Development Course'
            subTitle='Masai School, Bangalore (Karnataka)'
            result='2024-04 / Present'
            des={[
              "Masai School is an intensive, hands-on coding program focused on software development skills in full-stack web development. Emphasizes problem-solving, collaboration, and real-world projects to prepare students for tech careers."
            ]} // Wrap string in an array
          />
          <ResumeCard
            title='Bachelor of Commerce'
            subTitle='Gurucharan College, Assam University (Assam)'
            result='2017-06 / 2022-04'
            des={[
              "Bachelor of Commerce program provided a comprehensive understanding of business and financial principles, including accounting, economics, management, and marketing.",
              "Developed analytical and problem-solving skills essential for strategic decision-making in diverse business environments."
            ]} // Array of strings
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
