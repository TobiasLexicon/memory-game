import { useContext } from 'react';

import MemoryContext from './memoryContext';

export const newGame2 = [
  { image: 1, reveal: false, play: true },
  { image: 2, reveal: false, play: true },
  { image: 3, reveal: false, play: true },
  { image: 4, reveal: false, play: true },
  { image: 5, reveal: false, play: true },
  { image: 6, reveal: false, play: true },
  { image: 7, reveal: false, play: true },
  { image: 8, reveal: false, play: true },
  { image: 1, reveal: false, play: true },
  { image: 2, reveal: false, play: true },
  { image: 3, reveal: false, play: true },
  { image: 4, reveal: false, play: true },
  { image: 5, reveal: false, play: true },
  { image: 6, reveal: false, play: true },
  { image: 7, reveal: false, play: true },
  { image: 8, reveal: false, play: true }
];

export const NewGame = () => {
  const size = useContext(MemoryContext);

  const numbers = [];
  for (let i = 1; i < size + 1; i++) {
    numbers.push(i);
  }
  const images = [];
  numbers.map(number => {
    images.push({ image: number, reveal: false, play: true });
    images.push({ image: number, reveal: false, play: true });
  });
  return images;
};
