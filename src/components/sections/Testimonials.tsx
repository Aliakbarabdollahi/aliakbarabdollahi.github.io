import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { testimonials } from "../../data/testimonials";

const Testimonials: React.FC = () => {
  const swiperRef = useRef(null);

  return (
    <section id="testimonials" className="w-full bg-[#05060a] py-8 lg:py-8">
      <div className="max-w-6xl mx-auto px-4 lg:px-10">
        <div className="flex gap-8 lg:gap-12">
          {/* سمت چپ: تایتل + دکمه‌های navigation */}
          <div className="flex flex-col justify-center items-start gap-6 min-w-max">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              CLIENT'S<br />
              TALKS
            </h2>

            {/* دکمه‌های navigation */}
            <div className="flex gap-3">
              <button
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className="rounded-full bg-white/5 p-3 md:p-4 text-slate-100 border border-white/10 hover:bg-white/10 hover:border-[#ffb320] transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className="rounded-full bg-white/5 p-3 md:p-4 text-slate-100 border border-white/10 hover:bg-white/10 hover:border-[#ffb320] transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* سمت راست: کارت کامنت (Carousel) */}
          <div className="flex-1 w-full overflow-hidden">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              slidesPerView={1.2}
              spaceBetween={16}
              loop
              className="w-full"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="transition-all duration-300">
                  {({ isActive }) => (
                    <div
                      className={`rounded-3xl bg-gradient-to-b from-[#191a27] to-[#05060a] border border-white/5 p-6 md:p-8 shadow-[0_14px_32px_rgba(0,0,0,0.7)] transition-all duration-300 ${
                        isActive ? "opacity-100 scale-100" : "opacity-40 scale-90"
                      }`}
                    >
                      {/* ستاره‌های رتبندی */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xl md:text-2xl ${
                              i < testimonial.rating
                                ? "text-[#ffb320]"
                                : "text-white/20"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      {/* متن کامنت */}
                      <p className="text-base md:text-lg text-slate-200 mb-6 leading-relaxed">
                        {testimonial.message}
                      </p>

                      {/* نام، شرکت و avatar */}
                      <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border border-white/10"
                        />
                        <div>
                          <h4 className="text-base font-semibold text-slate-50">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-slate-400">
                            {testimonial.title} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
