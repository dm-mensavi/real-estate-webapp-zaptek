
import Image from 'next/image'
import picture from '../../public/listing-5.jpg'
const Gallery = () => {
  return (
    <div>
         <Image className='rounded-lg' src={picture} alt="image" />
    </div>
  )
}

export default Gallery