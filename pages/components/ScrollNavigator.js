// components/ScrollNavigator.js
import { useEffect, useState } from 'react';
// import Circle from './components/Circle';
// import Gallery from './components/Gallery';
// import First from './components/First';
// import Video from './components/Video';

const sections = [
  { id: 'first', label: '1' },
  { id: 'circle', label: '2' },
  { id: 'gallery', label: '3' },
  { id: 'video', label: '4' }
];

export default function ScrollNavigator() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // initialize
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    console.log('Scrolling to:', id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Element not found:', id);
    }
  };
  

  return (
    <div style={{
      position: 'fixed',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      zIndex: 1000,
    }}>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: active === section.id ? '#FF6B6B' : '#ccc',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          aria-label={`Go to ${section.id}`}
        />
      ))}
    </div>
  );
}
