import React from 'react'
import SingleCarousel from "@/components/SingleCarousel"

type Props = {}

const SectionF = (props: Props) => {
  return (
    <div className='flex w-full h-[630px] justify-between items-center mt-10 max-sm:mt-56 max-lg:mb-32   max-lg:flex-col max-lg:justify-end '>
    <div className='text-black flex flex-col gap-6 ms-10 max-md:mb-10 font-medium'>
        
        <p className='text-3xl max-w-sm font-serif max-lg:max-w-2xl '>Store locator</p>
        <p className='max-w-xs font-normal max-lg:max-w-2xl'>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
        <div className=' max-lg:w-1/2 max-sm:w-11/12 flex gap-10 border-2 p-6 h-16 items-center justify-between hover:bg-black transition-all duration-300 hover:text-white'>
        Find a nearby store
                <p><i className="fa fa-arrow-right"></i></p>
                </div>
    
    </div>
    <div className='w-7/12 h-2/3 max-lg:h-1/2 max-sm:h-[400px] max-lg:w-full   '>
        <SingleCarousel/>
        
    </div>
</div>
  )
}

export default SectionF