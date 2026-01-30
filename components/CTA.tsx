'use client'; // Client Component để dùng onClick
import { useState } from 'react';
import confetti from 'canvas-confetti';

const CTA = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAgree = () => {
    setAccepted(true);
    // Bắn pháo hoa
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ec4899', '#8b5cf6']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ec4899', '#8b5cf6']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="py-24 px-4 bg-slate-900 text-white text-center">
      <div className="max-w-2xl mx-auto">
        {!accepted ? (
          <>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Làm người yêu tớ nhé?
            </h2>
            <p className="text-slate-300 mb-10 text-lg">
              Deal này có hạn, chốt đơn ngay kẻo lỡ!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleAgree}
                className="bg-pink-600 hover:bg-pink-700 text-white text-xl font-bold py-4 px-10 rounded-full transition-transform hover:scale-110 shadow-lg shadow-pink-500/30"
              >
                Đồng ý ngay! 💘
              </button>
              <button
                onClick={() => alert("Nút này bị hỏng rồi, bấm nút kia đi! 😜")}
                className="bg-transparent border border-slate-600 text-slate-400 py-4 px-10 rounded-full hover:bg-slate-800 transition-colors"
              >
                Để suy nghĩ đã
              </button>
            </div>
          </>
        ) : (
          <div className="animate-bounce">
            <h2 className="text-4xl md:text-6xl font-bold text-pink-500 mb-4">
              Yeahhhhh! 🎉
            </h2>
            <p className="text-2xl">Cảm ơn cậu đã đồng ý. Tớ sẽ inbox ngay!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
