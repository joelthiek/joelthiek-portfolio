import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNodedotjs, SiLeetcode } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "MERN stack developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <FadeIn className='w-full lgl:w-1/2 flex flex-col gap-20'>
      <div className='flex flex-col gap-5'>
        <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
        <h1 className='text-6xl font-bold text-white'>
          Hi, I'm{" "}
          <span className='text-designColor capitalize'>Joel Thiek</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>
          a <span>{text}</span>
          <Cursor cursorStyle='|' cursorColor='#ff014f' />
        </h2>
        <p className='text-base font-bodyFont leading-6 tracking-wider'>
          Full-stack developer skilled in the MERN stack, creating user-focused,
          responsive web applications. Passionate about problem-solving and
          delivering visually engaging, efficient solutions across both frontend
          and backend.
        </p>
      </div>
      <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
          <div className='flex gap-4'>
            <a href='https://github.com/joelthiek' target='_blank' rel='noreferrer'>
              <span className='bannerIcon'>
                <FaGithub />
              </span>
            </a>
            <a
              href='https://www.linkedin.com/in/joel-thiek-8100b4287/'
              target='_blank' rel='noreferrer'
            >
              <span className='bannerIcon'>
                <FaLinkedinIn />
              </span>
            </a>
            <a href='https://leetcode.com/u/joelthiek/' target='_blank' rel='noreferrer'>
              <span className='bannerIcon'>
                <SiLeetcode />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>BEST SKILL ON</h2>
          <div className='flex gap-4'>
            <span className='bannerIcon'>
              <FaReact />
            </span>
            <span className='bannerIcon'>
              <SiNodedotjs />
            </span>
            <span className='bannerIcon'>
              <SiTailwindcss />
            </span>
            <span className='bannerIcon'>
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
