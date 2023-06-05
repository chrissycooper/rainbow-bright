'use client';
import { ChangeEvent, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const fullConfig: ResolvedConfig<Config> = resolveConfig(tailwindConfig)

export default function Home() {
  const [currentColor, setCurrentColor] = useState(0)
  const [currentHex, setCurrentHex] = useState('')
  const [contrastImage, setContrastImage] = useState('')

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
    setCurrentHex(fullConfig.theme.colors[colors[currentColor].slice(3)])
  }

  const handleContrastImage = (event:any) =>{
    setContrastImage(event.target.value)
    console.log(contrastImage)
  }
  

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${contrastImage} bg-center bg-no-repeat`}>
      <div className={"bg-red-100 p-10 rounded-md flex items-center flex-col"}>
        <p>Select Contrast Image</p>
        <form onChange={event => handleContrastImage(event)} className={'flex'}>
          <input type="radio" id='trees' value='bg-trees' name='contrast_image'></input>
          <label className={"p-5"} htmlFor='trees'>trees</label>
          <input type="radio" id='moon' value='bg-moon' name='contrast_image'></input>
          <label className={"p-5"} htmlFor='moon'>moon</label>
          <input type="radio" id='texture' value='bg-texture' name='contrast_image'></input>
          <label className={"p-5"} htmlFor='texture'>texture</label>
          <input type="radio" id='none' value='' name='contrast_image'></input>
          <label className={"p-5"} htmlFor='none'>no image</label>
        </form>
      </div>
      <div id='circle' className={`rounded-full h-56 w-56 flex m-8 items-center justify-center ${colors[currentColor]}`}></div>
      <div className={"bg-red-100 p-10 rounded-md"}>
        <h1 className={`text-${colors[currentColor].slice(3)}`}>{currentHex}</h1>
        <input type="range" id="slider" name="slider"
          min="0" max="11" onChange={event => getColorValue(event)}>
        </input>
        <label htmlFor="slider">Choose Color</label>
      </div>
    </main>
  )
}
