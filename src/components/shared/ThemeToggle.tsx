'use client';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 250);
  };

  return (
    <div
      id="toggle-theme"
      className={isAnimating ? 'disabled' : ''}
      onClick={handleClick}
    >
      <img
        src={isDarkTheme ? '/images/sun--dark.svg' : '/images/sun.svg'}
        alt="Toggle dark mode"
        style={{
          opacity: isAnimating ? 0 : 1,
          transition: 'opacity 0.25s',
        }}
      />
    </div>
  );
}
