import React from 'react';
import { motion } from 'motion/react';
import { BookData } from '../types';
import { BookCover } from './BookCover';

interface ShelfItemProps {
  book: BookData;
  onClick: (book: BookData) => void;
}

export const ShelfItem: React.FC<ShelfItemProps> = ({ book, onClick }) => {
  return (
    <div className="relative group perspective-500" onClick={() => onClick(book)}>
      <motion.div
        layoutId={`book-${book.id}`}
        className="w-full aspect-square cursor-pointer relative z-10 transition-transform duration-300 group-hover:-translate-y-4 group-hover:rotate-x-2"
        whileHover={{ scale: 1.02 }}
      >
        <BookCover book={book} className="rounded-sm shadow-md group-hover:shadow-2xl transition-shadow duration-300" />
        
        {/* Hover Overlay Details */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 rounded-sm">
           <span className="bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-black">Open</span>
           <span className="bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-black">Details</span>
        </div>
      </motion.div>
      
      {/* Reflection/Shadow on Shelf */}
      <div className="absolute -bottom-4 left-2 right-2 h-4 bg-black/20 blur-md rounded-[100%] opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};
