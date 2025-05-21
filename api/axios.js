import axios from 'axios';

export const fetchById = axios.create({
  baseURL: 'https://api.jikan.moe/v4/anime',
  headers: { 'Content-Type': 'application/json' },
});

export const fetchRandom = axios.create({
  baseURL: 'https://api.jikan.moe/v4/random/anime',
  headers: { 'Content-Type': 'application/json' },
});

export const fetchSearch = axios.create({
  baseURL: 'https://api.jikan.moe/v4/anime',
  headers: { 'Content-Type': 'application/json' },
});
