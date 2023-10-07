import React from 'react'
import {Headersiderbardata} from "@/components/Headers/data"


type Props = {}

const SecondHeader = (props: Props) => {
  const underlinecss = `relative after:absolute after:-bottom-12 after:left-[0%] after:-z-10 lg:after:w-[190%] max-md:after:w-[120%] max-sm:w-[140%]  after:w-[190%]  after:h-[2px] after:w-full after:-translate-y-2 after:bg-[#d9d8d1] after:content-['']`
  const aboveLineCss = `relative after:absolute after:-top-3 after:left-[0%] after:-z-10 lg:after:w-[100%] max-md:after:w-[100%] max-sm:w-[140%]  after:w-[120%]  after:h-[2px] after:w-full after:-translate-y-2 after:bg-[#d9d8d1] after:content-['']`
  return (
    <div className='bg-[#252525] p-2'>
        <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    
  
  <div className="drawer-content">
    {/* Page content here */}
    {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
    <div className='lg:text-center text-start p-2 lg:p-1 flex justify-center gap-4 items-center '>
    <label htmlFor="my-drawer" className='text-sm font-normal text-white hover:underline underline-offset-4 '>Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on orders over $400.</label>
    <p className='text-sm font-normal text-white'>+</p>
    </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-[50%] max-sm:w-[100%] min-h-full bg-[#f1f0e8] text-base-content">
      {/* Sidebar content here */}
      <div className='w-[98%] h-44 max-sm:h-14 flex justify-end'>
      <label htmlFor="my-drawer" className='text-xl font-semibold'>x</label>
      </div>
      
      <div className='flex justify-center max-lg:justify-start'>
      <div className={`w-[60%] flex flex-col justify-center items-start gap-14  `}>
      <p className={` text-sm font-medium`}>Shipping fees and delivery times</p>

      {
        Headersiderbardata.map((item)=>(
          <div style={{}} className={`w-full flex flex-col gap-5 `}>
            <p className={`text-sm font-medium ${aboveLineCss}`}>{item.title}</p>
            <div className='flex justify-between  text-base text-[#9a9a9c]'>
            <p>{item?.first}</p>
            <p>{item?.firstp}</p>
            </div>
            <div className=' flex justify-between  text-base text-[#9a9a9c]'>
            <p >{item?.second}</p>
            <p >{item?.secondp}</p>
            </div>
            <div className='flex justify-between  text-base text-[#9a9a9c]'>
            <p>{item?.third}</p>
            <p>{item?.thirdp}</p>
            </div>
            <div className='flex justify-between  text-base text-[#9a9a9c]'>
            <p>{item?.fourth}</p>
            <p >{item?.fourthp}</p>
            </div>
            
          </div>
        ))
      }
      </div>
      </div>
      
    </ul>
  </div>
</div>
  </div>
  )
}

export default SecondHeader