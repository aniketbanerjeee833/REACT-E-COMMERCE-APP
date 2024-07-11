import React from 'react'
import HeroSection from './HeroSection'
import "../Css/Home.css"
import FeatureProducts from './FeatureProducts'
export default function Home() {

   const data={name:"Thapa"}
  return (
<>

    <HeroSection data={data} />
    <FeatureProducts/>

    </>
  )
}
