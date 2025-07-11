import React from 'react'
import Planet from './Planet'
import HoverComponent from './HoverComponent'
import Link from 'next/link'

const LinkPlanet = ({link, image}: {link: string, image: string}) => {
  return (
    <HoverComponent description={link}>
      <Link href={link} className="rounded-full">
        <Planet image={image}/>
      </Link>
    </HoverComponent>
  )
}

export default LinkPlanet