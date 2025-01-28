import { useEffect, useState } from 'react';
import Circle from './components/Circle';
import Gallery from './components/Gallery';
import sixty from './components/60';
import NextContent from './components/30';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeStart = 100; // Start fading for Circle
  const fadeEnd = 600; // Fully faded for Gallery
  const triggerStart = 500; // Trigger for .light movement and NextContent

  return (
    <div>
      {/* Background component */}
      <Gallery />

      {/* Main content */}
      <div style={{ height: '200vh', background: '#f0f0f0', overflow: 'hidden' }}>
        {/* Circle component */}
        <Circle scrollY={scrollY} fadeStart={fadeStart} />

        {/* Gallery component */}
        <sixty scrollY={scrollY} fadeEnd={fadeEnd} />

        {/* Next content */}
        <NextContent scrollY={scrollY} triggerStart={triggerStart} />
      </div>
    </div>
  );
}
