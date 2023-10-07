"use client"
import React,{useEffect} from 'react'
import "@/components/Headers/navbar.css"

type Props = {}

const Navbar = (props: Props) => {
  let prevScrollpos : number 

  useEffect(()=>{
    prevScrollpos = window.scrollY;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
         document.getElementById("navbar").style.top = "0";
  
        } else {
          document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
        if(prevScrollpos === 0){
          document.getElementById("navbar").style.display = "none";
        }else{
          document.getElementById("navbar").style.display = "block";
        }
      };
  })
  
  
  useEffect(()=>{
      if(prevScrollpos === 0){
          document.getElementById("navbar").style.display = "none";
        }else{
          document.getElementById("navbar").style.display = "block";
        }
  },[])
  
  
      return (
          <>
          <div className='w-full pt-4 pb-3 px-5 shadow-sm' id='navbar' style={{backgroundColor:"#fffef2"}}>
              <div className='flex justify-between nav-div'>
                  <div className='flex justify-evenly items-center first-flex '>
                  <p className='link-p p-1'>Skin Care</p>
                  <p className='link-p p-1'>Body & Hand</p>
                  <p className='link-p p-1'>Hair</p>
                  <p className='link-p p-1'>Fragnance</p>
                  <p className='link-p p-1'>Home</p>
                  <p className='link-p p-1'>Kits & Travel</p>
                  <p className='link-p p-1'>Gifts</p>
                  <p className='link-p shop-p'>Shop</p>
                  <p className='link-p'>Read</p>
                  <p className='link-p'>Stores</p>
                  <p className='link-p text-white'><i className="fa fa-search"></i></p>
                  </div>
                  <div className='flex first-flex'>
                  <p className='link-p'>Login</p>
                  <p className='link-p mx-3'>Cart</p>
                  </div>
  
                  <div className='sec-flex'>
                  <a href='' style={{textDecoration:"none",color:'black'}}><h1 className=''>Aesop</h1></a>
              </div>
              <div className='sec-flex'>
          <div className='flex'>
          <p className='link-p text-white'><i className="fa fa-search"></i></p>
          <p className='link-p mx-4'>Cart</p>
          <p className='link-p'><i className="fa fa-bars"></i></p>
          
          </div>
          </div>
  
              </div>
          </div>
          
          {/* back div dark */}
          <div className='w-full pt-4 pb-3 px-5 div-one' style={{backgroundColor:"#fffef2"}}>
              <div className='flex justify-between nav-div'>
                  <div className='flex justify-evenly items-center'>
                  <p className=' link-p p-1'>Skin Care</p>
                  <p className=' link-p p-1'>Body & Hand</p>
                  <p className=' link-p p-1'>Hair</p>
                  <p className=' link-p p-1'>Fragnance</p>
                  <p className=' link-p p-1'>Home</p>
                  <p className=' link-p p-1'>Kits & Travel</p>
                  <p className=' link-p p-1'>Gifts</p>
                  <p className=' link-p shop-p'>Shop</p>
                  <p className=' link-p'>Read</p>
                  <p className=' link-p'>Stores</p>
                  <p className=' link-p p-1'>Facial Appointments</p>
                  <p className=' link-p '><i className="fa fa-search"></i></p>
                  </div>
                  <div className='flex'>
                  <p className=' link-p'>Login</p>
                  <p className=' link-p'>Cabinet</p>
                  <p className=' link-p mx-3'>Cart</p>
                  </div>
              </div>
          </div>
          <div className='w-full pt-4 pb-3 px-5 div-two z-10'>
          <div className='flex justify-between'>
              <div>
                  <a href='' style={{textDecoration:"none",color:'white'}}><h1 className='text-white'>Aesop</h1></a>
              </div>
          <div className='flex'>
          <p style={{color:"white"}} className='text-white link-p '><i className="fa fa-search"></i></p>
          <p style={{color:"white"}} className='text-white link-p mx-4'>Cart</p>
          <p style={{color:"white"}} className='text-white link-p'><i className="fa fa-bars"></i></p>
          
          </div>
          </div>
          </div>
          </>
      )
}

export default Navbar