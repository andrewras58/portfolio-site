import Link from 'next/link'
import React from 'react'

const CloseButton = () => {
  return (
    <Link href={"/"}>
      <button className="bg-red-500 ease-in-out duration-100 hover:scale-125 font-bold text-white cursor-pointer absolute -top-2 -right-2 p-2 h-10 w-10 rounded-full">X</button>
    </Link>
  )
}

export default CloseButton