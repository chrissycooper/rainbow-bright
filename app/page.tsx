'use client';
import { ChangeEvent } from 'react'

export default function Home() {
  const colors = [
    '#ff0000',
    '#ff5300',
    '#ffa500',
    '#ffd200',
    '#ffff00',
    '#80c000',
    '#008000',
    '#004080',
    '#0000ff',
    '2600c1',
    '#4b0082'
  ]

  const getColorValue = (event:ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <input type="range" id="slider" name="slider"
         min="0" max="11" onChange={event => getColorValue(event)}>
      </input>
      <label htmlFor="slider">Choose Color</label>
    </main>
  )
}
