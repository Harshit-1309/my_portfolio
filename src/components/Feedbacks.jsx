import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const CARDS_PER_PAGE = 3;

/* ─── Feedback Card ────────────────────────────────────────────── */
const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
    className="bg-black-200 p-10 rounded-3xl w-full h-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} at {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

/* ─── Arrow Button ─────────────────────────────────────────────── */
const ArrowBtn = ({ direction, onClick, disabled }) => {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={isLeft ? "Previous testimonials" : "Next testimonials"}
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
  <div className="flex gap-2 justify-center pt-6 pb-2">
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

/* ─── Feedbacks Section ────────────────────────────────────────── */
const Feedbacks = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
  const hasMultiplePages = totalPages > 1;

  const visible = testimonials.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  const goTo = (nextPage) => {
    setDirection(nextPage > page ? 1 : -1);
    setPage(nextPage);
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      {/* Header */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className={`-mt-20 pb-6 ${styles.paddingX}`}>
        <div className="flex items-center gap-4">
          {/* Left arrow */}
          {hasMultiplePages && (
            <ArrowBtn direction="left" onClick={() => goTo(page - 1)} disabled={page === 0} />
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
                {visible.map((testimonial, index) => (
                  <FeedbackCard
                    key={`testimonial-${page}-${index}`}
                    index={index}
                    {...testimonial}
                  />
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

        {/* Dots */}
        {hasMultiplePages && (
          <Dots total={totalPages} current={page} onDotClick={goTo} />
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");