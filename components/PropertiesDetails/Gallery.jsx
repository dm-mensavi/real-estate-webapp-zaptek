import React,{useState} from 'react'
import Image from 'next/image'
import picture from '../../public/listing-5.jpg'
import Modal from './Modal'
const Gallery = () => {
  const [isModalOpen,setIsModalOpen] = useState(false)
    const openModal = () => {
      setIsModalOpen(true)
    }
    const closeModal = () => {
      setIsModalOpen(false)
    }
   return (
    <div>
         <Image onClick={openModal} className='rounded-lg' src={picture} alt="image" />  {isModalOpen && (
        <Modal closeModal={closeModal} imageSrc={picture.src} />
      )}
    </div>
  )
}

export default Gallery