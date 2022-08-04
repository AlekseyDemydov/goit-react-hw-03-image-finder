import axios from 'axios';

const api = async (query, page) => {
  const searchParams = new URLSearchParams({
    q: query,
    page,
    key: '28561602-86e3b026ea867d304dbb7c510',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const { data } = await axios.get(`https://pixabay.com/api/?${searchParams}`);

  if (data.totalHits === 0) {
    throw new Error('Ничего не найдено');
  }
  return data;
};

export default api;
