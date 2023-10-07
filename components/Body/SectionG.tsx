import React from 'react'

type Props = {}

const SectionG = (props: Props) => {
  return (
    <div className='flex flex-row-reverse w-full h-[630px] justify-between  mt-10 max-lg:h-[800px] max-lg:mt-5  max-lg:flex-col-reverse max-lg:justify-between max-sm:my-36 max-lg:mb-36'>
    <div className='text-black flex justify-start flex-col gap-6 me-40 max-sm:me-20 max-lg:ms-32 max-sm:ms-2 font-medium'>
        <p className='text-xl max-w-sm font-serif max-lg:max-w-2xl '>Facial Appointments</p>
        <p className='max-w-xs max-sm:text-2xl  text-4xl font-normal max-lg:max-w-2xl'>Composure for the skin and senses</p>
        <p className='max-w-xs font-normal max-lg:max-w-2xl'>For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.</p>
        <div className=' max-lg:w-1/2 max-sm:w-11/12 flex gap-10 border-2 p-6 h-16 items-center justify-between hover:bg-black transition-all duration-300 hover:text-white'>
               Learn more
                <p><i className="fa fa-arrow-right"></i></p>
                </div>
    
    </div>
    <div className='w-7/12 h-4/5 max-lg:h-1/2 max-sm:h-[400px] max-lg:w-full  flex justify-start'>
        <img className='max-lg:w-11/12' src="https://www.aesop.com/u1nb1km7t5q7/42B1XVC211ivzeEyQ3ZmjB/0cf1fc8119933c67ba6f946e7be6f2d0/Aesop-Generic-Images-Facial-Appointments-1-Mid-Tablet-1400x788px.jpg" alt="" />
    </div>
</div>
  )
}

export default SectionG