import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <div className="animate-float">
        <span className="text-6xl mb-4 block">💌</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800">
        Có một điều tớ <span className="text-pink-600">giấu kín</span> bấy lâu nay...
      </h1>
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8">
        Website này không bán hàng, nhưng nó chứa đựng một lời đề nghị "hợp tác" trọn đời dành riêng cho cậu.
      </p>
      <button 
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
      >
        Khám phá ngay
      </button>
    </section>
  );
};

export default Hero;
