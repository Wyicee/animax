import { defineNuxtPlugin } from '#app';
import bemCn from 'bem-cn-lite';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('bemCn', bemCn);
});