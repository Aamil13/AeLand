import React from 'react'
import CarouselMain from '@/components/Carouselll';
import { cDataOne } from '@/components/Data'

type Props = {}

const SectionE = (props: Props) => {
  return (
    <div className='w-full h-screen'>
    <CarouselMain data={cDataOne}/>
    </div>
  )
}

export default SectionE