import React from 'react'

type Props = {}

const SectionD = (props: Props) => {
  return (
    <div className='flex flex-row-reverse w-full h-[630px] justify-between max-sm:mt-56  mt-10 max-lg:h-[800px] max-lg:mt-5  max-lg:flex-col-reverse max-lg:justify-between max-sm:my-36 max-lg:mb-36'>
    <div className='text-black flex justify-start flex-col gap-6 me-10 max-lg:ms-32 max-sm:ms-2 font-medium'>
        <p className='text-4xl max-w-sm font-serif max-lg:max-w-2xl '>Efficacious pairings</p>
        <p className='max-w-xs font-normal max-lg:max-w-2xl'>Our consultants have long combined complementary formulations to effect additional benefits for the skin. Incorporate this time-honoured practice into your regimen with our recommended bundles.</p>
        <div className=' max-lg:w-1/2 max-sm:w-11/12 flex gap-10 border-2 p-6 h-16 items-center justify-between hover:bg-black transition-all duration-300 hover:text-white'>
               Browse Skin Care Bundles
                <p><i className="fa fa-arrow-right"></i></p>
                </div>
    
    </div>
    <div className='w-7/12 h-4/5 max-lg:h-1/2 max-sm:h-[400px] max-lg:w-full  flex justify-start'>
        <img className='max-lg:w-11/12' src="https://www.aesop.com/u1nb1km7t5q7/2ck6SrjYyPRBPhURWsSMEn/b0e30e9520ff0afd24b9b78a1eeb858e/Aesop_Always_On_Homepage_Secondary_Skin_Care_Blending_Mid_Mobile_640x360px.jpg" alt="" />
    </div>
</div>
  )
}

export default SectionD