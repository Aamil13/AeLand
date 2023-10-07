"use client"

import React,{useState,useRef,useEffect,CSSProperties} from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import hero1 from "@/static/Aesop_Bar_Soaps_2023_Web_Homepage_1_Primary_Full_Bleed_Desktop_2880x1044px.jpg"
import hero2 from "@/static/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg"
import hero3 from "@/static/Aesop_Othertopias_2023_Web_Homepage_3_Primary_Full_Bleed_Desktop_2880x1044px.jpg"
import styles from './style.module.css'

const imageslide =[
    {img:hero3,
     t1:"A new Othertopias fragrance",
     t2: "Ouranon Eau de Parfum",
     t3:"A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.",
     t4: "Ouranon",
     bgcolor:"#5b3e45"
    },
    {img:hero1,t1:"Hand and Body Care",
    t2: "Buoyant bodies",
    t3:"Three joyful elements of bathing—cleansing, scrubbing and hydrating—are facilitated by formulations boasting a variety of benefits and aromas, ensuring optimal satisfaction for all.",
    t4: "Body & Hand Care",
    bgcolor:"#5b3e45"
    },
    {img:hero2,t1:"Supporting city skin",
    t2: "Parsley Seed Anti-Oxidant Intense Serum",
    t3:"Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind.",
    t4: "the formulation",
    bgcolor:"#5b3e45"
    },
]

const buttonStyle: CSSProperties = {
    width: "30px",
    background: 'none',
    border: '0px',
    position:"absolute",
    
    // top:"52.2%",
    // backgroundColor:"lightgrey"
    
    
};

const properties = {
    prevArrow: <button className={`text-2xl top-[104%] max-lg:top-[53.4%] max-lg:text-white max-sm:left-[10%]  ${styles.btnsss} `} style={{ ...buttonStyle, }}>&lt;</button>,
    nextArrow: <button className='text-2xl top-[104%] max-lg:top-[53.4%] max-lg:text-white max-sm:left-[14%] right-[45%]' style={{ ...buttonStyle }}>&gt;</button>
}

type Props = {}

// const indicators = (index) => (<div className={styles.indicator}>{index }</div>);
// const indicators = (index) => (<div className={styles.indicator}>{index + 1}</div>);
const SectionA = (props: Props) => {
    const [activeindex, setActiveindex] = useState<number>(0)
  return (
    <section className='h-screen'>
 <Slide {...properties}  onChange={(e)=>console.log("changes",setActiveindex(e))
 } >
        {imageslide.map((item,key)=>(
            <div key={key} className={`relative max-lg:bg-[#5b3e45] `} >
            <img className='h-[660px] w-full object-cover max-sm:object-fill' src={item.img.src} alt="" />
            <div className='absolute  z-10 top-24 text-white flex p-5 gap-16'>
                <h1 className='text-3xl p-4 max-sm:hidden'>Aesop<span style={{fontSize:"20px"}}>&copy;</span></h1>
                <div className='font-semibold max-lg:hidden flex flex-col gap-5 mt-2'>
                    <p>{item?.t1}</p>
                    <p className='text-3xl'>{item?.t2}</p>
                    <p className='max-w-xs'>{item?.t3}</p>
                    <div className='flex gap-10 border-2 p-6 h-16 items-center justify-between hover:bg-white transition-all duration-300 hover:text-black'>
                    Discover {item?.t4}
                    <p><i className="fa fa-arrow-right"></i></p>
                    </div>
                </div>
            </div>

            {/* bottom des */}
            <div className='bg-[#5b3e45] mt-0 h-[600px] lg:hidden'>
            <div className='font-semibold flex flex-col items-start justify-center ms-[30%] max-sm:ms-10  pt-24 gap-5 mt-2 text-white'>
                    <p className=''>{item.t1}</p>
                    <p className='text-3xl'>{item.t2}</p>
                    <p className='max-w-sm'>{item.t3}</p>
                    <div className='flex max-sm:w-[95%] gap-10 border-2 p-6 h-16 items-center justify-between hover:bg-white transition-all duration-300 hover:text-black'>
                    Discover {item.t4}
                    <p><i className="fa fa-arrow-right"></i></p>
                    </div>
                </div>
            </div>
           </div>
        ))}
         
        </Slide>
        {/* <p className='absolute top-[113%] max-sm:top-[111%] left-[49%] mt-1 max-lg:text-white max-sm:left-[9%]'>{activeindex + 1}/3</p> */}
    </section>
  )
}

export default SectionA