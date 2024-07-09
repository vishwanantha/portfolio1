import React from 'react'
import NavbarT from './Navbar/NavbarT'
import Hero from './Hero/Hero'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Si from './H/Si'
export default function Allontainer() {
  return (
    <div>
        <NavbarT/>
            <div id="home"><Hero /></div>            
            <div id="about">< About /></div>
            <div id="skills"><Si /></div>
            <div id="projects"><Projects/></div>
            
            
           
            <div id="contact"><Contact /></div>
           

    </div>
  )
}
