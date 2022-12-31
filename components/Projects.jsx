import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import octohome from '../public/assets/projects/octohome.PNG';
import ProjectItem from './ProjectItem';
import pizzapath from '../public/assets/projects/pizzapaths.JPEG';
import githubfinder from '../public/assets/projects/githubfinder.png';
import dragondepot from '../public/assets/projects/dragondepot.png';
import imaginerealty from '../public/assets/projects/imaginerealty.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-20'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='PizzaPaths'
            backgroundImg={pizzapath}
            projectUrl='/pizzapaths'
            summary='A pizza tour generator for pizza explorers.'
          />
          <ProjectItem
            title='Octo Game'
            backgroundImg={octohome}
            projectUrl='/octogame'
            summary='An online multiplayer party game.'
          />

          <ProjectItem
            title='Imagine Realty'
            backgroundImg={imaginerealty}
            projectUrl='/imaginerealty'
            summary='A CRUD real estate app with user profiles.'
          />

          <ProjectItem
            title='Dragon Depot'
            backgroundImg={dragondepot}
            projectUrl='/dragondepot'
            summary='A responsive tailwind website with light and dark modes.'
          />
          <ProjectItem
            title='Github Finder'
            backgroundImg={githubfinder}
            projectUrl='/github'
            summary='Uses the Github API to search for profiles.'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
