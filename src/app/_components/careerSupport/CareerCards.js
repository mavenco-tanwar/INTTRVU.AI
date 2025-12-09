import Image from 'next/image'
import React from 'react'

function CareerCards({image , text}) {
  return (
<div className='shadow-xl rounded w-full sm:w-[300px] max-w-[300px]'>
<div className='w-[300px] relative h-[200px]'>
    <Image src={image} fill alt={text} className="object-cover" />
</div>
  <p className='text-[18px] sm:text-[21px] p-4 font-poppins font-medium text-center'>
    {text}
  </p>
</div>

  )
}

export default CareerCards
