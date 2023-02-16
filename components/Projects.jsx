import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import octohome from '../public/assets/projects/octohome.png';
import ProjectItem from './ProjectItem';
import pizzapath from '../public/assets/projects/pizzaPathsDesktop.png';
import githubfinder from '../public/assets/projects/githubfinder.png';
import dragondepot from '../public/assets/projects/dragondepot.png';
import imaginerealty from '../public/assets/projects/imaginerealty.png';
import dungeonraid from '../public/assets/projects/dungeonraid.png';
import shrimpopedia from '../public/assets/projects/shrimpopedia.png';
import octoLight from '../public/assets/projects/octoLight.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 pb-40'>
        <p className='text-xl tracking-widest uppercase text-sectionbase'>
          Projects
        </p>
        <h2 className='py-4 text-largetextbase'>What I&apos;ve Built</h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='PizzaPaths'
            backgroundImg={pizzapath}
            projectUrl='/pizzapaths'
            summary='A pizza tour generator for pizza explorers.'
            techStack={[
              'Javascript',
              'NextJS',
              'Node.js',
              'Axios',
              'Leaflet',
              'Toastify',
              'Yelp API',
              'Mapbox API',
              'Open Street Map API',
              'Nomantim API',
            ]}
          />
          <ProjectItem
            title='Shrimpopedia'
            backgroundImg={shrimpopedia}
            projectUrl='/shrimpopedia'
            summary='A user-contributed encyclopedia and marketplace for aquarium shrimp.'
            techStack={[
              'Javascript',
              'React',
              'Postgres',
              'Prisma',
              'Cropperjs',
              'NextJS',
              'NextAuth',
              'Node.js',
              'Nodemailer',
              'Tailwind',
            ]}
          />
          <ProjectItem
            title='Octo Game'
            backgroundImg={octoLight}
            projectUrl='/octogame'
            summary='An online multiplayer party game.'
            techStack={[
              'JavaScript',
              'Node.js',
              'Phaser3',
              'Express',
              'Sockt.io',
              'Passport',
              'Tiled',
            ]}
          />

          <ProjectItem
            title='Imagine Realty'
            backgroundImg={imaginerealty}
            projectUrl='/imaginerealty'
            summary='A CRUD real estate app with user profiles.'
            techStack={[
              'Javascript',
              'React',
              'Firebase',
              'Node.js',
              'Axios',
              'Leaflet',
              'Toast',
              'Google OAuth',
              'Open Street Map API',
            ]}
          />

          <ProjectItem
            title='Dungeon Raid'
            backgroundImg={dungeonraid}
            projectUrl='/dungeonraid'
            summary='A Phaser3 game using Typescript and classes galore.'
            techStack={[
              'Typescript',
              'Phaser3',
              'Node.js',
              'Webpack',
              'Babel',
              'Tiled',
            ]}
          />

          <ProjectItem
            title='Dragon Depot'
            backgroundImg={dragondepot}
            projectUrl='/dragondepot'
            summary='A responsive tailwind website with light and dark modes.'
            techStack={['Tailwind', 'Javascript', 'HTML']}
          />
          <ProjectItem
            title='Github Finder'
            backgroundImg={githubfinder}
            projectUrl='/github'
            summary='Uses the Github API to search for profiles.'
            techStack={[
              'Javascript',
              'React',
              'Node.js',
              'DaisyUI',
              'Tailwind',
              'Github API',
              'Context API',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
