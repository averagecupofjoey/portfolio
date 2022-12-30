import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import JoeImg from '../public/assets/Joe.JPG';

const About = () => {
  const [details, setDetails] = useState('professional');
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-20'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Not your Average Joe</h2>
          {/* <div className='border-b-2 inline-block border-gray-700 pb-2'> */}
          <p className='text-l tracking-widest uppercase text-[#5651e5]'>
            <span
              id='prof'
              className={
                details === 'professional'
                  ? 'underline underline-offset-4  cursor-pointer hover:bg-slate-300'
                  : 'cursor-pointer hover:bg-slate-300'
              }
              onClick={() => {
                setDetails('professional');
              }}
            >
              Professional
            </span>{' '}
            /{' '}
            <span
              id='pers'
              className={
                details === 'personal'
                  ? 'underline underline-offset-4 hover:bg-slate-300 cursor-pointer'
                  : 'cursor-pointer hover:bg-slate-300'
              }
              onClick={() => {
                setDetails('personal');
              }}
            >
              Personal
            </span>
          </p>
          {/* </div> */}
          {/* <hr class='mx-auto bg-gray-700 text-lg text-black h-1 rounded hidden md:block' /> */}
          {details === 'professional' && (
            <>
              <p className='py-2 text-gray-600'>
                I&apos;m a former Broadway and off-Broadway Business Manager and
                a former hedge fund accountant for one of the largest
                alternative investment firms in the world.
              </p>
              <p className='py-2 text-gray-600'>
                I started programming as a hobby back in 2019, and went to
                Fullstack Academy for a formal education at the end of 2021.
                Since graduating I have focused on updating and expanding my
                technical skill set to make me competitive in today&apos;s
                market.
              </p>
              <p className='py-2 text-gray-600'>
                In addition to the aforementioned education I have a
                bachelor&apos;s degree in Finance, and a master&apos;s degree in
                Performing Arts Management.
              </p>
              <p className='py-2 text-gray-600'>
                I&apos;m a <span className='font-bold'>big picture </span>
                innovator and leader. My programming knowledge combined with my
                managerial, analytical, and creative experiences give me a skill
                set that is uniquely me. I&apos;m actively looking for a
                software engineering role that will allow me to make use of and
                grow my skill set to its fullest potential.
              </p>
            </>
          )}

          {details === 'personal' && (
            <>
              <p className='py-2 text-gray-600'>
                After being born and raised in Florida, I moved in the summer of
                2017 to pursue a master&apos;s degree in Performing Arts
                Management and to take my bite out of the big apple.
              </p>
              <p className='py-2 text-gray-600'>
                I&apos;m an avid theater goer, songwriter, and ukulele
                enthusiast. I also enjoy a good video game, and am the founder
                and leader of one of the premier LGBTQ+ guilds &#40;with 140
                members,&#41; in League of Legends: Wild Rift.
              </p>
              <p className='py-2 text-gray-600'>
                I probably love pizza more than anyone you&apos;ve ever met, and
                would eat it every day of the week if my metabolism could keep
                up. I started going on self-guided walking pizza tours
                throughout the pandemic, which led to the inspiration of my app{' '}
                <span className='font-bold'>
                  <a
                    href='https://www.pizzapaths.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    PizzaPaths
                  </a>
                  .
                </span>
                &nbsp;I&apos;ve tried many of the major pizza establishments in
                NYC, and thoroughly enjoy getting to expand my education in this
                area.
              </p>
              <p className='py-2 text-gray-600'>
                Weather permitting, my preferred mode of public transportation
                is Citi Bike. In the summer months, you can usually find me
                roller skating down the west side highway bike path. In the
                winter months, you&apos;ll find me hibernating inside of my
                apartment while catching up on the international seasons of
                RuPaul&apos;s Drag Race.
              </p>
            </>
          )}

          <hr class='mx-auto bg-gray-700 text-lg text-black h-1 rounded my-1 hidden md:block' />
          <p className='text-l tracking-widest uppercase text-[#5651e5]'></p>
        </div>
        <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={JoeImg} className='rounded-xl' alt='Picture of Joe' />
        </div>
      </div>
    </div>
  );
};

export default About;
