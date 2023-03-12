import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import {SectionWrapper} from "../hoc"
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#2b6f80] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div>
        <p className="text-[#68b8ed] font-bold text-[25px]">Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variant={fadeIn("", "", 0.1, 1)}
        className="mt-4"
      >
        I am a highly curious and passionate individual with a deep interest in science and technology. I am always eager to learn more about the latest advancements and developments in these fields, and am constantly seeking new ways to apply this knowledge to improve the world around me.
        My passion for science and technology also makes me a valuable team member, I am a creative thinker and able to generate new ideas. I am constantly looking for ways to use the latest technologies to improve processes and make things more efficient. I am always looking to learn something new and challenging myself.
      </motion.p>
      <div className="mt-20 flex flex-wrap text-[#68b8ed] gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
   
  );
};

export default SectionWrapper (About, "about")