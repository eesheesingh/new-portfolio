import React, { useEffect, useState } from "react";

const ProjectPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const showPopup = () => {
      setIsVisible(true);
    };

    const hidePopup = () => {
      setIsVisible(false);
    };

    // Show the popup initially for 5 seconds, then disappear for 8 seconds, and repeat
    const showTimeout = setTimeout(hidePopup, 5000); // Disappear after 5 seconds
    const intervalId = setInterval(() => {
      showPopup();
      const hideTimeout = setTimeout(hidePopup, 10000); // Keep showing for 5 seconds
      return () => clearTimeout(hideTimeout);
    }, 13000); // 5 seconds + 8 seconds interval

    return () => {
      clearTimeout(showTimeout);
      clearInterval(intervalId);
    };
  }, []);

  return (
    isVisible && (
      <div className="absolute top-[-50px] left-10 transform -translate-x-1/2 bg-[#1d1d1d] text-white p-2 px-4 rounded-[8px] shadow-lg transition-opacity duration-300 relative">
        <div className="absolute w-2.5 h-2.5 bg-[#1d1d1d] border-[1px] border-[#fffefe11] rotate-45 top-[38px] left-1/2 transform -translate-x-1/2" />
        <div className="border-[1px] border-[#fffefe11] rounded-[8px] p-1">
          Check Out my Top Project!
        </div>
      </div>
    )
  );
};

export default ProjectPopup;
