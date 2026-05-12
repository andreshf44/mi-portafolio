import { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-img.png"; 
import { Timeline } from "./Timeline";

export const Hero = () => {
  const [showTimeline, setShowTimeline] = useState(false);
  return (
    <section id="hero" className="h-[970px] justify-between min-h-screen flex px-6 md:px-12 pt-20 bg-hero-gradient bg-opacity-10">
      
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-semibold leading-tight text-text"
        >
          Andres <span className="text-primary">Enrique</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg font-semibold text-[23px] text-[#5c42c4]"
        >
          Construyo interfaces claras, rápidas y pensadas para personas.
        </motion.p>

        <motion.button
          onClick={() => setShowTimeline(!showTimeline)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 px-5 py-2 bg-[#6c4cef] text-white rounded-lg hover:opacity-90 transition inline-block cursor-pointer"
        >
          {showTimeline ? "Ocultar trayctoria" : "Ver trayectoria"}
        </motion.button>
        {showTimeline && (
          <Timeline key={showTimeline.toString()} />
        )}
      </div>

      {/* Imagen */}
      <div className="hidden md:block pt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
            <img
            src={heroImage}
            alt="Hero ilustración"
            className="max-w-xs md:max-w-md rounded-xl shadow-lg"
            />
        </motion.div>
      </div>

    </section>
  );
};