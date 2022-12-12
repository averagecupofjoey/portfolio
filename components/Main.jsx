import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            This is a test
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I'm <span className='text-[#5651e5]'>Joe</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Fullstack Developer</h1>
          <p className='py-2 text-gray-600 max-w-[70%] m-auto'>
            I live in the intersection of creativity and analytics. I am
            mesmerized by how data can be used and manipulated to produce
            interactive experiences for users, and the technologies that are
            used to bring those experiences to life.
          </p>
          {/* <p className='py-2 text-gray-600 max-w-[70%] m-auto'>
            I'm a former Broadway and off-Broadway Business Manager and a former
            hedge fund accountant for one of the largest alternative investment
            firms in the world. I'm a{' '}
            <span className='font-bold'>big picture </span>
            innovator and leader. My programming knowledge combined with my
            managerial, analytical, and creative experiences give me a skill set
            that is uniquely me. I'm actively looking for a programming role
            that will allow me to make use of and grow my skill set to its
            fullest potential.
          </p> */}
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointe hover:scale-110 ease-in duration-300'>
              <FaLinkedin />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointe hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointe hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointe hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;