import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/Men/mens_kurta'
import { mens_pants } from '../../../Data/Pants/mens_pants'
import { gouns } from '../../../Data/Gouns/gouns'
import { lenghacholiPage2 } from '../../../Data/Saree/lenghaCholiPage2'
import { kurta } from '../../../Data/kurta/kurta'
import { women_saree } from '../../../Data/Saree/women_saree'
import { mens_shoes } from '../../../Data/Men/mens_shoes'

export default function HomePage() {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_pants} sectionName={"Men's Pants"} />
        <HomeSectionCarousel data={women_saree} sectionName={"Saree "} />
        <HomeSectionCarousel data={kurta} sectionName={"Women's kurta"} />
        <HomeSectionCarousel data={lenghacholiPage2} sectionName={"Women's Lengha"} />
        <HomeSectionCarousel data={gouns} sectionName={"Women's Gouns"} />
        <HomeSectionCarousel data={mens_shoes} sectionName={"Men's shoes"} />
      </div>
    </div>
  )
}
