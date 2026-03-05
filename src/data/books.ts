import { BookData } from '../types';
import { motion } from 'motion/react';

export const books: BookData[] = [
  {
    id: 'renaissance',
    title: 'The Renaissance Edition',
    color: 'bg-zinc-900',
    textColor: 'text-white',
    coverStyle: 'renaissance'
  },
  {
    id: 'horizons',
    title: 'Horizons',
    color: 'bg-gradient-to-br from-purple-900 to-blue-900',
    textColor: 'text-white',
    coverStyle: 'horizons'
  },
  {
    id: 'boring',
    title: 'The Boring Edition',
    color: 'bg-gray-200',
    textColor: 'text-gray-800',
    coverStyle: 'boring'
  },
  {
    id: 'unified',
    title: 'UNIFIED',
    color: 'bg-zinc-800',
    textColor: 'text-white',
    coverStyle: 'unified'
  },
  {
    id: 'foundations',
    title: 'FOUNDATIONS',
    color: 'bg-blue-100',
    textColor: 'text-blue-900',
    coverStyle: 'foundations'
  },
  {
    id: 'imagine',
    title: 'IMAGINE MY BUSINESS',
    color: 'bg-black',
    textColor: 'text-white',
    coverStyle: 'imagine'
  },
  {
    id: 'built',
    title: 'BUILT TO LAST',
    color: 'bg-orange-100',
    textColor: 'text-orange-800',
    coverStyle: 'built'
  },
  {
    id: 'connect',
    title: 'CONNECT TO CONSUMER',
    color: 'bg-purple-200',
    textColor: 'text-purple-900',
    coverStyle: 'connect'
  }
];
