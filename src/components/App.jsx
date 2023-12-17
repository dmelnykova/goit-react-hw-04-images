import { useEffect, useState } from 'react';
import { getImages } from './api'; 
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);

        const { hits, totalHits } = await getImages(query, page);

        setImages((prevImages) => [...prevImages, ...hits]);
        setTotalPages(Math.ceil(totalHits / 12));
      } catch (error) {
        console.error('Error fetching images:', error);
        toast.error('Ooops... Try again!');
      } finally {
        setIsLoading(false);
      }
    };

    if (query !== '') {
      fetchImages();
    }
  }, [query, page]);

  const onSubmitData = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const onLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar onSubmitData={onSubmitData} />
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery data={images} />}
      {totalPages > page && <Button onLoadMore={onLoadMore} />}
      <GlobalStyle />
      <Toaster />
    </div>
  );
};


