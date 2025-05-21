import { fetchById, fetchRandom, fetchSearch } from './axios.js';

export const fetchAnime = async (id) => {
  try {
    const { data } = await fetchById.get(`/${ id }`);
    return data.data;
  } catch (error) {
    console.error('error fetching anime yamete cudasai:', error);
    throw error;
  }
};

export const fetchRandomAnime = async () => {
  try {
    const { data } = await fetchRandom.get();
    return data.data;
  } catch (error) {
    console.log('error fetching random anime:', error);
    throw error;
  }
};

export const fetchSearchAnime = async (query) => {
  try {
    const { data } = await fetchSearch.get('', {
      params: { q: query },
    });
    return data.data;
  } catch (error) {
    console.log('error fetching search anime:', error);
    throw error;
  }
};