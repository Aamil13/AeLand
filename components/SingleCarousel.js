"use client"

import React, { useEffect, useRef, useState } from 'react';


import { register } from "swiper/element/bundle";
register();





export default function App() {
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
            right:7%;
            
            width:10px;
            color: white;
          }
          .swiper-button-prev{
            left:7%;
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
   
      <swiper-container  slides-per-view="1" scrollbar='false' navigation="true" pagination="false"  ref={swiperRef} init="false">
      

          <swiper-slide class="  flex justify-center items-center" >
           <img className='' src="https://www.aesop.com/u1nb1km7t5q7/3QbfXA5cq32C5Fe7yWTGD3/76495dc853bf5714b0e0e3ce47032369/Aesop_Fashion_Walk_II_Mid_Mobile_640x360px.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="  flex justify-center items-center" >
           <img className='' src="https://www.aesop.com/u1nb1km7t5q7/3QbfXA5cq32C5Fe7yWTGD3/76495dc853bf5714b0e0e3ce47032369/Aesop_Fashion_Walk_II_Mid_Mobile_640x360px.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="  flex justify-center items-center" >
           <img className='' src="https://www.aesop.com/u1nb1km7t5q7/3QbfXA5cq32C5Fe7yWTGD3/76495dc853bf5714b0e0e3ce47032369/Aesop_Fashion_Walk_II_Mid_Mobile_640x360px.jpg" alt="" />
          </swiper-slide>
      
    
    </swiper-container>
    </>
  );
}
