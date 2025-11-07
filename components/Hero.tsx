'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      gsap.fromTo(
        hero.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/images/hero-background.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-deep-ebony/50 to-transparent" />
      <div className="relative z-10 flex flex-col items-start max-w-4xl px-8 text-left text-white">
        <p className="text-sm font-bold tracking-widest uppercase text-soft-ivory">
          EXCLUSIVE COLLECTION
        </p>
        <h1 className="mt-4 text-6xl font-bold font-times-new-roman">
          Find Your Signature Home
        </h1>
        <p className="mt-6 text-lg max-w-2xl text-soft-ivory font-georgia">
          Curated listings of premium flats, villas and residences for sale & rent.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-8 py-3 font-bold text-deep-ebony bg-warm-gold rounded-full shadow-soft hover:scale-105 transform transition-transform duration-300">
            Explore Listings
          </button>
          <a
            href="#"
            className="relative inline-block font-bold text-warm-gold group"
          >
            Sell with Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-warm-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;