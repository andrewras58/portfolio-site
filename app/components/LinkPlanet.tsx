import React from 'react'
import Planet from './Planet'
import HoverComponent from './HoverComponent'
import Link from 'next/link'

const LinkPlanet = ({link, image, name}: {link: string, image: string, name: string}) => {
  return (
    <HoverComponent description={"Click me!"}>
      <Link href={link} className="rounded-full">
        <Planet image={image} name={name}/>
      </Link>
    </HoverComponent>
  )
}

export default LinkPlanet