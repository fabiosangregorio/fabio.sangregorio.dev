import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out-sine',
      delay: 150,
      once: true
    });
  }, []);
}
