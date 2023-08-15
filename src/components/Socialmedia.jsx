import React, { Component } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { harshitPic } from "../constants";

const PhotoCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-[220px] green-pink-gradient p-[1px] rounded-[20px] shadown-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px]"
        >
          <img src={icon} alt={title} className="w-46 h-46 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Socialmedia = () => {
  return (
    <>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Where else to find me </p>
          <h2 className={`${styles.sectionHeadText}`}>Social Media</h2>
        </motion.div>
        <div className="py-6 flex flex-wrap">
          <p className="">
            <a
              className="px-4 blue-text-gradient"
              href="https://www.linkedin.com/in/hrshit1309/"
              target="_blank"
            >
              LinkedIn{" "}
            </a>{" "}
            |
            <a
              className="px-4 blue-text-gradient"
              href="https://github.com/Harshit-1309"
              target="_blank"
            >
              GitHub{" "}
            </a>{" "}
            |
            <a
              className="px-4 blue-text-gradient"
              href="https://www.facebook.com/harshit.ranjansingh.3"
              target="_blank"
            >
              {" "}
              Facebook{" "}
            </a>{" "}
            |
            <a
              className="px-4 blue-text-gradient"
              href="https://instagram.com/hrshit_1309?igshid=ZDc4ODBmNjlmNQ=="
              target="_blank"
            >
              {" "}
              Instagram{" "}
            </a>{" "}
            |
            <a
              className="px-4 blue-text-gradient"
              href="https://twitter.com/hrshit_1605?t=WH1tDnMG5h5iQPV-PmkAsA&s=09"
              target="_blank"
            >
              {" "}
              Twitter
            </a>{" "}
            |
            <a
              className="px-4 blue-text-gradient"
              href="https://www.hackerrank.com/harshitranjan181"
              target="_blank"
            >
              {" "}
              HackerRank
            </a>
            |
            <a
              className="px-4 blue-text-gradient"
              href="https://www.threads.net/@hrshit_1309"
              target="_blank"
            >
              {" "}
              Threads
            </a>
          </p>
        </div>
        <div>
          <div className="mt-20 flex flex-wrap gap-2">
            {harshitPic.map((harsh, index) => (
              <PhotoCard key={harsh.title} index={index} {...harsh} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Socialmedia, "");
