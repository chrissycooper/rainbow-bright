import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <input type="range" id="slider" name="slider"
         min="0" max="11">
      </input>
      <label htmlFor="slider">Choose Color</label>
    </main>
  )
}
