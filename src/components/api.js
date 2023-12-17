import axios from 'axios';

const KEY = '39897083-75dbac4ee3cbc91ee06f44220'

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, page = 1) => {
  
  const response = await axios.get(`/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;

};