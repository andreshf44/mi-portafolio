import { motion } from "framer-motion";

export const Projects = () => {
    return (
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Mis proyectos</h2>
  
        <div className="grid gap-6 md:grid-cols-2">
            <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-6 border border-gray-200 bg-white rounded-xl hover:shadow-lg transition"
            >
                Proyecto 1
                <a
                    href="#"
                    className="mt-4 inline-block text-primary hover:underline transition-transform hover:scale-105 hover:opacity-90"
                >
                    Ver más
                </a>
            </motion.div>
            <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-6 border border-gray-200 bg-white rounded-xl hover:shadow-lg transition"
            >
                Proyecto 2
                <a
                    href="#"
                    className="mt-4 inline-block text-primary hover:underline transition-transform hover:scale-105 hover:opacity-90"
                >
                    Ver más
                </a>
            </motion.div>
        </div>
      </section>
    );
};