"use client"

import React from 'react'
import Planet from './Planet'
import HoverComponent from './HoverComponent'
import Link from 'next/link'
import { useTransitionRouter } from 'next-view-transitions'

const LinkPlanet = ({link, image, name}: {link: string, image: string, name: string}) => {
  const router = useTransitionRouter();
  return (
    <HoverComponent description={"Click me!"}>
      <Link href={link} className="rounded-full" onClick={(e) => {
        e.preventDefault();
        router.push(link, {
          onTransitionReady: pageAnimation
        })
      }}>
        <Planet image={image} name={name}/>
      </Link>
    </HoverComponent>
  )
}

const pageAnimation = () => {
  const el = document.querySelector('main');
  if (!el) return;
  el.animate(
    [
      {
        opacity: 1,
        transform: 'scale(0)',
      },
      {
        opacity: 1,
        transform: 'scale(1)',
      }
    ],
    {
      duration: 200,
      easing: 'ease',
      fill: 'forwards',
    }
  )
}

export default LinkPlanet