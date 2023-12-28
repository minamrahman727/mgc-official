import next from "next"
import Image from 'next/image'


export default function Home() {
  return (
   <div>
    <div className="flex justify-evenly">
      <Image
        src="logo.png" // Path to your image from the public folder
        alt="Description of your image"
        width={200} // Set the desired width
        height={200} // Set the desired height
      /> <h1 className=" font-serif text-4xl text-blue-600 bg-gray-200 border border-blue-300 rounded-xl">Minam Group of Companies</h1>
    </div>
     <div className="flex justify-center">
     <h1 className="font-mono text-6xl text-red-600 ">site under construction!</h1>
      <Image
        src="pic.png" // Path to your image from the public folder
        alt="Description of your image"
        width={700} // Set the desired width
        height={700} // Set the desired height
      />
     </div>
    <div className=" flex justify-center font-sans text-md border border-red-400">
      <div>
      <a href="https://www.youtube.com/@minam2.0/">subscribe me</a>
        </div>
      <div>
      <a href="https://www.instagram.com/minam_78pak/">follow me</a>
        </div>
    </div>
     </div>
  )
}
