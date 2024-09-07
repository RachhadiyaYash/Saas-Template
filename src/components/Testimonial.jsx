import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("api/testimonial.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <div className="max-w-6xl  md:mx-auto mx-4 flex justify-center rounded-2xl my-8 bg-[#BFAFF2] p-4">
      <div className="flex flex-col items-center justify-start text-center w-full py-12 max-w-[756px] ">
        {testimonials.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            pagination={false}
            className="w-full"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="flex flex-col  gap-12"
              >
                <p className="text-base sm:text-lg text-[#2b2b2b] px-2 sm:px-4 mb-4 sm:mb-6 md:text-left font-bold">
                  {testimonial.review}
                </p>

                <div className="flex flex-row items-center md:justify-start justify-center  gap-4  px-4  ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover"
                  />

                  <div className="flex flex-col items-stat justify-center h-full ">
                    <p className="text-md sm:text-md text-[#2b2b2b] font-semibold py-2 leading-relexed">
                      {testimonial.name}
                    </p>

                    <div className="flex items-center">
                      {Array.from(
                        { length: testimonial.rating },
                        (_, index) => (
                          <svg
                            key={index}
                            className="w-4 h-4 sm:w-5 sm:h-5 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.4 4.304a1 1 0 00.95.69h4.529c.97 0 1.371 1.24.588 1.81l-3.643 2.648a1 1 0 00-.364 1.118l1.4 4.303c.3.921-.755 1.688-1.54 1.118l-3.644-2.648a1 1 0 00-1.176 0l-3.644 2.648c-.784.57-1.838-.197-1.539-1.118l1.4-4.304a1 1 0 00-.364-1.118L2.48 9.731c-.784-.57-.382-1.81.588-1.81h4.529a1 1 0 00.95-.69l1.4-4.304z" />
                          </svg>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>Loading testimonials...</p>
        )}
      </div>
    </div>
  );
}
