import { fetchById, fetchRandom } from './axiosHeading.js';

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
    console.log('error fetching anime yamete cudasai:', error);
    throw error;
  }
};

