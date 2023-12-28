import Image from 'next/image'
import ExternalLinkButton from '../components/ExternalLinkButton';

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
    <div>
      <ExternalLinkButton />
    </div>
     </div>
  )
}
