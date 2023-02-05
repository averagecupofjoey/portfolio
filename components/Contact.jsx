import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import contact from '../public/assets/contact.jpg';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { CgFileDocument } from 'react-icons/cg';
import joeCode from '../public/assets/joeCode.jpeg';

const Contact = () => {
  let [subject, updateSubject] = useState('');

  return (
    <div id='contact' className='w-full lg:min-h-screen'>
      <div className='max-w-[1240px] m-auto px-2 w-full'>
        <p className='text0xl tracking-widest uppercase text-sectionbase'>
          Contact
        </p>
        <h2 className='py-4 text-largetextbase'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-black rounded-xl py-4 bg-hoverbase'>
            <div className='p-4 h-full'>
              <div className='flex justify-center'>
                <Image
                  className='rounded-xl lg:hover:scale-105 ease-in duration-300'
                  src={joeCode}
                  alt='contact image'
                  height={350}
                />
              </div>
              <div className='pt-1'>
                <h2 className='py-2 text-largetextbase'>Joseph Elias</h2>
                <p className='text-sectionbase'>Fullstack Developer</p>
                <p className='py-4 text-textbase'>
                  I&apos;m currently looking for a full-time position. Contact
                  me if you have a role that I&apos;d be a good fit for!
                </p>
              </div>
              <div>
                <p className='uppercase pt-8 text-sectionbase'>
                  Connect With Me
                </p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/josephelias/'
                  >
                    <div className='rounded-full shadow-lg shadow-black p-6 cursor-pointe hover:scale-110 ease-in duration-300 bg-badgebase text-black'>
                      <FaLinkedin />
                    </div>
                  </a>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/averagecupofjoey'
                  >
                    <div className='rounded-full shadow-lg shadow-black p-6 cursor-pointe hover:scale-110 ease-in duration-300 bg-badgebase text-black'>
                      <FaGithub />
                    </div>
                  </a>
                  <a href='mailto:jrelias@outlook.com'>
                    <div className='rounded-full shadow-lg shadow-black p-6 cursor-pointe hover:scale-110 ease-in duration-300 bg-badgebase text-black'>
                      <AiOutlineMail />
                    </div>
                  </a>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://drive.google.com/file/d/1Qx_AOchBc4rteUmpvUp8LpDit5j8NCJY/view'
                  >
                    <div className='rounded-full shadow-lg shadow-black p-6 cursor-pointe hover:scale-110 ease-in duration-300 bg-badgebase text-black'>
                      <CgFileDocument />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-black rounded-xl lg:p-4 bg-hoverbase'>
            <div className='p-4 text-textbase'>
              <form action={subject} method='post' enctype='text/plain'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    // name='subject'
                    onChange={(e) => {
                      updateSubject(
                        `mailto:jrelias@outlook.com?subject=` + e.target.value
                      );
                    }}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 mt-4 text-gray-100'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <div className='rounded-full shadow-xl shadow-black p-4 cursor-pointe hover:scale-110 ease-in duration-300 bg-hoverbase'>
            <Link href='/'>
              <HiOutlineChevronDoubleUp
                className='text-sectionbase'
                size={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
