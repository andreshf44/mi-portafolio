import { motion } from "framer-motion";
import heroImage from "../assets/hero-img.png"; 
import { Timeline } from "./Timeline";

export const Hero = () => {
  return (
    <section id="hero" className="justify-between min-h-screen flex px-6 md:px-12 pt-20 bg-hero-gradient bg-opacity-10">
      
      <div className="max-w-3xl">
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
          className="mt-4 text-lg text-muted max-w-md"
        >
          Construyo interfaces claras, rápidas y pensadas para personas.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 px-5 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition inline-block"
        >
          Ver proyectos
        </motion.button>
        <div className="mt-20">
          <Timeline />
        </div>
      </div>

        {/* Imagen */}
      <div>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
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