import React from 'react'
// import firstVed from "@/Components/Body/firstvvv.mp4"

type Props = {}

const SectionB = (props: Props) => {
  return (
    <div className='flex w-full h-[630px] justify-between items-center mt-10 max-lg:h-[1200px] max-lg:mt-52 max-lg:flex-col max-lg:justify-end '>
        <div className='text-black flex flex-col gap-6 ms-10 font-medium'>
            <p>The Athenaeum</p>
            <p className='text-4xl max-w-sm font-serif max-lg:max-w-2xl '>Ouranon: the sixth Othertopias fragrance</p>
            <p className='max-w-xs font-normal max-lg:max-w-2xl'>Each of the six Othertopias fragrances is a doorway to another realm, real and imagined. Ouranon—a woody, spicy, resinous scent, distinguished by Frankincense, Hay and Myrrh—is the final chapter of that journey. </p>
            <div className=' max-lg:w-1/2 max-sm:w-11/12 flex gap-10 border-2 p-6 h-16 items-center justify-between hover:bg-black transition-all duration-300 hover:text-white'>
                    Step inside Ouranon
                    <p><i className="fa fa-arrow-right"></i></p>
                    </div>
        
        </div>
        <div className='w-7/12 h-2/3 max-lg:h-1/2 max-sm:h-[400px] max-lg:w-full  flex justify-end'>
            <video className='max-lg:w-11/12  ' autoPlay muted loop src={"https://videos.ctfassets.net/u1nb1km7t5q7/6OYv521nP7i1wAaGz5dhqP/c83a3696a09e71fa09c5a869f9b2c3cf/Aesop_Othertopias_2023_Web_Othertopias_Page_Secondary_4_Mid_Mobile_1920x1080px.mp4"}></video>
        </div>
    </div>
  )
}

export default SectionB