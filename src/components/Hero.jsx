import { motion } from "framer-motion";
import { styles } from "../styles";

import HeroImage from "./partials/HeroImage";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Punit Shinde</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I develop intuitive &
            <br className="sm:block hidden" />
            performant <span className="text-[#915EFF]">Web</span> & <span className="text-[#915EFF]">Mobile</span> apps.
            <br className="sm:block hidden" />
            with a passion for sleek user interfaces.
          </p>
          <button
            onClick={() => (window.location.href = "https://www.youtube.com/")}
            className="mt-8 px-3 py-2 rounded-md bg-[#915EFF] font-semibold hover:bg-transparent hover:border-2"
          >
            Get My Resume
          </button>
        </div>
      </div>

      <HeroImage />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
