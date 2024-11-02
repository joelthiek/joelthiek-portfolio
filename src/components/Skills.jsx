import { motion } from "framer-motion"

const skillsData = [
  { name: "React", percentage: 65 },
  { name: "JavaScript", percentage: 60 },
  { name: "Tailwind", percentage: 60 },
  { name: "HTML 5", percentage: 70 },
  { name: "CSS3", percentage: 60 },
  { name: "Python", percentage: 50 },
  { name: "Chakra UI", percentage: 60 },
]

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      aria-labelledby='skills-heading'
    >
      <div className='w-full'>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px] uppercase'>
            Features
          </p>
          <h2 id='skills-heading' className='text-3xl md:text-4xl font-bold'>
            Development Skill
          </h2>
        </div>
        <div className='grid grid-cols-2 gap-8'>
          {skillsData.map((skill) => (
            <div className='overflow-x-hidden' key={skill.name}>
              <p className='text-sm uppercase font-medium'>{skill.name}</p>
              <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ width: `${skill.percentage}%` }}
                  className='h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
                >
                  <span className='absolute -top-7 right-0'>
                    {skill.percentage}%
                  </span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
