'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Logo } from '@/data';
import Link from 'next/link';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { AiOutlineMenu } from 'react-icons/ai';
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`fixed w-full h-26 shadow-xl bg-[#423e3a] ${roboto.className}`}>
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
                <Image
                    src={Logo[0].img}
                    alt="Logo"
                    width="200"
                    height={50}
                    className='cursor-pointer h-50 w-70 rounded-full ml-3'
                    priority
                />
                
                <div className="flex-grow flex justify-center items-center h-full">
                    <TextGenerateEffect words='ARMO BUILDING WORKS' className='text-center' />
                </div>

                <div>
                    <ul className='hidden sm:flex text-white'>
                        <Link href="/">
                            <li className='ml-10 uppercase hover:border-b text-md lg:text-xl'>Home</li>
                        </Link>
                        <Link href="./gallery">
                            <li className='ml-10 uppercase hover:border-b text-md lg:text-xl'>Gallery</li>
                        </Link>
                        <Link href="./contact">
                            <li className='ml-10 uppercase hover:border-b text-md lg:text-xl'>Contact Us</li>
                        </Link>
                    </ul>
                </div>

                <div onClick={handleNav} className='block sm:hidden cursor-pointer pl-24'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={`fixed w-[65%]  right-0 top-24 h-screen p-10 bg-[#423e3a] transition-transform duration-500 
                ${menuOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'}`}>
                    <ul className='flex-col text-white'>
                        <Link href="/">
                            <li className='mb-10 uppercase hover:border-b text-xl'>Home</li>
                        </Link>
                        <Link href="./gallery">
                            <li className='mb-10 uppercase hover:border-b text-xl'>Gallery</li>
                        </Link>
                        <Link href="./contact">
                            <li className='mb-10 uppercase hover:border-b text-xl'>Contact Us</li>
                        </Link>
                    </ul>
                </div>

        </nav>
    );
};

export default Nav;
