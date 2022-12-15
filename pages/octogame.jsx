// import Image from 'next/image';
// import React from 'react';
// import octoIntermission from '../public/assets/projects/octointermission.png';
// import { RiRadioButtonFill } from 'react-icons/ri';
// import Link from 'next/link';
// const octogame = () => {
//   return (
//     <div className='w-full'>
//       <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
//         <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'></div>
//         <Image
//           className='absolute z-1'
//           layout='fill'
//           objectFit='cover'
//           src={octoIntermission}
//           alt='octogame image'
//         ></Image>
//         <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
//           <h2 className='py-2'>Octogame</h2>
//           <h3>What techs I used</h3>
//         </div>
//       </div>
//       <div className='mx-auto max-w-[1240px] p-2 grid md:grid-cols-5 gap-8 pt-8'>
//         <div className='col-span-4'>
//           <p>Project</p>
//           <h2>Overview</h2>
//           <p>Description of the project</p>
//           <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
//           <button className='px-8 py-2 mt-4 mr-8'>Code</button>
//         </div>
//         <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
//           <div className='p-2'>
//             <p className='text-center font-bold pb-2'>Technologies</p>
//             <div className='grid grid-cols-3 md:grid-cols-1'>
//               <p className='text-gray-600 py-2 flex items-center'>
//                 <RiRadioButtonFill className='pr-1' /> React
//               </p>
//               <p className='text-gray-600 py-2 flex items-center'>
//                 <RiRadioButtonFill className='pr-1' /> React
//               </p>
//               <p className='text-gray-600 py-2 flex items-center'>
//                 <RiRadioButtonFill className='pr-1' /> React
//               </p>
//               <p className='text-gray-600 py-2 flex items-center'>
//                 <RiRadioButtonFill className='pr-1' /> React
//               </p>
//             </div>
//           </div>
//         </div>
//         <Link href='/#projects'>
//           <p className='underline cursor-pointer'>Back</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default octogame;

import React from 'react';
import ProjectPage from '../components/ProjectPage';
import projectImg from '../public/assets/projects/octointermission.png';

const projName = 'Octo Game';
const techs = [
  'JavaScript',
  'Node.js',
  'Phaser3',
  'Express',
  'Sockt.io',
  'Passport',
  'Tiled',
];

const p1 =
  "This application makes use of Socket.io to allow for multiplayer functionality within the game. The inspiration for the game comes from Netflix's hit show Squid Game.";

const p2 =
  'This was a group project in which I played a vital role in bringing to life. I was able to flex my creative muscles by coming up with the original idea for the game, as well as designing the "Red Light, Green Light" level in tiled.';

const p3 =
  'My programming skills were also put to the test, and I learned a tremendous amount while creating and implementing all socket communications throughout the game. I engineered and implemented the logic for the "Red Light, Green Light" game, ensuring that intervals between light changes were random per game instance, yet consistent for every player currently in the game.';

const p4 =
  'This was my first major non-tutorial project, and provided valuable experience of working within a team of programmers to reach a common goal.';
const desc = [p1, p2, p3, p4];

const octogame = () => {
  return (
    <ProjectPage
      projectName={projName}
      projectHeadline='An online multiplayer party game.'
      projectImage={projectImg}
      projectDesc={desc}
      technologies={techs}
    ></ProjectPage>
  );
};

export default octogame;
