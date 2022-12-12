import Image from 'next/image';
import React from 'react';

const Skillbanner = ({ skillName }) => {
  const srcTerm = `/../public/assets/skills/${skillName}.png`;
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={srcTerm} width='64' height='64' alt={skillName} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='uppercase'>{skillName}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skillbanner;
