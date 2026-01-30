import { Heart, Smile, Star } from 'lucide-react';

const features = [
  {
    icon: <Smile className="w-8 h-8 text-pink-500" />,
    title: "Nụ cười tỏa nắng",
    desc: "Mỗi lần cậu cười, bug trong code của tớ tự nhiên biến mất."
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: "Thông minh & Tinh tế",
    desc: "Cách cậu giải quyết vấn đề khiến tớ thực sự ngưỡng mộ."
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Trái tim ấm áp",
    desc: "Cậu luôn quan tâm đến người khác theo cách rất riêng."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
          3 Điều tớ thích ở cậu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
