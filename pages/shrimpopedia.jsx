import React from 'react';
import ProjectPage from '../components/ProjectPage';
import projectImg from '../public/assets/projects/shrimpopedia.png';

const projName = 'Shrimpopedia';
const techs = [
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
];

const p1 =
  'Did you know that there are over 2,000 types of aquarium shrimp? What started out as a joke became a major application and resource for shrimp lovers across the globe. This application allows users to easily sign up/sign in with just an email address. Users can upload images and data of their shrimp, search for other entries in the encyclopedia, list their shrimp for sale, and find resources for maintaining a healthy planted tank.';

const p2 =
  'The main shrimp page displays CSS cards with the shrimp image and name/species/gender. Upon clicking, the card is flipped to reveal more information about that shrimp. A user can then click a button on the card to go to the encyclopedia entry. This page uses a hook to get the dimensions of grid rows on the page, which allows me to display the information on a custom designed page that looks like a sheet of notebook paper.  ';

const p3 =
  'A non-logged in user can still search the encyclopedia, with either a basic search or an advanced search to filter the data in many different ways. Logged in users enjoy more functionality, including the ability to upload data into the encyclopedia, and access their personal tank - where they can make edits to the entries that they have previously contributed. I used a modal with CropperJs to crop and then compress images, which helps provide a streamlined look throughout the website. ';

const p4 =
  'Users visiting on a mobile site experience even more of an encyclopedia feel, as the mobile nav bar is designed to look like a table of contents.';
const desc = [p1, p2, p3, p4];

const shrimpopedia = () => {
  return (
    <ProjectPage
      projectName={projName}
      projectHeadline='A user-contributed encyclopedia and marketplace for aquarium shrimp'
      projectImage={projectImg}
      projectDesc={desc}
      technologies={techs}
      // demoLink='https://pizzapaths.onrender.com/'
      codeLink='https://github.com/averagecupofjoey/PizzaPaths'
    ></ProjectPage>
  );
};

export default shrimpopedia;
