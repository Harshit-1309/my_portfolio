import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex items-center justify-center bg-tertiary rounded-full p-4' key={technology.name}>
          <img 
            src={technology.icon} 
            alt={technology.name} 
            className='w-16 h-16 object-contain'
            title={technology.name}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "")