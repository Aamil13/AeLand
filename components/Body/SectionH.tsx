import React from 'react'

type Props = {}

const SectionH = (props: Props) => {
  return (
    <div className='h-[440px] w-full flex gap-5 flex-col justify-center items-center'>
        <p className='text-3xl text-center'>‘Nothing is ever ended, everything only begun.’</p>
        <p className='text-sm font-semibold'>Sara Teasdale</p>
    </div>
  )
}

export default SectionH