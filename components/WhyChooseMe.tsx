import { CheckCircle } from 'lucide-react';

const reasons = [
  "Giỏi Lý: giải bài vật lý miễn phí trọn đời.",
  "Chung thủy: Chỉ biết lý và cậu.",
  "Lắng nghe: Luôn sẵn sàng nghe cậu than vãn 24/7.",
  "Hài hước: Tuy đôi lúc hơi nhạt nhưng sẽ cố gắng làm cậu cười."
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 px-4 bg-indigo-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          {/* Em có thể thay src bằng link ảnh của em */}
          <div className="w-full h-64 md:h-80 bg-slate-300 rounded-2xl shadow-lg flex items-center justify-center text-slate-500">
            [Ảnh của em hoặc ảnh Meme cute]
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Tại sao nên chọn tớ?</h2>
          <ul className="space-y-4">
            {reasons.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
