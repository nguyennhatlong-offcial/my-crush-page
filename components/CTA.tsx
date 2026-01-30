
'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser'; // Import thư viện gửi mail

const CTA = () => {
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false); // Thêm trạng thái đang gửi

  // 🔴 THAY 3 CÁI MÃ CỦA EM VÀO ĐÂY (QUAN TRỌNG)
  const SERVICE_ID = "service_fezndmq"; // Service ID lấy ở Bước 1
  const TEMPLATE_ID = "template_dyqzikm"; // Template ID lấy ở Bước 1
  const PUBLIC_KEY = "OMgJvS5umcTFQOroG";   // Public Key lấy ở Bước 1

  const handleAgree = () => {
    setLoading(true); // Bắt đầu gửi, hiện chữ đang xử lý...
    
    // 1. Gửi email ngầm cho Lương
    const templateParams = {
      to_name: "Bạn ơi,",
      message: "Có biến rồi! Crush vừa bấm nút Đồng Ý trên web!",
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Đã gửi mail thành công!', response.status, response.text);
      })
      .catch((err) => {
        console.error('Lỗi gửi mail:', err);
      });

    // 2. Bắn pháo hoa ăn mừng
    setAccepted(true);
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ec4899', '#8b5cf6'] });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ec4899', '#8b5cf6'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <section className="py-24 px-4 bg-slate-900 text-white text-center">
      <div className="max-w-2xl mx-auto">
        {!accepted ? (
          <div className="animate-in fade-in zoom-in duration-500">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Làm người yêu tớ nhé?
            </h2>
            <p className="text-slate-300 mb-10 text-lg">
              Deal này có hạn, chốt đơn ngay kẻo lỡ!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleAgree}
                disabled={loading} // Khi đang gửi thì không cho bấm liên tục
                className="bg-pink-600 hover:bg-pink-700 text-white text-xl font-bold py-4 px-10 rounded-full transition-transform hover:scale-110 shadow-lg shadow-pink-500/30 ring-2 ring-pink-500 ring-offset-2 ring-offset-slate-900"
              >
                {loading ? "Đang xử lý..." : "Đồng ý ngay! 💘"}
              </button>
              <button
                onClick={() => alert("Nút này hỏng rồi, đừng cố bấm nữa! 😜")}
                className="bg-transparent border border-slate-600 text-slate-400 py-4 px-10 rounded-full hover:bg-slate-800 transition-colors cursor-not-allowed"
              >
                Để suy nghĩ đã
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-bounce py-10">
            <h2 className="text-4xl md:text-6xl font-bold text-pink-500 mb-4">
              Yeahhhhh! 🎉
            </h2>
            <p className="text-2xl text-slate-200">
              Đã nhận đơn! Check inbox ngay nhé!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
