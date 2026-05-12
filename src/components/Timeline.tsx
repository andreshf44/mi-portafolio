import { useEffect, useRef, useState } from "react";

const items = [
  {
    title: "Front-end Developer",
    company: "BPO",
    date: "2024 - Actualidad",
    x: 6,
    y: 33,
    color: "#bbf469",
    description:"Mi trabajo incluye el desarrollo de interfaces utilizando Ruby en un entorno de consola virtual Linux. Manejo el código a través de Git mediante Bitbucket y utilizo Visual Studio Code para la edición y depuración. Mi enfoque está en crear experiencias de usuario intuitivas y eficientes mientras colaboro con el equipo para integrar las mejores prácticas de desarrollo front-end."      
  },
  {
    title: "Front-end Developer",
    company: "WebClass",
    date: "2023 - 2024",
    x: 0,
    y: 195,
    color: "#FF8CDA",
    flexDirection: "row-reverse" as const,
    description:"Como Desarrollador Front-end, me especialicé en el diseño y la optimización de interfaces gráficas. Mis responsabilidades incluían la corrección y mejora de código CSS, así como la creación y mejora de funciones utilizando JavaScript.También me encargué de la optimización de templates HTML y PHP. Utilicé herramientas como Visual Studio Code para el desarrollo y trabajé con frameworks como Laravel, Vanilla y Vue. Además, gestioné el control de versiones utilizando Git a través de Bitbucket y colaboré en la metodología de trabajo por medio de la herramienta Jira."
  },
  {
    title: "Práctica Universitaria",
    company: "Banco Itau",
    date: "2023",
    x: 373,
    y: 242,
    color: "#e3ca80",
    alginItems: "flex-end",
    description:"Durante mi práctica profesional en Itaú, en el área de Crédito Inmobiliario y Construcción, colaboré en diversas tareas. Utilicé ETL para el procesamiento de datos de Excel, creé informes usando herramientas como Excel y Power BI para la generación de dashboards. Además, participé en la automatización de procesos de ingesta de datos para mejorar la eficiencia del área.  "
  },
  {
    title: "Ingeniería en informática",
    company: "UDP",
    date: "2020 - 2024",
    x: 370,
    y: 440,
    color: "#d4229b",
    flexDirection: "row-reverse" as const,
    pdf: "/certificado-Titulo.pdf",
  },
  {
    title: "Técnico programación",
    company: "UDP",
    date: "2020 - 2021",
    x: 730,
    y: 505,
    color: "#0cc125",
    alginItems: "flex-end",
    pdf: "/certificado-tecnico.pdf",
  },
];



export const Timeline = () => {
  const [progress, setProgress] = useState(0);
  const [selectedItem, setSelectedItem] = useState<(typeof items)[0] | null>(null);

  useEffect(() => {
    let start = 0;
  
    const interval = setInterval(() => {
      start += 0.01;
  
      if (start >= 1) {
        start = 1;
        clearInterval(interval);
      }
  
      setProgress(start);
    }, 30);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[680px]">

      {/* 🖥 DESKTOP */}
      <div className="hidden md:block w-full h-full">

        <svg className="absolute top-0 left-0 w-full h-full">

          {/* línea que se construye */}
          <path
            d="
              M11 22 
              C80 140, 180 220, 280 260  
              S500 380, 650 500
              S750 600, 750 600
            "
            fill="none"
            stroke="#FF8CDA"
            strokeWidth="3"
            strokeDasharray="1400"
            strokeDashoffset={1400 - progress * 1400}
            opacity={0.7}
          />

          {/* glow/tren */}
          <path
            d="
              M11 22 
              C80 140, 180 220, 280 260  
              S500 380, 650 500
              S750 600, 750 600
            "
            fill="none"
            stroke="#FFFF"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="80 1400"
            strokeDashoffset={1400 - progress * 1400}
            style={{
              filter: "drop-shadow(0 0 12px white)",
              opacity: progress < 0.98 ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />

          <defs>
            <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7C5CFF" />
              <stop offset="30%" stopColor="#FF8CDA" />
              <stop offset="60%" stopColor="#e3ca80" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
        </svg>

        {items.map((item, index) => {
          const total = items.length;
          const segment = 1 / total;
          
          // cada punto aparece cuando la línea llega a su tramo
          const visible = progress > index * segment + segment / 2;

          return (
            <div
              key={index}
              className={`gap-1.5 absolute flex transition-all duration-700 ease-out ${
                visible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
              style={{ top: item.y, left: item.x, flexDirection: item.flexDirection, alignItems: item.alginItems }}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  visible ? "scale-100" : "scale-0"
                }`}
                style={{
                  background: item.color,
                  boxShadow: visible ? `0 0 12px ${item.color}` : "none",
                }}
              />
              <div>
                <p className="pl-1.5 text-xs text-accent">{item.date}</p>
                <div
                  onClick={() => {
                    if (item.pdf) {
                      window.open(item.pdf, "_blank");
                    } else {
                      setSelectedItem(item);
                    }
                  }}
                  className="
                    bg-card
                    p-3
                    rounded-xl
                    shadow-lg
                    w-auto
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:-translate-y-1
                    hover:shadow-[0_10px_30px_rgba(255,140,218,0.25)]
                  "
                >
                  <p className="font-semibold text-text">{item.title}</p>
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs text-muted">{item.company}</p>
                    {item.pdf && (
                      <p className="text-[11px] text-primary mt-1">
                        Ver certificado →
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
          
        })}
        
      </div>
   

      {/* 📱 MOBILE */}
      <div className="md:hidden flex flex-col gap-8 pl-6 border-l-2 border-muted mt-5">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div
              className="absolute -left-[9px] top-1 w-4 h-4 rounded-full"
              style={{
                background: item.color,
                boxShadow: `0 0 8px ${item.color}`,
              }}
            />

            <div
              onClick={() => {
                if (item.pdf) {
                  window.open(item.pdf, "_blank");
                } else {
                  setSelectedItem(item);
                }
              }}
              className="
                bg-card
                p-3
                w-[80%]
                rounded-xl
                shadow-md
                cursor-pointer
                transition-all
                duration-300
                active:scale-95
              "
            >
              <p className="text-xs text-accent">{item.date}</p>
              <p className="font-semibold text-text">{item.title}</p>
              
              <div className="flex items-baseline justify-between ">
                <p className="text-xs text-muted">{item.company}</p>
                <button className="text-xs font-medium text-[#5c42c4]">
                  {item.pdf
                    ? "Ver certificado →"
                    : "Ver más →"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*Modal descripcion CV*/}
      {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="
                bg-card
                rounded-2xl
                p-8
                w-[90%]
                max-w-lg
                shadow-2xl
                relative
                animate-in
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* cerrar */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-xl cursor-pointer"
              >
                cerrar
              </button>

              <p className="text-sm text-accent mb-2">
                {selectedItem.date}
              </p>

              <h2 className="text-2xl font-semibold text-text">
                {selectedItem.title}
              </h2>

              <p className="text-muted mb-6">
                {selectedItem.company}
              </p>

              <p className="text-text leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
      )}
    </div>
  );
};