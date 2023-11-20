import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
const Gallery = ({ id }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<div>
			<Image
				onClick={openModal}
				className="rounded-lg"
				src={`/gallery/gallery-${id}.jpg`}
				width={1500}
				height={1100}
				alt="image"
			/>{" "}
			{isModalOpen && (
				<Modal
					closeModal={closeModal}
					imageSrc={`/gallery/gallery-${id}.jpg`}
				/>
			)}
		</div>
	);
};

export default Gallery;
