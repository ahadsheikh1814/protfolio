import AboutMe from '@/components/AboutMe'
import Expertise from '@/components/Expertise'
import Hero from '@/components/Hero'
import Loader from '@/components/Loader'
import Protfolio from '@/components/Protfolio'
import React from 'react'
import ContactMe from '@/components/ContactMe'

function page() {
  return (
    <>
    <main>
      <Loader/>
      <Hero/>
      <Expertise/>
      <AboutMe/>
      <Protfolio/>
      <ContactMe/>
    </main>
    </>
  )
}

export default page