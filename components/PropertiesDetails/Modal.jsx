import Image from "next/image";

const Modal = ({ closeModal, imageSrc }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
      onClick={closeModal}
    >
      <div className="lg:w-[60vw] lg:h-[70vh] md:w-[70vw] md:h-[80vh] sm:w-[90vw] sm:h-[90vh] mx-auto p-4 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt="modal"
          width={1600}
          height={1000}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Modal;
