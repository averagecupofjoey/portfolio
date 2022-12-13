import Image from 'next/image';
import React from 'react';
import JoeImg from '../public/assets/Joe.JPG';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Not your Average Joe</h2>
          <p className='py-2 text-gray-600'>
            I'm a former Broadway and off-Broadway Business Manager and a former
            hedge fund accountant for one of the largest alternative investment
            firms in the world.
          </p>
          <p className='py-2 text-gray-600'>
            I'm a <span className='font-bold'>big picture </span>
            innovator and leader. My programming knowledge combined with my
            managerial, analytical, and creative experiences give me a skill set
            that is uniquely me. I'm actively looking for a programming role
            that will allow me to make use of and grow my skill set to its
            fullest potential.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={JoeImg} className='rounded-xl' alt='Picture of Joe' />
        </div>
      </div>
    </div>
  );
};

export default About;
