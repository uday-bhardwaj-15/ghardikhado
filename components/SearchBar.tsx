'use client';

import React, { useState } from 'react';

const SearchBar = () => {
  const [transactionType, setTransactionType] = useState('Buy');

  return (
    <div className="relative z-20 flex justify-center -mt-16">
      <div className="w-full max-w-5xl p-4 bg-champagne-gray rounded-2xl shadow-soft">
        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setTransactionType('Buy')}
              className={`px-4 py-2 rounded-full ${transactionType === 'Buy' ? 'bg-warm-gold text-deep-ebony' : 'bg-transparent text-muted-charcoal'}`}>
              Buy
            </button>
            <button
              onClick={() => setTransactionType('Rent')}
              className={`px-4 py-2 rounded-full ${transactionType === 'Rent' ? 'bg-warm-gold text-deep-ebony' : 'bg-transparent text-muted-charcoal'}`}>
              Rent
            </button>
          </div>
          <input
            type="text"
            placeholder="Search by city, neighborhood or project name"
            className="flex-grow p-2 bg-transparent border-b-2 border-warm-gold focus:outline-none"
          />
          <select className="p-2 bg-transparent border-b-2 border-warm-gold focus:outline-none">
            <option>Flat</option>
            <option>Villa</option>
            <option>Home</option>
          </select>
          <input type="text" placeholder="Min Price" className="w-24 p-2 bg-transparent border-b-2 border-warm-gold focus:outline-none" />
          <input type="text" placeholder="Max Price" className="w-24 p-2 bg-transparent border-b-2 border-warm-gold focus:outline-none" />
          <select className="p-2 bg-transparent border-b-2 border-warm-gold focus:outline-none">
            <option>Bedrooms</option>
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>
          <button className="px-6 py-2 font-bold text-deep-ebony bg-warm-gold rounded-full">Search</button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden">
          <div className="flex items-center space-x-2 mb-4">
            <button
              onClick={() => setTransactionType('Buy')}
              className={`flex-1 py-2 rounded-full ${transactionType === 'Buy' ? 'bg-warm-gold text-deep-ebony' : 'bg-transparent text-muted-charcoal'}`}>
              Buy
            </button>
            <button
              onClick={() => setTransactionType('Rent')}
              className={`flex-1 py-2 rounded-full ${transactionType === 'Rent' ? 'bg-warm-gold text-deep-ebony' : 'bg-transparent text-muted-charcoal'}`}>
              Rent
            </button>
          </div>
          <input
            type="text"
            placeholder="Search by city, neighborhood or project name"
            className="w-full p-2 mb-2 bg-transparent border-b-2 border-warm-gold focus:outline-none"
          />
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-champagne-gray md:hidden">
            <button className="w-full px-6 py-3 font-bold text-deep-ebony bg-warm-gold rounded-full">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;