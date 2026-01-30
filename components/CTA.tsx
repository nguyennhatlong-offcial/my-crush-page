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
    // Kiểm tra xem đã nhập email chưa
    if (!emailInput) {
      alert("Cậu ơi, điền email người đưa web cho bạn để bạn ấy biết nhé! 🥺");
      return;
    }

    setLoading(true);
    
    // Gộp email vào nội dung tin nhắn gửi cho Lương
    const messageContent = `Có biến rồi! Crush (Email: ${emailInput}) vừa bấm nút Đồng Ý!`;

    const templateParams = {
      to_name: "Lương",
      message: messageContent, // Nội dung này sẽ hiện trong mail của em
    };

    // Gửi email
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Gửi thành công!', response.status);
      })
      .catch((err) => {
        console.error('Lỗi:', err);
      });

    // Hiệu ứng thành công
    setAccepted(true);
    
    // Bắn pháo hoa
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
            <p className="text-slate-300 mb-8 text-lg">
              Điền email của cậu vào đây để tớ gửi "hợp đồng tình yêu" nhé! 👇
            </p>
            
            {/* Ô NHẬP EMAIL MỚI THÊM */}
            <div className="max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="nhap.email.cua.cau@gmail.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-slate-900 text-lg focus:outline-none focus:ring-4 focus:ring-pink-500/50 shadow-lg"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleAgree}
                disabled={loading}
                className="bg-pink-600 hover:bg-pink-700 text-white text-xl font-bold py-4 px-10 rounded-full transition-transform hover:scale-110 shadow-lg shadow-pink-500/30 ring-2 ring-pink-500 ring-offset-2 ring-offset-slate-900"
              >
                {loading ? "Đang gửi..." : "Đồng ý ngay! 💘"}
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
              Đã nhận email: <span className="text-pink-400 font-bold">{emailInput}</span>.<br/>
              Check inbox nhé, tớ sẽ nhắn ngay!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
