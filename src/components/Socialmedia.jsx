import React from "react";
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
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] min-h-[280px] flex justify-center items-center flex-col overflow-hidden"
        >
          <img
            src={icon}
            alt={title || "Harshit"}
            className="w-full h-[280px] object-cover rounded-[20px]"
          />
          {title && (
            <h3 className="text-white text-[20px] font-bold text-center mt-2 px-4 pb-4">
              {title}
            </h3>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};


const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hrshit1309/",
  },
  {
    name: "GitHub",
    url: "https://github.com/Harshit-1309",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/harshit.ranjansingh.3",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/hrshit_1309?igshid=ZDc4ODBmNjlmNQ==",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/hrshit_1605?t=WH1tDnMG5h5iQPV-PmkAsA&s=09",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/harshitranjan181",
  },
  {
    name: "Threads",
    url: "https://www.threads.net/@hrshit_1309",
  },
];

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

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black-100 py-3 px-6 rounded-xl border border-white/10 hover:border-secondary transition-all duration-300 text-white font-medium shadow-md shadow-primary"
            >
              <span className="blue-text-gradient">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-7">
          {harshitPic.map((harsh, index) => (
            <PhotoCard key={index} index={index} {...harsh} />
          ))}
        </div>
      </div>
    </>
  );
};


export default SectionWrapper(Socialmedia, "");
