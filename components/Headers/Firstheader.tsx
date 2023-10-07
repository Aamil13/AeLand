import Link from 'next/link'
import React from 'react'


type Props = {}

const Firstheader = (props: Props) => {
  return (
    <div className='bg-[#c2c2af] p-2'>
      <div className='lg:text-center text-start p-2 lg:p-1'>
      <p className='text-sm font-thin text-[#695b61]'>Trained Aesop consultants are available to provide bespoke skin care advice.<Link href="/" className='hover:underline font-semibold ps-4'>Book a video consultation</Link> </p>
      </div>
    </div>
  )
}

export default Firstheader