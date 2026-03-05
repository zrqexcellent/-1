import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu } from 'lucide-react';
import { books } from './data/books';
import { ShelfItem } from './components/ShelfItem';
import { ExpandedBook } from './components/ExpandedBook';
import { BookData } from './types';

export default function App() {
  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);

  return (
    <div className="min-h-screen bg-[#f3f3f3] text-zinc-900 font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 bg-[#f3f3f3]/90 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors cursor-pointer">
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black cursor-pointer transition-colors">
            <Search size={18} />
            <span>Search</span>
          </div>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 font-bold text-xl tracking-tight">
          Shopify <span className="text-gray-400 font-normal">Editions</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium hover:underline">shopify.com</a>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Sidebar / Description */}
          <div className="lg:w-1/4 pt-12 space-y-6 sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl font-light tracking-tight mb-6">
                Foundations
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-xs">
                Build strong foundations. The latest updates to the platform that powers the world's commerce.
              </p>
            </motion.div>
          </div>

          {/* Right Grid / Shelves */}
          <div className="lg:w-3/4 w-full">
            {/* Shelf 1 */}
            <div className="relative mb-24">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 relative z-10">
                {books.slice(0, 4).map((book) => (
                  <ShelfItem key={book.id} book={book} onClick={setSelectedBook} />
                ))}
              </div>
              {/* Shelf Graphic */}
              <div className="absolute bottom-[-25px] left-0 right-0 h-8 bg-gradient-to-b from-[#e5e5e5] to-[#d4d4d4] shadow-md rounded-sm transform perspective-1000 rotate-x-12 origin-top"></div>
              <div className="absolute bottom-[-40px] left-4 right-4 h-6 bg-black/10 blur-xl rounded-full"></div>
            </div>

            {/* Shelf 2 */}
            <div className="relative mb-24">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 relative z-10">
                {books.slice(4, 8).map((book) => (
                  <ShelfItem key={book.id} book={book} onClick={setSelectedBook} />
                ))}
              </div>
              {/* Shelf Graphic */}
              <div className="absolute bottom-[-25px] left-0 right-0 h-8 bg-gradient-to-b from-[#e5e5e5] to-[#d4d4d4] shadow-md rounded-sm transform perspective-1000 rotate-x-12 origin-top"></div>
               <div className="absolute bottom-[-40px] left-4 right-4 h-6 bg-black/10 blur-xl rounded-full"></div>
            </div>
          </div>

        </div>
      </main>

      {/* Expanded View Overlay */}
      <AnimatePresence>
        {selectedBook && (
          <ExpandedBook book={selectedBook} onClose={() => setSelectedBook(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
