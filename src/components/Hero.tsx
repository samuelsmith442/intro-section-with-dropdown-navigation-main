'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-32 lg:px-40 py-8 md:py-16 gap-10">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-almost-black mb-8 md:mb-12 leading-tight">
          Make remote work
        </h1>
        <p className="text-medium-gray text-base md:text-lg mb-8 md:mb-12 max-w-md mx-auto md:mx-0">
          Get your team in sync, no matter your location. Streamline processes, 
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-almost-black text-almost-white hover:bg-almost-white hover:text-almost-black border-2 border-almost-black font-bold py-3 px-8 rounded-2xl transition-colors mb-16">
          Learn more
        </button>
        
        {/* Client Logos */}
        <div className="flex justify-between items-center gap-4 md:gap-10 mt-4 md:mt-12">
          <Image 
            src="/images/client-databiz.svg" 
            alt="Databiz" 
            width={114} 
            height={20} 
          />
          <Image 
            src="/images/client-audiophile.svg" 
            alt="Audiophile" 
            width={73} 
            height={36} 
          />
          <Image 
            src="/images/client-meet.svg" 
            alt="Meet" 
            width={90} 
            height={20} 
          />
          <Image 
            src="/images/client-maker.svg" 
            alt="Maker" 
            width={83} 
            height={24} 
          />
        </div>
      </div>
      
      {/* Right Content - Hero Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="hidden md:block">
          <Image 
            src="/images/image-hero-desktop.png" 
            alt="Hero" 
            width={480} 
            height={640} 
            className="w-full h-auto max-w-[480px]"
            priority
          />
        </div>
        <div className="md:hidden">
          <Image 
            src="/images/image-hero-mobile.png" 
            alt="Hero" 
            width={375} 
            height={281} 
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
