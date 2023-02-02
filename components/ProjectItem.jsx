import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

const ProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  summary,
  techStack,
}) => {
  return (
    <div className='relative flex flex-col items-center h-auto w-full shadow-lg bg-badgebase shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-[#3E1C2D] to-[#722b4f]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={backgroundImg}
        // sizes='(max-height: 50vh)'
        height='500'
        alt='octogame image'
      />
      <div className='group-hover:invisible visible flex flex-col items-center text-textbase min-w-full'>
        {/* <div className='mt-4 text-xl font-bold'>Technologies Used:</div> */}
        <div className='grid grid-cols-3 gap-2 min-w-full mt-3'>
          {techStack.map((el, idx) => (
            <div className='col-span-1 text-xs lg:text-base' key={idx}>
              <div className='flex items-center p-2 bg-backgroundbase rounded-md'>
                <RiRadioButtonFill className='pr-1 min-w-[10px] max-w-[10px] sm:min-w-[16px] sm:max-w-[16px] ' />{' '}
                {el}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white traking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{summary}</p>
        {/* <div className='mt-4 text-xl font-bold text-center text-white'>
          Technologies Used:
        </div>
        <div className='grid grid-cols-3 '>
          {techStack.map((el, idx) => (
            <div className='col-span-1 text-white' key={idx}>
              {el}
            </div>
          ))}
        </div> */}
        <Link href={projectUrl}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer mt-4'>
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
