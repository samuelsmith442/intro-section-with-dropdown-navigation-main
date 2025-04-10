'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-32 lg:px-40 py-8 md:py-16 gap-10 min-h-[calc(100vh-80px)]">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col">
        <div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-almost-black mb-8 md:mb-12 leading-tight">
            Make remote work
          </h1>
          <p className="text-medium-gray text-base md:text-lg mb-8 md:mb-12 max-w-md mx-auto md:mx-0">
            Get your team in sync, no matter your location. Streamline processes, 
            create team rituals, and watch productivity soar.
          </p>
          <button className="bg-almost-black text-almost-white hover:bg-almost-white hover:text-almost-black border-2 border-almost-black font-bold py-3 px-8 rounded-2xl transition-colors">
            Learn more
          </button>
        </div>
        
        {/* Client Logos - Fixed position at bottom */}
        <div className="flex justify-between items-center gap-4 md:gap-10 mt-auto pt-10 md:pt-16 pb-4 md:pb-0">
          <div className="h-[20px] w-[114px] relative">
            <Image 
              src="/images/client-databiz.svg" 
              alt="Databiz" 
              fill
              style={{ objectFit: 'contain' }}
              sizes="114px"
            />
          </div>
          <div className="h-[36px] w-[73px] relative">
            <Image 
              src="/images/client-audiophile.svg" 
              alt="Audiophile" 
              fill
              style={{ objectFit: 'contain' }}
              sizes="73px"
            />
          </div>
          <div className="h-[20px] w-[90px] relative">
            <Image 
              src="/images/client-meet.svg" 
              alt="Meet" 
              fill
              style={{ objectFit: 'contain' }}
              sizes="90px"
            />
          </div>
          <div className="h-[24px] w-[83px] relative">
            <Image 
              src="/images/client-maker.svg" 
              alt="Maker" 
              fill
              style={{ objectFit: 'contain' }}
              sizes="83px"
            />
          </div>
        </div>
      </div>
      
      {/* Right Content - Hero Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="hidden md:block relative w-full max-w-[480px] h-[640px]">
          <Image 
            src="/images/image-hero-desktop.png" 
            alt="Hero" 
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 480px"
            priority
          />
        </div>
        <div className="md:hidden relative w-full h-[281px]">
          <Image 
            src="/images/image-hero-mobile.png" 
            alt="Hero" 
            fill
            style={{ objectFit: 'contain' }}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
