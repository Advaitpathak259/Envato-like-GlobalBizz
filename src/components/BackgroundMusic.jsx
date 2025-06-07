
import { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch((err) => {
          console.warn('Autoplay blocked:', err);
        });
      }
    };

    playMusic();

    const handleUserInteraction = () => {
      playMusic();
      window.removeEventListener('click', handleUserInteraction);
    };

    window.addEventListener('click', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return <audio ref={audioRef} src="/background2.mp3" loop />;
};

export default BackgroundMusic;
