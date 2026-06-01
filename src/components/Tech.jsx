import React, { useState } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          key={technology.name}
          onMouseEnter={() => setHovered(technology.name)}
          onMouseLeave={() => setHovered(null)}
          style={{
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            transform: hovered === technology.name ? 'scale(1.18)' : 'scale(1)',
            boxShadow: hovered === technology.name
              ? '0 0 20px 4px rgba(145, 94, 255, 0.55), 0 8px 24px rgba(0,0,0,0.4)'
              : 'none',
          }}
          className='w-28 h-28 flex items-center justify-center bg-tertiary rounded-full p-4 cursor-pointer'
          title={technology.name}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-16 h-16 object-contain'
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "")