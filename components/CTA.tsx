'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

const CTA = () => {
  // 1. Khai báo các biến trạng thái (Đừng xóa dòng nào nhé!)
  const [accepted, setAccepted] = useState(false); // Biến kiểm tra đã đồng ý chưa
  const [loading, setLoading] = useState(false);   // Biến kiểm tra đang gửi mail
  
  // 👇 ĐIỀN EMAIL CỦA EM VÀO ĐÂY (Để nó hiện sẵn trong ô nhập)
  const [emailReceiver, setEmailReceiver] = useState('phamducluong15122011@gmail.com'); 

  // 2. Cấu hình EmailJS (Điền mã của em vào)
  const SERVICE_ID = "service_fezndmq"; 
  const TEMPLATE_ID = "template_tguy3tk"; 
  const PUBLIC_KEY = "OMgJvS5umcTFQOroG";  

  const handleAgree = () => {
    // Kiểm tra email
    if (!emailReceiver) {
      alert("Hãy nhập email nhận thông báo trước khi bấm đồng ý nhé! 📧");
      return;
    }

    setLoading(true);

    // Gửi email
    const templateParams = {
      to_name: "Sếp Lương",
      send_to: emailReceiver,
      message: "Crush đã bấm nút ĐỒNG Ý rồi! Mau kiểm tra ngay!",
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Đã gửi mail thành công!');
      })
      .catch((err) => {
        console.error('Lỗi gửi mail:', err);
      })
      .finally(() => {
        setLoading(false);
        setAccepted(true); // Đánh dấu là đã đồng ý để chuyển màn hình
        
        // Bắn pháo hoa
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
            <p className="text-slate-300 mb-6 text-lg">
              Deal này có hạn, chốt đơn ngay kẻo lỡ!
            </p>
            
            {/* Ô NHẬP EMAIL (Đã có sẵn email của em) */}
            <div className="max-w-sm mx-auto mb-8">
              <label className="block text-slate-400 text-sm mb-2 font-bold text-left pl-4">
                Nhập Email để nhận thông báo kết quả:
              </label>
              <input
                type="email"
                placeholder="Ví dụ: luong@gmail.com"
                value={emailReceiver}
                onChange={(e) => setEmailReceiver(e.target.value)}
                className="w-full px-6 py-3 rounded-full text-slate-900 text-lg focus:outline-none focus:ring-4 focus:ring-pink-500/50 shadow-lg border-2 border-slate-700 focus:border-pink-500 transition-all"
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
              Thông báo đã được gửi tới: <br/>
              <span className="text-yellow-400 font-bold">{emailReceiver}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
