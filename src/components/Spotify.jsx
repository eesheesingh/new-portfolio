import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-player';
import { motion } from 'framer-motion';
import '../index.css';

const SpotifyBar = () => {
  const size = {
    width: '100%',
    height: 80,
  };
  const view = 'list';
  const theme = 'black';

  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPlayer(true);
    }, 5000);

    const handleScroll = () => {
      setShowPlayer(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setShowPlayer(false);
  };

  return (
    <>
      {showPlayer && (
        <motion.div
          className="spotify-bar mb-8 fixed bottom-0 w-full flex justify-center z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="tooltip-container relative inline-block">
            <SpotifyPlayer
              uri="spotify:track:7z7kvUQGwlC6iOl7vMuAr9"
              size={size}
              view={view}
              theme={theme}
              autoPlay
            />
            <button
              onClick={handleClose}
              className="absolute top-[-18px] right-[-10px] bg-[#ffffff4f] transition-all duration-200 hover:bg-[#000] rounded-full px-2 text-white text-xl border-none cursor-pointer z-20"
            >
              &times;
            </button>
            <div className="tooltip visible-tooltip">
              You've been here for a while, Let's Chill
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SpotifyBar;
