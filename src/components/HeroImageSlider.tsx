import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  {
    src: "/images/ligare2.png",
    alt: "Ligare Logo"
  },
  // Office / Team image
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    alt: "Office Atmosphere"
  },
  // Tech / Abstract image
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
    alt: "Technology"
  }
];

export function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }} // Slide in from right
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }} // Slide out to left
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative overflow-hidden shadow-2xl w-full h-full">
             <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>
      
    </div>
  );
}
