import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-evenly">
      <Image
        src="logo.png" // Path to your image from the public folder
        alt="Description of your image"
        width={200} // Set the desired width
        height={200} // Set the desired height
      /> <h1 className=" font-serif text-4xl text-red-600 bg-gray-400 rounded-xl">Minam Group of Companies</h1>
    </div>
  )
}
