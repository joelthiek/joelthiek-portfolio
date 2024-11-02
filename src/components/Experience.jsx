import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'
    >
      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <h2 className='text-3xl md:text-4xl font-bold'>Job Experience</h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Assistant Teacher'
            subTitle='Grace English School, Boro-Arkap, Assam, India'
            result='2022-08 / 2023-02'
            des={[
              "Teaching: Instructed students from nursery to class 8 in various subjects.",
              "Administrative Support: Assisted the principal in organizing school activities and strategizing for future growth.",
              "Warden Duties: Occasionally took on responsibilities as a warden.",
              "Exam Preparation: Typed and prepared exam questions to ensure smooth assessment processes.",
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
