import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen ma-auto'>
      <div className={`{styles.paddingX} absolute insert-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] ml-12" />
          <div className="w-1 sm:h-80 h-40 violet-gradient ml-12"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-[#68b8ed]">Lucien</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>"I create innovative and user-friendly  <br className="sm:block hidden" /> websites and applications."</p>
        </div>
      </div>
      <ComputersCanvas/>

      <div className="absolute xs:bottom-10 buttom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#68b8ed] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-[#68b8ed]"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero