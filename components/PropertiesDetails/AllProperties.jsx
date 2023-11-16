
import Image from 'next/image'
import picture from '../../public/listing-5.jpg'
const AllProperties = () => {
  return (
    <div className='relative overflow-hidden rounded-lg'>
         <Image className=' relative hover:scale-105 hover:transition hover:duration-300 hover:ease-in-out ' src={picture} alt="image" />
         <p className='absolute top-4 right-4 bg-green-400 text-white p-1 rounded-lg px-2 text-sm'>FOR SALE </p>
         <div className='absolute flex justify-between items-center w-[100%] bottom-0 py-3 p-1 rounded-lg px-2 text-sm backdrop-blur-sm bg-white/30 '>
            <div><p className='text-white'>$4,000,000</p></div>
            <div><p className='text-white'>8 Beds</p></div>
            <div><p className='text-white'>2 Baths</p></div>
            <div><p className='text-white'>1 sqft</p></div>
         </div>
         <div className='absolute bottom-20 '> <div><p className='text-white'>Northridge Community</p></div></div>
         <p className='absolute bottom-32 text-white'>3-Bedroom Townhouse</p>
    </div>
  )
}

export default AllProperties