import { useState } from 'react';
import { Item } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

export const ImageGalleryItem = ({ image, tags, largeImage }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  
  const modalToggle = () => {
    setModalOpen(prevState => !prevState);
  };

  return (
    <Item>
      <img
        src={image}
        alt={tags}
        onClick={modalToggle}
        height="250px"
      />
      <Modal
        isOpen={isModalOpen}
        isClose={modalToggle}
        url={largeImage}
        tags={tags}
      />
    </Item>
  );
}

export default ImageGalleryItem;