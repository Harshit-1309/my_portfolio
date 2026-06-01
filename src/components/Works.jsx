import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CARDS_PER_PAGE = 3;

/* ─── Project Card ─────────────────────────────────────────────── */
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    /* Own initial/animate so it doesn't depend on parent variant cascade */
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
      className="w-full"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

/* ─── Arrow Button ─────────────────────────────────────────────── */
const ArrowBtn = ({ direction, onClick, disabled }) => {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={isLeft ? "Previous projects" : "Next projects"}
      style={{
        transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
        opacity: disabled ? 0.25 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = "scale(1.12)";
          e.currentTarget.style.boxShadow = "0 0 18px 4px rgba(145,94,255,0.55)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 0 0px rgba(0,0,0,0)";
      }}
      className="flex-shrink-0 w-12 h-12 rounded-full bg-tertiary border border-[#915EFF] flex items-center justify-center z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#915EFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        {isLeft ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 18 15 12 9 6" />
        )}
      </svg>
    </button>
  );
};

/* ─── Dot Indicators ───────────────────────────────────────────── */
const Dots = ({ total, current, onDotClick }) => (
  <div className="flex gap-2 justify-center mt-8">
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onDotClick(i)}
        aria-label={`Go to page ${i + 1}`}
        style={{ transition: "all 0.25s ease" }}
        className={`border-0 outline-none cursor-pointer rounded-full ${
          i === current
            ? "w-6 h-3 bg-[#915EFF]"
            : "w-3 h-3 bg-secondary opacity-40 hover:opacity-70"
        }`}
      />
    ))}
  </div>
);

/* ─── Works Section ────────────────────────────────────────────── */
const Works = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);
  const hasMultiplePages = totalPages > 1;

  const visibleProjects = projects.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  const goTo = (nextPage) => {
    setDirection(nextPage > page ? 1 : -1);
    setPage(nextPage);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my
          work. Each project is briefly described with links to code repositories and live demos in
          it. It reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Carousel wrapper */}
      <div className="mt-20 flex items-center gap-4">
        {/* Left arrow */}
        {hasMultiplePages && (
          <ArrowBtn
            direction="left"
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
          />
        )}

        {/* Cards */}
        <div className="flex-1 min-w-0 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {visibleProjects.map((project, index) => (
                <ProjectCard key={`project-${page}-${index}`} index={index} {...project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right arrow */}
        {hasMultiplePages && (
          <ArrowBtn
            direction="right"
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages - 1}
          />
        )}
      </div>

      {/* Page dots */}
      {hasMultiplePages && (
        <Dots total={totalPages} current={page} onDotClick={goTo} />
      )}
    </>
  );
};

export default SectionWrapper(Works, "work");
