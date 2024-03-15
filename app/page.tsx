'use client';

import Hero from './components/Hero';
import { SparklesCore } from './components/Sparkles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import About from './components/About';
import './slider.css';

export default function Home() {
  return (
    <div>
      <div className="h-screen relative w-full bg-black overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#6dc97e"
          />
        </div>
        <Swiper
          direction="vertical"
          modules={[Mousewheel]}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
        >
          <SwiperSlide className="relative z-20 ml-3">
            <Hero />
          </SwiperSlide>
          <SwiperSlide className="relative z-20 ml-3">
            <About />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
