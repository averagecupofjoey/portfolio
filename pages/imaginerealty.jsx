import React from 'react';
import ProjectPage from '../components/ProjectPage';
import projectImg from '../public/assets/projects/imaginerealty.png';

const projName = 'Imagine Realty';
const techs = [
  'Javascript',
  'React',
  'Firebase',
  'Node',
  'Axios',
  'Leaflet',
  'Toast',
  'Google OAuth',
  'OpenStreetMap API',
];

const p1 =
  'This application was made with React and uses Firebase with Firestore as a database and was designed with a mobile first mentality.';

const p2 =
  'Users can create an account, post their home for either rent or sale, and specify if there is a discount applied. Up to six pictures can be uploaded onto each listing, which are used to create a slideshow on the page for that listing. This listing page has a share functionality to be shared with social media accounts.';

const p3 =
  'When entering the location, that address data is then sent to OpenStreetMap and the results are displayed on a leaflet map. A user can go to their profile page and edit/delete the listings that they have published on to the site, as well as update their user information.';

const p4 =
  'React-Toastify was implemented to communicate error and success messages to the user.';

const desc = [p1, p2, p3, p4];

const imaginerealty = () => {
  return (
    <ProjectPage
      projectName={projName}
      projectHeadline='A real estate listing site with user profiles'
      projectImage={projectImg}
      projectDesc={desc}
      technologies={techs}
      demoLink='https://imagine-realty.vercel.app/'
      codeLink='https://github.com/averagecupofjoey/imagine-realty'
    ></ProjectPage>
  );
};

export default imaginerealty;
