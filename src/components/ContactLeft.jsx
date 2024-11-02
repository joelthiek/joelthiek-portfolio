import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../assets";
import { SiLeetcode } from "react-icons/si";

const ContactLeft = () => {
  return (
    <>
      <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
        <img
          className="w-full h-64 object-cover rounded-lg mb-2"
          src={contactImg}
          alt="Contact image of Joel Rokiemlo Thiek"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-white">Joel Rokiemlo Thiek</h3>
          <p className="text-lg font-normal text-gray-400">MERN Stack Developer</p>
          <p className="text-base text-gray-400 tracking-wide">
            Feel free to reach out via phone or email—I’m open to new opportunities and excited to discuss how my skills can contribute to your team!
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span className="text-lightText">+91 6901641391</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-lightText">joelrokiemlothiek@gmail.com</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
          <div className='flex gap-4'>
            <a href='https://github.com/joelthiek' target='_blank' rel="noopener noreferrer">
              <span className='bannerIcon'>
                <FaGithub />
              </span>
            </a>
            <a href='https://www.linkedin.com/in/joel-thiek-8100b4287/' target='_blank' rel="noopener noreferrer">
              <span className='bannerIcon'>
                <FaLinkedinIn />
              </span>
            </a>
            <a href='https://leetcode.com/u/joelthiek/' target='_blank' rel="noopener noreferrer">
              <span className='bannerIcon'>
                <SiLeetcode />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactLeft;
