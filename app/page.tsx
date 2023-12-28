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
        width={500} // Set the desired width
        height={500} // Set the desired height
      />
     </div>
    <div className=" flex justify-evenly">
      <div>
      <a href="https://www.youtube.com/@minam2.0/"><button className=" bg-red-600 border border-black font-serif text-black text-xl rounded-3xl">subscribe me</button></a>
        </div>
      <div>
      <a href="https://www.instagram.com/minam_78pak/"><button className="bg-pink-600 border border-black font-serif text-black text-xl rounded-3xl">follow me</button></a>
        </div>
    </div>
     </div>
  )
}
