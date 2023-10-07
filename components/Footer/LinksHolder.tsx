import Link from 'next/link'
import React from 'react'

const LinksHolder = ({heading, data}:{heading:string, data:string[]}) => {
  return (
    <div className='p-4 w-1/2 min-w-[200px] sm:w-1/4 md:w-1/5'>
            <p className='mb-5 border-b-2 pb-5 font-bold'>{heading}</p>
            {data?.map((item,key)=>(
              <div key={key} className='mb-2'>
              <Link href={`/${item}`}>{item}</Link>
              </div>
            ))}
            
            </div>
  )
}

export default LinksHolder