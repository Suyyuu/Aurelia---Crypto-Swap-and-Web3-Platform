'use client';

import { useEffect, useRef, useState, TouchEvent } from 'react';
import { motion } from 'framer-motion';

interface Card {
  id: number;
  title: string;
  desc: string;
  imageSrc: string;
  bgImage: string;
}

const cards: Card[] = [
  { id: 1, title: '5x faster production', desc: 'environments via zenith meta-brain', imageSrc: "/slider1.svg", bgImage: "/wave.png" },
  { id: 2, title: '300k+ active members', desc: 'in community, screams Support', imageSrc: "/slider2.svg", bgImage: "/wave.png" },
  { id: 3, title: 'Seamless Integration', desc: 'across multiple platforms', imageSrc: "/slider3.svg", bgImage: "/wave.png" },
  { id: 4, title: 'AI-powered insights', desc: 'for data-driven decisions that drive growth', imageSrc: "/slider4.svg", bgImage: "/wave.png" },
];


export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [manualChange, setManualChange] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % cards.length);
    }, 4000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (manualChange) {
      resetInterval();
      setManualChange(false);
    }
  }, [manualChange]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      let newIndex = currentIndex;
      if (diff > 50) {
        newIndex = (currentIndex + 1) % cards.length;
      } else if (diff < -50) {
        newIndex = (currentIndex - 1 + cards.length) % cards.length;
      }
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        setManualChange(true);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleIndicatorClick = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      setManualChange(true);
    }
  };

  return (
    <div
      className="relative w-[80%] min-h-[400px] border border-amber-50 mx-auto overflow-hidden py-6"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide container with height control */}
      <div className="relative w-full min-h-[280px] flex items-stretch">
        {cards.map((card, index) => (
          <motion.div
          key={card.id}
          className={`w-full h-full bg-cover bg-center transition-opacity duration-500 ease-in-out p-5 rounded-lg shadow-lg flex flex-col justify-between absolute top-0 left-0 ${
            index === currentIndex ? 'opacity-100 relative z-10' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            backgroundImage: `url(${card.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          initial={false}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black/60 p-4 rounded-md">
            <p className="text-white font-semibold">
              {card.title}{' '}
              <span className="text-[#c3c3c3] font-normal">{card.desc}</span>
            </p>
          </div>
          {/* <Image src={card.imageSrc} alt={card.desc} width={28} height={28} /> */}
        </motion.div>
        
        ))}
      </div>

      {/* Indicator Bars */}
      <div className="absolute bottom-5 left-0 w-full flex space-x-5 px-4 mt-6">
        {cards.map((_, index) => (
          <div
            key={index}
            className="h-[5px] w-full bg-[#18191b] rounded-full cursor-pointer overflow-hidden"
            onClick={() => handleIndicatorClick(index)}
          >
            <motion.div
              key={currentIndex === index ? `fill-${Date.now()}` : `empty-${Date.now()}`}
              className="h-full bg-[#242628]"
              initial={{ width: '0%' }}
              animate={{ width: currentIndex === index ? '100%' : '0%' }}
              transition={{ duration: currentIndex === index ? 4 : 0 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
