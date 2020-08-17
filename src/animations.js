import anime from 'animejs/lib/anime.es.js';

// let menuItem = document.querySelector("")

// console.log(menuItem)

export const rotateAnime = anime({
  targets: '',
  translateX: 100,
  rotate: '1turn',
  backgroundColor: 'blue',
  duration: 1000
});

export const selectorAnime = anime({
  // targets: menuItem,
  translateX: 200,
  // autoplay: false
});


