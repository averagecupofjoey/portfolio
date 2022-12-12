import Image from 'next/image';
import React from 'react';
import Skillbanner from './Skillbanner';

const Skills = () => {
  const skills = [
    'javascript',
    'react',
    'nextjs',
    'node',
    'html',
    'css',
    'mongo',
    'tailwind',
    'github',
  ];
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2>Technologies I've worked with</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map((skill) => {
            return <Skillbanner skillName={skill} key={skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
