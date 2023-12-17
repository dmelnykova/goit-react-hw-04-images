import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';


const ImageGallery = ({ data, isSearchPerformed }) => {
  
  return (
    <Gallery>
      {data && data.map(item => {
        const { id, webformatURL, largeImageURL, tags } = item;
        return (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            largeImage={largeImageURL}
            tags={tags}
          />
        );
      })}
    </Gallery>
  );
};

export default ImageGallery;
