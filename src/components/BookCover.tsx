import React from 'react';
import { BookData } from '../types';
import { motion } from 'motion/react';
import { Code, Globe, Box, Zap, Layers, Circle, Smartphone, Anchor } from 'lucide-react';

interface BookCoverProps {
  book: BookData;
  className?: string;
}

export const BookCover: React.FC<BookCoverProps> = ({ book, className = '' }) => {
  const renderArt = () => {
    switch (book.coverStyle) {
      case 'foundations':
        return (
          <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
               <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rounded-full blur-xl"></div>
               <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
            </div>
            <h2 className="text-3xl font-bold text-indigo-900 tracking-tight z-10 mb-4 text-center">FOUNDATIONS</h2>
            <div className="relative z-10 w-32 h-32 bg-white/40 backdrop-blur-sm rounded-xl border border-white/50 flex items-center justify-center shadow-lg transform rotate-3 transition-transform group-hover:rotate-6">
              <Code size={48} className="text-indigo-600" />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full text-xs font-mono text-indigo-800 border border-indigo-200">
              CHILL HILL
            </div>
          </div>
        );
      case 'unified':
        return (
          <div className="relative w-full h-full overflow-hidden bg-zinc-900 p-4 flex flex-col">
            <h2 className="text-4xl font-bold text-gray-200 tracking-tighter z-10 mix-blend-difference">UNIFIED</h2>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-gray-700 to-gray-500 opacity-50 blur-sm"></div>
              <div className="absolute w-32 h-32 rounded-full border border-gray-400/30"></div>
              <Globe size={64} className="text-gray-300 absolute opacity-50" />
            </div>
          </div>
        );
      case 'horizons':
        return (
          <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-700 p-4 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200 italic transform -rotate-6 filter drop-shadow-lg" style={{ fontFamily: 'serif' }}>
              Horizons
            </h2>
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        );
      case 'renaissance':
        return (
          <div className="relative w-full h-full overflow-hidden bg-zinc-800 p-4 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700 to-zinc-900"></div>
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-500/50 mb-4 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
               <div className="w-full h-full bg-gradient-to-tr from-yellow-900 to-yellow-600"></div>
            </div>
            <h2 className="text-xl font-serif italic text-yellow-100 text-center">The Renaissance Edition</h2>
          </div>
        );
      case 'boring':
        return (
          <div className="relative w-full h-full overflow-hidden bg-[#e0e0e0] p-4 flex flex-col border-4 border-gray-300">
            <div className="bg-white border-2 border-gray-400 p-2 mb-2 w-fit">
              <h2 className="text-lg font-mono text-gray-700 uppercase tracking-widest">The Boring Edition</h2>
            </div>
            <div className="flex-1 bg-gray-300 border border-gray-400 inner-shadow p-4 flex items-center justify-center">
               <Box className="text-gray-500" size={48} />
            </div>
          </div>
        );
      case 'imagine':
        return (
          <div className="relative w-full h-full overflow-hidden bg-black p-4 flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 opacity-80 mix-blend-screen" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}></div>
            <h2 className="text-3xl font-black text-white uppercase leading-none z-10 relative mix-blend-overlay">
              IMAGINE<br/>MY BUSINESS
            </h2>
            <div className="absolute top-4 right-4 bg-pink-500 rounded-full p-2 animate-pulse">
                <Zap size={16} className="text-white" />
            </div>
          </div>
        );
      case 'built':
        return (
          <div className="relative w-full h-full overflow-hidden bg-[#d4c5b0] p-4 flex flex-col items-center">
            <div className="w-full h-full border-2 border-dashed border-orange-900/30 p-2 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-orange-900 uppercase text-center mb-2">BUILT TO LAST</h2>
                <Layers className="text-orange-800/60" size={64} />
                <div className="mt-4 grid grid-cols-3 gap-1 w-full opacity-50">
                    {[1,2,3,4,5,6].map(i => <div key={i} className="h-8 bg-orange-900/20 rounded-sm"></div>)}
                </div>
            </div>
          </div>
        );
      case 'connect':
        return (
          <div className="relative w-full h-full overflow-hidden bg-purple-100 p-4 flex flex-col">
            <h2 className="text-3xl font-bold text-purple-400 uppercase tracking-tighter mb-2 opacity-50">CONNECT TO CONSUMER</h2>
            <div className="flex-1 grid grid-cols-2 gap-2">
                <div className="bg-gradient-to-br from-purple-300 to-pink-300 rounded-lg transform rotate-3 shadow-md flex items-center justify-center"><Smartphone className="text-white" /></div>
                <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-lg transform -rotate-2 shadow-md flex items-center justify-center"><Circle className="text-white" /></div>
                <div className="bg-gradient-to-br from-green-300 to-emerald-300 rounded-lg transform rotate-1 shadow-md flex items-center justify-center"><Anchor className="text-white" /></div>
                <div className="bg-gradient-to-br from-yellow-300 to-orange-300 rounded-lg transform -rotate-3 shadow-md flex items-center justify-center"><Box className="text-white" /></div>
            </div>
             <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-purple-600 uppercase tracking-tighter z-10 drop-shadow-md">CONNECT TO CONSUMER</h2>
          </div>
        );
      default:
        return <div className="bg-gray-200 w-full h-full"></div>;
    }
  };

  return (
    <div className={`w-full h-full shadow-xl ${className}`}>
      {renderArt()}
    </div>
  );
};
