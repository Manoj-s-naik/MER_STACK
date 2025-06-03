import { useState } from "react";

const slides = [
  {
    image: "https://picsum.photos/id/237/200/300", 
    title: "CMF PHONE 2 PRO",
    subtitle: "Exclusive Day-1 Offer",
    price: "₹16,999*",
    date: "5 May, 12 PM",
  },
  {
    image: "https://picsum.photos/seed/picsum/200/300", 
    title: "CMF PHONE 2 PRO",
    subtitle: "Exclusive Day-1 Offer",
    price: "₹16,999*",
    date: "5 May, 12 PM",
  },
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-xl shadow-lg">
      <img
        src={slides[current].image}
        alt="Banner"
        className="w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
      />

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        ›
      </button>

      {/* Slide Info */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-center">
        <h2 className="text-xl font-bold">{slides[current].title}</h2>
        <p>{slides[current].subtitle}</p>
        <p className="text-lg">{slides[current].price}</p>
        <p className="text-sm">{slides[current].date}</p>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === current ? 'bg-black' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
