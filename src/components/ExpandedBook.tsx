import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookData } from '../types';
import { BookCover } from './BookCover';
import { X, RefreshCw, ArrowRight, Globe } from 'lucide-react';

interface ExpandedBookProps {
  book: BookData;
  onClose: () => void;
}

export const ExpandedBook: React.FC<ExpandedBookProps> = ({ book, onClose }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-white/60 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* 3D Container */}
      <div className="relative w-full max-w-lg aspect-square" style={{ perspective: '1000px' }}>
        <motion.div
          layoutId={`book-${book.id}`}
          className="w-full h-full relative transition-all duration-700 ease-in-out"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div 
            className="absolute inset-0 shadow-2xl rounded-sm bg-white"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            <BookCover book={book} className="rounded-sm" />
            
            {/* Front Controls */}
            <div className="absolute bottom-8 left-0 w-full flex justify-center space-x-4 z-20">
               <button 
                 onClick={(e) => { e.stopPropagation(); setIsFlipped(true); }}
                 className="bg-white/90 backdrop-blur text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-white transition-colors flex items-center gap-2 cursor-pointer"
               >
                 Flip <RefreshCw size={14} />
               </button>
            </div>
          </div>

          {/* Back */}
          <div 
            className="absolute inset-0 shadow-2xl rounded-sm bg-white overflow-hidden"
            style={{ 
              backfaceVisibility: 'hidden', 
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)' 
            }}
          >
            <div className="w-full h-full p-8 flex flex-col items-center justify-center relative">
               {/* Circular Text Animation */}
               <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <div className="w-[150%] h-[150%] border-[40px] border-black rounded-full animate-[spin_10s_linear_infinite]"></div>
               </div>

               <div className="relative z-10 text-center space-y-8">
                  <div className="w-48 h-48 rounded-full border border-gray-200 flex items-center justify-center relative mx-auto">
                     <svg viewBox="0 0 100 100" className="w-full h-full absolute animate-[spin_20s_linear_infinite]">
                        <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text className="text-[10px] uppercase font-bold tracking-widest fill-gray-800">
                           <textPath href="#curve">
                              Shopify Editions • Winter '24 • Shopify Editions • Winter '24 •
                           </textPath>
                        </text>
                     </svg>
                     <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                        <Globe className="text-gray-400" />
                     </div>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                     <div className="w-16 h-16 bg-black text-white p-1">
                        {/* Fake QR Code */}
                        <div className="w-full h-full grid grid-cols-4 gap-0.5">
                           {[...Array(16)].map((_, i) => (
                              <div key={i} className={`bg-white ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`}></div>
                           ))}
                        </div>
                     </div>
                     <span className="text-xs font-mono text-gray-500">SCAN TO EXPLORE</span>
                  </div>
               </div>

               {/* Back Controls */}
               <div className="absolute bottom-8 left-0 w-full flex justify-center space-x-4 z-20">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                    className="bg-black/5 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-black/10 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <RefreshCw size={14} /> Flip Back
                  </button>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Action Button (Outside the flip container to stay visible/stable) */}
        <motion.div 
           initial={{ y: 50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-50"
        >
           <button className="bg-black text-white px-8 py-3 rounded-full font-medium shadow-xl hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
              Open <ArrowRight size={16} />
           </button>
        </motion.div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-gray-500 hover:text-black transition-colors bg-white/50 p-2 rounded-full backdrop-blur-sm cursor-pointer"
        >
          <X size={24} />
        </button>
      </div>
    </motion.div>
  );
};
