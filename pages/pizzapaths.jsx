import React from 'react';
import ProjectPage from '../components/ProjectPage';
import projectImg from '../public/assets/projects/pizzapaths.jpeg';

const projName = 'PizzaPaths';
const techs = ['NextJS', 'Leaflet API'];

const p1 =
  "This application uses the current gps location of the user to create a personalized pizza tour based on the user's desired number of slices and total walking distance.";

const p2 =
  'It first calls the Yelp API to locate pizza slice locations near the user. I obstract multiple pieces of this data and then run an algorithm I created to calculate the distance between every possible location. The possible paths that fall within the user defined total distance are added to a data structure, which is used to produce a Leaflet map with custom pizza slice markers.';

const p3 =
  'The location data is then sent to mapbox to generate step by step routing instructions for the user, which is overlayed on to the map displayed to the user. A user can click on each custom pizza marker on the map to open a modal with additional information on the location.';

const p4 =
  'Finally, a user is able to generate a new path or ammend the total slices desired in a path. Thanks to the data structure containing route info, this is done without needing to make an additional Yelp API call.';
const desc = [p1, p2, p3, p4];

const pizzapaths = () => {
  return (
    <ProjectPage
      projectName={projName}
      projectHeadline='A pizza tour generator for pizza explorers'
      projectImage={projectImg}
      projectDesc={desc}
      technologies={techs}
    ></ProjectPage>
  );
};

export default pizzapaths;
