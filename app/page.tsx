import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <ul className="grid grid-cols-12 grid-rows-6h-screen border-spacing-6">
      <li className="colspan-1 rowspan-5 bg-black text-2xl text-white">minam</li>
    </ul>
      <div className=' center-slider'>
        <img src="/logo.png" alt="Slide 1" height={400} width={500} />
      </div>
    </div>
  )
}
