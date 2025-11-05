"use client";
import { useState, useEffect } from "react";

export function EventBanner() {
  const banners = [
    {
      id: 1,
      title: "Summer Sale — Up to 10% Off",
      subtitle: "Limited period offer on select properties",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    },
    {
      id: 2,
      title: "Festive Offers",
      subtitle: "Special financing & stamp duty assistance",
      image:
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
  ];

  const [index, setIndex] = useState(0);

  // simple auto-rotate
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % banners.length),
      6000
    );
    return () => clearInterval(t);
  }, [banners.length]);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-xl">
        <div className="relative">
          {banners.map((b, i) => (
            <div
              key={b.id}
              className={`transition-transform duration-700 ${
                i === index
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              } absolute inset-0`}
              aria-hidden={i !== index}
            >
              <div
                className="h-44 md:h-60 flex items-center justify-between px-6"
                style={{
                  backgroundImage: `url(${b.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-white/80 p-4 rounded-md max-w-xl ">
                  <h3 className="text-xl font-bold">{b.title}</h3>
                  <p className="text-sm mt-1">{b.subtitle}</p>
                </div>
                <div>
                  <button
                    onClick={() =>
                      setIndex((index + banners.length - 1) % banners.length)
                    }
                    className="mr-2 px-3 py-2 bg-white/90 rounded"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => setIndex((index + 1) % banners.length)}
                    className="px-3 py-2 bg-white/90 rounded"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="relative h-44 md:h-60" aria-hidden />
        </div>
      </div>
    </section>
  );
}
