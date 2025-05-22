import { anime, randomAnime, topAnime } from './axios.js';

export const fetchAnimeById = async (id) => {
  try {
    const { data } = await anime.get(`/${ id }`);
    return data.data;
  } catch (error) {
    console.error('error fetching anime yamete cudasai:', error);
    throw error;
  }
};

export const fetchRandomAnime = async () => {
  try {
    const { data } = await randomAnime.get();
    return data.data;
  } catch (error) {
    console.log('error fetching random anime:', error);
    throw error;
  }
};

export const fetchSearchAnime = async (query) => {
  try {
    const { data } = await anime.get('', {
      params: { q: query },
    });
    return data.data;
  } catch (error) {
    console.log('error fetching search anime:', error);
    throw error;
  }
};

export const fetchTopAnime = async () => {
  try {
    const { data } = await topAnime.get();
    return data.data;
  } catch (error) {
    console.log('error fetching top anime:', error);
    throw error;
  }
};