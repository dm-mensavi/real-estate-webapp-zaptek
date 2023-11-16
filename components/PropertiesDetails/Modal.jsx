import React from 'react'

const Modal = ({ closeModal, imageSrc }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
      <div className="max-w-[60vw] max-h-[70vh] mx-auto p-4 rounded-lg overflow-hidden">
        <img src={imageSrc} alt="modal" className="w-full h-auto"  />
      </div>
    </div>
  )
}

export default Modal

