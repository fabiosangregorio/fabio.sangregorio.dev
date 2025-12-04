'use client';
import { useEffect, useState, useCallback, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import React from 'react';

// Import Swiper styles
import 'swiper/css';

interface SliderProps {
  children: ReactNode;
  className?: string;
  mobileOnly?: boolean;
}

export default function Slider({ children, className, mobileOnly = false }: SliderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 991);
  }, []);

  useEffect(() => {
    setIsClient(true);
    checkMobile();

    let timeoutId: NodeJS.Timeout;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 300);
    };

    window.addEventListener('resize', debouncedCheck);
    return () => {
      window.removeEventListener('resize', debouncedCheck);
      clearTimeout(timeoutId);
    };
  }, [checkMobile]);

  // Convert children to array for mapping
  const childArray = React.Children.toArray(children);

  // For mobile-only sliders, only render Swiper on mobile
  if (mobileOnly && !isMobile) {
    return <div className={className}>{children}</div>;
  }

  // Don't render Swiper until client-side
  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Swiper
      className={className}
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
    >
      {childArray.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
