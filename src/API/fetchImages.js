import axios from 'axios';

const apiKEY = '36272835-814780967e749f1d2663a198b';

const fetchImages = (searchQuery, page = 1) => {
  const apiURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKEY}`;
  return axios.get(apiURL).then(response => {
    return response.data;
  });
};

export default fetchImages;
