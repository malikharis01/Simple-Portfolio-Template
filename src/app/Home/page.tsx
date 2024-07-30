import React from 'react'
import Front from "@/app/Front/page"
import About from '../About/page'
import Projects from '../Project/page'
import Services from '../Services/page'
import Footer from "@/components/custom/Footer"
import Contact from '../Contact/page'
export default function page() {
  return (
    <div>
      <Front/>
      <About/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}
