import React from 'react';
import ProjectPage from '../components/ProjectPage';
import projectImg from '../public/assets/projects/dungeonraid.png';

const projName = 'Dungeon Raid';
const techs = ['Phaser3', 'Node', 'Typescript', 'Babel', 'Tiled', 'Webpack'];

const p1 =
  'This simple chest collecting game provided ample practice implementing classes with Typescript.';

const p2 =
  'A base class for characters in the game was created, with class extensions for both the player and enemy. A text class was also completed for text UI overlays, with an extension used for keeping track of the score. Using a sprite sheet, I created character animations and implemented the logic for running those animations based on keyboard input. ';

const p3 =
  'Logic in the game included player movement, attacking enemies, having enemies follow and attack the player, a health point system, a score system, window resizing, and game win/lose conditions.';

const desc = [p1, p2, p3];

const dungeonraid = () => {
  return (
    <ProjectPage
      projectName={projName}
      projectHeadline='A browser game with classes and enemy AI'
      projectImage={projectImg}
      projectDesc={desc}
      technologies={techs}
      demoLink='https://dungeon-raid.onrender.com/'
      codeLink='https://github.com/averagecupofjoey/phaser'
    ></ProjectPage>
  );
};

export default dungeonraid;
