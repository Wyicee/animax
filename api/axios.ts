import axios from 'axios';

export const anime = axios.create({
  baseURL: 'https://api.jikan.moe/v4/anime',
  headers: { 'Content-Type': 'application/json' },
});

export const randomAnime = axios.create({
  baseURL: 'https://api.jikan.moe/v4/random/anime',
  headers: { 'Content-Type': 'application/json' },
});

export const topAnime = axios.create({
  baseURL: 'https://api.jikan.moe/v4/top/anime',
  headers: { 'Content-Type': 'application/json' },
});
