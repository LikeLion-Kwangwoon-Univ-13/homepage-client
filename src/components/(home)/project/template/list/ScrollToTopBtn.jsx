import React, { useEffect, useState } from "react";

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed top-[648px] right-[50px] bg-white text-black rounded-full w-[64px] h-[64px] flex items-center justify-center shadow-lg cursor-pointer"
        aria-label="Scroll to top"
      >
        <img src="/public/images/upBtn.png"/>
      </button>
    )
  );
}
