import Image from 'next/image';
import React from 'react';
import Skillbanner from './Skillbanner';

const Skills = () => {
  const skills = [
    'javascript',
    'react',
    'nextjs',
    'node',
    'postgresql',
    'redux',
    'html',
    'css',
    'mongo',
    'tailwind',
    'firebase',
    'github',
  ];
  return (
    <div id='skills' className='w-full lg:h-screen p-2 pb-40 lg:pb-0'>
      <div className='max-w-[1240px] m-auto flex flex-col h-full'>
        <p className='text-xl tracking-widest uppercase text-sectionbase'>
          Skills
        </p>
        <h2 className='py-4 text-largetextbase'>
          Technologies I&apos;ve worked with
        </h2>
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
