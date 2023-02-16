import React from 'react';
import ProjectPage from '../components/ProjectPage';
import projectImg from '../public/assets/projects/pizzapaths.jpeg';

const projName = 'PizzaPaths';
const techs = [
  'NextJS',
  'Node',
  'Javascript',
  'Axios',
  'Leaflet',
  'Toastify',
  'Yelp API',
  'Mapbox API',
  'Nomantim API',
  'OpenStreetMap',
];

const p1 =
  'PizzaPaths makes heavy use of state management and data manipulation to create a personalized pizza tour for a user. A user choses if they are walking or driving, and then either allows the website to access their geolocation, or they enter an address that is sent to the Nomantim API to retreive geolocation coordinates. The user then decides the total number of slices they want, the distance they want to travel, and the preferred method to filter locations by.';

const p2 =
  'It first calls the Yelp API to locate pizza slice locations near the user. I obstract multiple pieces of this data and then run an algorithm I created to calculate the distance between every possible location. The possible paths that fall within the user defined total distance are added to a data structure, this data is then sorted per the user requirements and then used to produce a Leaflet map with custom pizza slice markers.';

const p3 =
  'The location data is then sent to mapbox to generate step by step routing instructions for the user, which is overlayed on to the map displayed to the user. A user can click on each custom pizza marker on the map to open a modal with additional information on the location.';

const p4 =
  'A user is able to generate a new path or ammend the total slices desired in a path. Thanks to the data structure containing route info, this is done without needing to make an additional Yelp API call. The user can also click to export the route to google maps, and enjoy real time GPS navigation. ';

const p5 =
  'Toast is used for error handling across the app, and provides uselful guidance to the user to lead them to a successfully generated PizzaPath.';
const desc = [p1, p2, p3, p4, p5];

const pizzapaths = () => {
  return (
    <ProjectPage
      projectName={projName}
      projectHeadline='A pizza tour generator for pizza explorers'
      projectImage={projectImg}
      projectDesc={desc}
      technologies={techs}
      demoLink='https://pizzapaths.vercel.app/'
      codeLink='https://github.com/averagecupofjoey/PizzaPaths/tree/redesign'
    ></ProjectPage>
  );
};

export default pizzapaths;
