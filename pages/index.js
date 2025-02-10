import Head from 'next/head';
import { useEffect, useState } from 'react';
import Circle from './components/Circle';
import Gallery from './components/Gallery';
import First from './components/First';

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
      <Head>
      <title>Palette Flow</title>
      <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

      </Head>
      <div style={{ height: '200vh',  overflow: 'hidden' }}>
      <First scrollY={scrollY} fadeStart={fadeStart} />
        <Circle scrollY={scrollY} fadeStart={fadeStart} />
        <Gallery scrollY={scrollY} fadeEnd={fadeEnd} />
      </div>
    </div>
  );
}
