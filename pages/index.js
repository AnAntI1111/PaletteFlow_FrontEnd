import { useEffect, useState } from 'react';
import Circle from './components/Circle';
import Gallery from './components/Gallery';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeStart = 100; // Start fading
  const fadeEnd = 600; // Fully faded (increased for slower fade)

  return (
    <div>
      <div style={{ height: '200vh', background: '#f0f0f0', overflow: 'hidden' }}>
        <Circle scrollY={scrollY} fadeStart={fadeStart} />
        <Gallery scrollY={scrollY} fadeEnd={fadeEnd} />
      </div>
    </div>
  );
}
