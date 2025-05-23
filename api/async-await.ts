import { anime, randomAnime, topAnime } from './axios';

export const fetchAnimeById = async (id: string | string[]) => {
  try {
    const { data } = await anime.get(`/${ id }`, {
      params: { sfw: true },
    });
    return data.data;
  } catch (error) {
    console.error('error fetching anime yamete cudasai:', error);
    throw error;
  }
};

export const fetchRandomAnime = async () => {
  try {
    const { data } = await randomAnime.get('', {
      params: { sfw: true },
    });
    return data.data;
  } catch (error) {
    console.log('error fetching random anime:', error);
    throw error;
  }
};

export const fetchSearchAnime = async (options: {
  q?: string;
  sort?: 'asc' | 'desc';
  order_by: string;
}) => {
  try {
    const { data } = await anime.get('', {
      params: {
        q: options.q,
        sort: options.sort,
        order_by: options.order_by,
        sfw: true,
      },
    });
    return data.data;
  } catch (error) {
    console.log('error fetching search anime:', error);
    throw error;
  }
};

export const fetchTopAnime = async () => {
  try {
    const { data } = await topAnime.get('', {
      params: { sfw: true },
    });
    return data.data;
  } catch (error) {
    console.log('error fetching top anime:', error);
    throw error;
  }
};