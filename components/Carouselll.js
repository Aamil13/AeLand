"use client"

import React, { useEffect, useRef, useState } from 'react';


import { register } from "swiper/element/bundle";
register();





export default function App({data}) {
  const swiperRef = useRef(null);
  const [scrensize, setScreenSize] = useState("")
 
  useEffect(()=>{
   
    window.addEventListener("resize", () => {
      setScreenSize (window.innerWidth);
  });
  return () => {
      window.removeEventListener("resize", () => {
        setScreenSize(window.innerWidth)
      })
  }
  
}, [scrensize]);
// console.log(scrensize);



  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      // scrollbar:true,
      // These are new...
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: black;
            padding: 15px 30px;
            right:0;
            
            width:10px;
            color: white;
          }
          .swiper-button-prev{
            left:0;
          }
          .swiper-scrollbar{
            margin: 100px 50px;
            width:80% !important;
          }
          .swiper-scrollbar-drag{
            top:0px;
            width:40% !important;
          }
         
      `,
      ],
    };


    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  // console.log(data);
  return (
    <>
    {scrensize <= 1025 &&
        <div className='flex flex-col sm:flex-row justify-between gap-4 items-start text-black w-full px-[80px] '>
        <div className='flex flex-col gap-4 items-start text-black'>
        <p className='font-semibold text-lg'>{data[0].h1}</p>
        <p className='font-serif text-[29px]'>{data[0].h2}</p>
        </div>
        <div className='flex flex-col gap-4 items-start text-black'>
        <p className='text-sm max-w-sm'>{data[0].des}</p>
        <p>{data[0].last} <i className="fa fa-arrow-right"></i></p>
        </div>
      </div>
    }
      <swiper-container  slides-per-view={scrensize <= 650 ? "1" : scrensize <= 1024 ? "2" : "3" } scrollbar='true' navigation="true" pagination="false"  ref={swiperRef} init="false">
      {/* <swiper-slide  class="blue-slide  h-screen flex justify-center items-center">Slide 1</swiper-slide> */}
      {
        
          scrensize >= 1025 ? 
        data.map((item,key)=>(

          <swiper-slide  key={key}  class="h-screen  flex justify-center items-center">
           
            {item?.first === true  ?
              <div className='flex flex-col gap-4 items-start text-black w-96 px-[80px] '>
                <p className='font-semibold text-lg'>{item.h1}</p>
                <p className='font-serif text-[24px]'>{item.h2}</p>
                <p className='text-sm'>{item.des}</p>
                <p>{item.last}<i className="fa fa-arrow-right"></i></p>
              </div>
            :
              <div>
                <img className='w-80' src={item.img} alt="" />
                <p>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            }
          </swiper-slide>

        ))
      

          :
          
        
        data.slice(1,-1).map((item,key)=>(
          <swiper-slide key={key}  class=" h-screen flex justify-center items-center">
            
              <div>
                <img className='w-80' src={item.img} alt="" />
                <p>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            
          </swiper-slide>

        ))
      }
    
    </swiper-container>
    </>
  );
}
