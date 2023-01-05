import React from 'react';
import ProjectPage from '../components/ProjectPage';
import projectImg from '../public/assets/projects/dragondepot.png';

const projName = 'Dragon Depot';
const techs = ['Tailwind', 'Javascript', 'HTML'];

const p1 =
  'This site was made ultimately to get practice with TailwindCSS and custom animations.';

const p2 =
  "It's resonsive design features different layouts for mobile, tablet, and desktop - as well as a different color scheme for light and dark mode preferences.";

const p3 = 'Images were generated using Midjourney AI.';

const desc = [p1, p2, p3];

const dragondepot = () => {
  return (
    <ProjectPage
      projectName={projName}
      projectHeadline='Responsive static site'
      projectImage={projectImg}
      projectDesc={desc}
      technologies={techs}
      demoLink='https://dragondepot.onrender.com'
      codeLink='https://github.com/averagecupofjoey/tailwind'
    ></ProjectPage>
  );
};

export default dragondepot;
