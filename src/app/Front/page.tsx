
import React from "react";
// import CardWithForm from "@/components/custom/Card";
import { Montserrat } from "next/font/google";
import Link from 'next/link'
import { Kanit } from "next/font/google";


import Image from 'next/image'
import bg from "@/assets/bg.jpg"
import { Video } from 'lucide-react'
import { Public_Sans } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

const mont = Public_Sans({ subsets: ['latin'], weight: '900', style: 'normal' })
const dm = DM_Sans({ subsets: ['latin'], weight: '400', style: 'normal' })
const kanit = Kanit({ subsets: ['latin'], weight: '400', style: 'normal' })


export default  function Front() {
 

    return (

        <div>
            <div className=' flex flex-col '  >
                {/* <Image src={bg} alt='bg' className=' w-screen absolute z-[-1] opacity-90 '/> */}
                {/* <video src="/mp2.mp4" autoPlay loop muted className="w-screen absolute z-[-1] opacity-60"></video> */}

                <div className='  animate-fade-down animate-once flex w-screen h-screen  items-center justify-center  '>
                    <div className=' mt-16 space-y-1'>

                        <h1 className={` text-2xl text-purple-900 font-semibold ${mont.className} tracking-wider`}>Hi my name is </h1>
                        <h1 className={` animate-fade-down animate-once  text-6xl ${mont.className} font-extrabold text-purple-800 `}>Muhammad Haris</h1>
                        <h1 className={` text-3xl text-purple-900  font-medium ${mont.className} tracking-widest`}>Full-Stack Web Developer </h1>
                        

                        {/* <h1 className={` text-3xl text-purple-900 font-semibold ${mont.className} tracking-wider`}>Full-Stack Developer</h1> */}
         

                        <h1 className={` w-[600px] ${dm.className} text-justify pt-4 text-gray-900 font-medium text-lg leading-8`}>I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on my blog and regularly speak at various web conferences and meetups. Want to know how I may help your project? Check out my project case studies and resume.</h1>
                        <button  className={`${dm.className} mt-8  transition duration-500 ease-in-out bg-blue-900 border-blue-600 text-white  transform hover:-translate-y-1 hover:scale-110 py-3 px-4 rounded-md font-semibold `}>Hire Me</button>

                    </div>
                    <div>
                        <Image src={"/port2.jpeg"} alt='logo' width={500} height={500} className={"animate-fade-down animate-once rounded-full p-10"} />
                    </div>
                </div>
            </div>

        </div>
    );
}
