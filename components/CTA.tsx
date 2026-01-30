'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

const CTA = () => {
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailInput, setEmailInput] = useState(''); // Lưu email crush nhập

  // 🔴 DÁN LẠI 3 MÃ CỦA EM VÀO ĐÂY (Lấy từ bước trước)
  const SERVICE_ID = "service_fezndmq"; 
  const TEMPLATE_ID = "template_dyqzikm"; 
  const PUBLIC_KEY = "OMgJvS5umcTFQOroG";   

const handleAgree = () => {
    setLoading(true);

    // Gửi email báo tin vui cho Lương
    const templateParams = {
      to_name: "Bạn ơi", // Tên em
      message: "Người ấy đã bấm nút ĐỒNG Ý rồi! Mau nhắn tin ngay!", // Nội dung
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Đã gửi mail báo tin!', response.status);
      })
      .catch((err) => {
        console.error('Lỗi gửi mail:', err);
      })
      .finally(() => {
        // Dù gửi mail thành công hay thất bại thì vẫn cho hiện pháo hoa
        setLoading(false);
        setAccepted(true);
        
        // Bắn pháo hoa ăn mừng
        const duration = 3000;
        const end = Date.now() + duration;
        const frame = () => {
          confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ec4899', '#8b5cf6'] });
          confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ec4899', '#8b5cf6'] });
          if (Date.now() < end) requestAnimationFrame(frame);
        };
        frame();
      });
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
                disabled={loading}
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
              Đã chốt đơn! Tớ sẽ inbox cậu ngay!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
