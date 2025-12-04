'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface ThemedImageProps {
  src: string;
  darkSrc: string;
  alt: string;
  className?: string;
}

export default function ThemedImage({ src, darkSrc, alt, className }: ThemedImageProps) {
  const { isDarkTheme } = useTheme();
  const [opacity, setOpacity] = useState(1);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // On initial mount, set the correct source without animation
    if (!isInitialized) {
      setCurrentSrc(isDarkTheme ? darkSrc : src);
      setIsInitialized(true);
      return;
    }

    // On subsequent theme changes, animate the transition
    setOpacity(0);
    const timeout = setTimeout(() => {
      setCurrentSrc(isDarkTheme ? darkSrc : src);
      setOpacity(1);
    }, 250);

    return () => clearTimeout(timeout);
  }, [isDarkTheme, src, darkSrc, isInitialized]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={{
        opacity,
        transition: 'opacity 0.25s',
      }}
    />
  );
}
