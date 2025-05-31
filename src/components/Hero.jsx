import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-lime-500 rounded-tl-full"></div>
        <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-lime-400 rounded-br-full"></div>
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className={`w-full h-full ${i % 5 === 0 ? 'bg-white bg-opacity-5' : ''}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your goto Techinical Patner
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
           One stop solution
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default Hero;