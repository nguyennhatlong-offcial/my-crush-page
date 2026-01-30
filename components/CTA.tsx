const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-slate-800">Review từ "người dùng" tương lai</h2>
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl border border-pink-100 relative">
          <span className="text-6xl text-pink-200 absolute top-4 left-4">“</span>
          <p className="text-xl text-slate-700 italic mb-4 relative z-10">
            "Đây là quyết định đúng đắn nhất cuộc đời mình. Cậu ấy nấu ăn ngon (mì gói), code giỏi và chiều người yêu số 1!"
          </p>
          <div className="font-bold text-slate-900">- Cậu (vào năm sau)</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
