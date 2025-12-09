import Link from 'next/link'
import React from 'react'

function Button({clr ,bg,text , clas , reff , btnType , click}) {
  return (
    <Link href={reff || "#"}>
      <button type={btnType} onClick={click}  className={`${bg ? bg : "bg-[#196ae5]"} cursor-pointer border-none   ${clas }`}>{text}</button>
    </Link>
  )
}

export default Button
