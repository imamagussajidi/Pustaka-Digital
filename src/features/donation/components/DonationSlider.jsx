// src/components/DonationSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import donation1 from "@/core/assets/buku1.png";
import donation2 from "@/core/assets/coba.png";
import donation3 from "@/core/assets/coba.png";
import donation4 from "@/core/assets/coba.png";
import donation5 from "@/core/assets/coba.png";
import useResponsive from "@/features/global/hooks/useResponsive";

const slider = [
  {
    title: "Transparansi sepenuhnya",
    description:
      "Transparan dengan bentuk dan kuantitas buku yang didonasikan.",
    img: donation1,
  },
  {
    title: "Terbagi rata",
    description:
      "Buku yang didonasikan terbagi secara rata sesuai kebutuhan komunitas.",
    img: donation2,
  },
  {
    title: "Dapat dipercaya",
    description:
      "Donasi buku Anda dapat dipercaya karena kami bersifat transparan dari berbagai aspek.",
    img: donation3,
  },
  {
    title: "Buku untuk Masa Depan",
    description:
      "Setiap buku yang Anda donasikan menanamkan benih pengetahuan untuk masa depan yang cerah.",
    img: donation4,
  },
  {
    title: "Membuka Jendela Dunia",
    description:
      "Dengan mendonasikan buku, Anda membantu membuka jendela dunia bagi banyak orang.",
    img: donation5,
  },
];

const DonationSlider = () => {
  const { isTablet } = useResponsive();
  return (
    <div className="py-20">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={isTablet ? 2 : 3}
        navigation
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="py-5"
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col mb-10 items-center">
              <img
                src={item.img}
                alt="Dapat dipercaya"
                className="rounded-lg w-[200px] h-[200px] object-cover mb-4"
              />
              <h3 className="text-xl text-center font-bold">{item.title}</h3>
              <p className="text-center">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination mb-0"></div>
        {/* Tambahkan SwiperSlide tambahan jika diperlukan */}
      </Swiper>
    </div>
  );
};

export default DonationSlider;
