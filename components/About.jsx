import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import joeImg from '../public/joe.jpg';

const About = () => {
  const [details, setDetails] = useState('professional');
  return (
    <div id='about' className='w-full md:h-screen p-2 flex pb-40 md-pb-0'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 auto-rows-max gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-sectionbase'>
            About
          </p>
          <h2 className='py-4 text-largetextbase'>Not your Average Joe</h2>
          {/* <div className='border-b-2 inline-block border-gray-700 pb-2'> */}
          <p className='text-l tracking-widest uppercase text-sectionbase'>
            <span
              id='prof'
              className={
                details === 'professional'
                  ? 'underline underline-offset-4  cursor-pointer hover:bg-hoverbase hover:hoverbackground py-1'
                  : 'cursor-pointer hover:bg-hoverbase hover:hoverbackground py-1'
              }
              onClick={() => {
                setDetails('professional');
              }}
            >
              &nbsp;Professional
            </span>
            &nbsp;/
            <span
              id='pers'
              className={
                details === 'personal'
                  ? 'underline underline-offset-4 hover:bg-hoverbase cursor-pointer hover:hoverbackground py-1'
                  : 'cursor-pointer hover:bg-hoverbase hover:hoverbackground py-1'
              }
              onClick={() => {
                setDetails('personal');
              }}
            >
              &nbsp;Personal{''}
            </span>
          </p>
          {/* </div> */}
          {/* <hr class='mx-auto bg-gray-700 text-lg text-black h-1 rounded hidden md:block' /> */}
          {details === 'professional' && (
            <>
              <p className='py-2 text-textbase'>
                I&apos;m a former Broadway and off-Broadway Business Manager and
                a former hedge fund accountant for one of the largest
                alternative investment firms in the world.
              </p>
              <p className='py-2 text-textbase'>
                I started programming as a hobby back in 2019, and went to
                Fullstack Academy for a formal education at the end of 2021.
                Since graduating I have focused on updating and expanding my
                technical skill set to make me competitive in today&apos;s
                market.
              </p>
              <p className='py-2 text-textbase'>
                In addition to the aforementioned education I have a
                bachelor&apos;s degree in Finance, and a master&apos;s degree in
                Performing Arts Management.
              </p>
              <p className='py-2 text-textbase'>
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
              <p className='py-2 text-textbase'>
                After being born and raised in Florida, I moved in the summer of
                2017 to pursue a master&apos;s degree in Performing Arts
                Management and to take my bite out of the big apple.
              </p>
              <p className='py-2 text-textbase'>
                I&apos;m an avid theater goer, songwriter, and ukulele
                enthusiast. I also enjoy a good video game, and am the founder
                and leader of one of the premier{' '}
                <span className='rainbow'>LGBTQ+</span> guilds &#40;with 140
                members,&#41; in League of Legends: Wild Rift.
              </p>
              <p className='py-2 text-textbase'>
                I&apos;m a self proclained pizza connoisseur, and would eat it
                every day of the week if my metabolism could keep up. I started
                going on self-guided walking pizza tours throughout the
                pandemic, which led to the inspiration of my app{' '}
                <span className='font-bold'>
                  <a
                    href='http://www.pizzapaths.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    PizzaPaths
                  </a>
                  .
                </span>
              </p>
              <p className='py-2 text-textbase'>
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
        </div>
        <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 col-span-1'>
          <Image src={joeImg} className='rounded-xl' alt='Picture of Joe' />
        </div>
        <div id='growthis' className='col-span-3'></div>
      </div>
    </div>
  );
};

export default About;
