import React from 'react';
import ProjectPage from '../components/ProjectPage';
import projectImg from '../public/assets/projects/githubfinder.png';

const projName = 'Github Finder';
const techs = [
  'Javascript',
  'React',
  'Node',
  'DaisyUI',
  'Tailwind',
  'Github API',
  'Context API',
];

const p1 =
  'This application uses the Github API to get information about Github users. In addition, the Context API is used with reducers to manipulate the state.';

const p2 =
  'A user searches for a name, and results are returned that include that search term. A user can then click on the individual search results to go to a profile page showing additional information for the selected result.';

const desc = [p1, p2];

const github = () => {
  return (
    <ProjectPage
      projectName={projName}
      projectHeadline='Usese the Github API to search for profiles'
      projectImage={projectImg}
      projectDesc={desc}
      technologies={techs}
      demoLink='https://githubfinder-tn37.onrender.com/'
      codeLink='https://github.com/averagecupofjoey/github-finder'
    ></ProjectPage>
  );
};

export default github;
