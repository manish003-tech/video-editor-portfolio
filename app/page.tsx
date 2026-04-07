'use client';


import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import React from 'react'
import Work from '@/components/Work'
import About from '@/components/About'
import PageReveal from '@/components/PageReveal'
import Transition from '@/components/TransitionPage';
import Contact from './contact/page';



const page = () => {
  return (
    <>


      <Navbar />
      <PageReveal />
      <Hero />

      <Transition>
        <Work />
      </Transition>

      <Transition>
        <About />
      </Transition>




    </>
  )
}

export default page
