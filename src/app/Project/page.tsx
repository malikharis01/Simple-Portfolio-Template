import React from 'react'

import { Public_Sans } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import CardWithForm from '@/components/custom/Card'
import Card from '@/components/custom/Card'

const mont = Public_Sans({ subsets: ['latin'], weight: '900', style: 'normal' })
const dm = DM_Sans({ subsets: ['latin'], weight: '400', style: 'normal' })
export default function Projects() {
  return (
    <div className=' flex justify-center flex-col '>
  <div className=' flex flex-col pt-28 grid-cols-3 items-center space-y-3'>
      <h1 className={` animate-fade-down animate-once  text-5xl ${mont.className} font-serif font-black text-purple-800 tracking-widest  `} >{`<Projects/>`}</h1>
      <h1 className={` animate-fade-down animate-once tracking-widest  text-3xl ${mont.className} font-extrabold font-serif text-purple-900  `} >Common In ALL Specialization</h1>
      <h1 className={` animate-fade-down animate-once  text-xl  font-normal  text-gray-700 `} >Every participant of the program will start by completing the following three core courses</h1>
      </div> 
      <div className=' pt-14 pb-14 flex  justify-evenly items-center '>
{/* <CardWithForm title="Q1" description="CS-101: Object-Oriented Programming using TypeScript

" image="/alvi.jpg"/> */}
<Card lnk=' ./Q1' title='Typescript Projects' description=' Object-Oriented Programming using TypeScript ' image='/tsc.png' />
<Card lnk=' ./Q2' title='Node Projects' description=' Developing Planet Scale Web 2.O and Web Applications ' image='/node.png' />
<Card lnk=' ./Q3' title='Next.js Projects' description=' Full-Stack Templates and API Product Development ' image='/next.png' />


      </div>
    </div>
  )
}
