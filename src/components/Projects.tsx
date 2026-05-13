import { motion } from "framer-motion";

const projects = [
  {
    title: "I-ED Global",
    description:
    "Implementación frontend en React de una plataforma educativa global, traduciendo un diseño UI predefinido a una interfaz funcional, modular y responsiva. Participé en el desarrollo de múltiples secciones del sitio, asegurando consistencia visual y escalabilidad del código. Se implementó diseño adaptable a distintos dispositivos y diferenciación de contenido por país.",
    link: "https://i-edglobal.com/",
    gradient: "linear-gradient(135deg, #7C5CFF 0%, #FF8CDA 100%)",
  },
  {
    title: "TactoSur",
    description:
    "Implementación frontend en React de una plataforma digital para una compañía de danza contemporánea, enfocada en la presentación audiovisual de la identidad artística. El desarrollo se realizó a partir de un diseño co-creado con el cliente, implementando una experiencia web responsiva con navegación por secciones, contenido multimedia, cartelera de eventos, formulario de contacto y sistema de suscripción. Toda la integración frontend fue desarrollada y optimizada para distintos dispositivos.",
    link: "https://tactosur.com/",
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)",
  },
  {
    title: "Portal Educativo",
    description:
      "Optimización y mantenimiento de templates, experiencia de usuario y mejoras visuales.",
    link: "#",
    gradient: "linear-gradient(135deg, #5c42c4 0%, #8B5CF6 100%)",
  },
  {
    title: "Dashboard BI",
    description:
      "Creación de reportes y dashboards para análisis de datos y automatización de procesos.",
    link: "#",
    gradient: "linear-gradient(135deg, #0EA5E9 0%, #22C55E 100%)",
  },
  {
    title: "Portafolio Front-end",
    description:
      "Desarrollo de una experiencia visual moderna enfocada en rendimiento y UX.",
    link: "#",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-text">
        Mis proyectos
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              y: -6,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
            className="
              group
              relative
              aspect-square
              rounded-3xl
              overflow-hidden
              cursor-pointer
              shadow-lg
            "
            style={{
              backgroundImage: project.gradient,
            }}
          >
            {/* estado inicial */}
            <div
              className="
                absolute inset-0
                flex items-center justify-center
                transition-all duration-500
                group-hover:opacity-0
                group-hover:scale-95
              "
            >
              <h3 className="text-white text-xl font-semibold text-center px-4">
                {project.title}
              </h3>
            </div>

            {/* hover */}
            <div
              className="
                absolute inset-0
                flex flex-col justify-center
                p-6
                opacity-0
                translate-y-3
                transition-all duration-500
                group-hover:opacity-100
                group-hover:translate-y-0
                bg-black/15 backdrop-blur-[2px]
              "
            >
              <p className="text-white text-sm leading-relaxed">
                {project.description}
              </p>

            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};