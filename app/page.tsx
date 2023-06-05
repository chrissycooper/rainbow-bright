'use client';
import { ChangeEvent, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

export default function Home() {
  const [currentColor, setCurrentColor] = useState(0)

  const colors = [
    'bg-cherry-red',
    'bg-aerospace-orange',
    'bg-orange-juice',
    'bg-gold',
    'bg-yellow',
    'bg-apple-green',
    'bg-green',
    'bg-yale-blue',
    'bg-blue',
    'bg-indigo',
    'bg-violet',
    'bg-lavender'
  ]

  const getColorValue = (event:ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(parseInt(event.target.value))
    console.log(fullConfig.theme.colors[colors[currentColor].slice(3)])
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div id='circle' className={`rounded-full h-16 w-16 flex items-center justify-center ${colors[currentColor]}`}></div>
      <input type="range" id="slider" name="slider"
         min="0" max="11" onChange={event => getColorValue(event)}>
      </input>
      <label htmlFor="slider">Choose Color</label>
    </main>
  )
}
