import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import octohome from '../public/assets/projects/octohome.png';
// import octohome from '../public/assets/octohome.PNG';
import octohome from '../public/assets/projects/octohome.PNG';
import ProjectItem from './ProjectItem';
// import joe from '../public/assets/Joe.JPG';
import pizzapath from '../public/assets/projects/pizzapaths.JPEG';

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Octo Game'
            backgroundImg={octohome}
            projectUrl='/octogame'
          />
          <ProjectItem
            title='Pizza Paths'
            backgroundImg={pizzapath}
            projectUrl='/pizzapaths'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
