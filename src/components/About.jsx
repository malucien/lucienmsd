import React from 'react'
import tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants/index';
import {fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({index, title, icon}) => {
  return(
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className="text-[#68b8ed]">Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variant={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary"
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

export default About