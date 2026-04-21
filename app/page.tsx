'use client';


import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import React from 'react'
import Work from '@/components/Work'
import About from '@/components/About';
import PageReveal from '@/components/PageReveal'
import Transition from '@/components/TransitionPage';
import Contact from './contact/page';
import SeeMore from '@/components/SeeMore';
import About2 from '@/components/About2';



const page = () => {
  return (
    <>


      <PageReveal />
      <Navbar />
      <Hero />

      {/* <Transition>
        <About2 />
      </Transition> */}

      <Transition>
        <Work />
        <SeeMore />
      </Transition>

      <Transition>
        <About />
      </Transition>




    </>
  )
}

export default page
