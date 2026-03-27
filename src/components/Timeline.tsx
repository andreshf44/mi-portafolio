import { useEffect, useRef, useState } from "react";

const items = [
  {
    title: "Front-end Developer",
    company: "BPO",
    date: "2024 - Actualidad",
    x: 100,
    y: 80,
    color: "#7C5CFF",
  },
  {
    title: "Front-end Developer",
    company: "WebClass",
    date: "2023 - 2024",
    x: 260,
    y: 240,
    color: "#FF8CDA",
  },
  {
    title: "Práctica Universitaria",
    company: "Banco Itau",
    date: "2023",
    x: 120,
    y: 400,
    color: "#e3ca80",
  },
  {
    title: "Ingeniería en informática",
    company: "UDP",
    date: "2020 - 2024",
    x: 260,
    y: 580,
    color: "#22c55e",
  },
  {
    title: "Técnico programación",
    company: "UDP",
    date: "2020 - 2021",
    x: 140,
    y: 760,
    color: "#f97316",
  },
];

export const Timeline = () => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      

      const visible = 1 - rect.top / windowHeight;
      const clamped = Math.max(0, Math.min(1, visible));

      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative w-full h-[900px]">

      {/* 🖥 DESKTOP */}
      <div className="hidden md:block w-full h-full">

        <svg className="absolute top-0 left-0 w-full h-full">

          {/* base */}
          <path
            d="M120 80 
            C200 140, 240 200, 260 260 
            S200 380, 140 440 
            S220 600, 180 760"
            fill="none"
            stroke="#ddd"
            strokeWidth="3"
          />

          {/* animada */}
          <path
            d="M120 80 
            C200 140, 240 200, 260 260 
            S200 380, 140 440 
            S220 600, 180 760"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="1400"
            strokeDashoffset={1400 - Math.pow(progress, 1.2) * 1400}
            style={{
              filter: "drop-shadow(0 0 6px #7C5CFF)",
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
              className={`absolute transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-75"
              }`}
              style={{ top: item.y, left: item.x }}
            >
              <div
                className={`w-2 h-2 rounded-full mb-2 transition-all duration-500 ${
                    visible ? "scale-100" : "scale-0"
                }`}
                style={{
                    background: item.color,
                    boxShadow: visible ? `0 0 12px ${item.color}` : "none",
                }}
              />

              <div className="bg-card p-3 rounded-xl shadow-lg w-[200px]">
                <p className="text-xs text-accent">{item.date}</p>
                <p className="font-semibold text-text">{item.title}</p>
                <p className="text-xs text-muted">{item.company}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 📱 MOBILE */}
      <div className="md:hidden flex flex-col gap-8 pl-6 border-l-2 border-muted">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div
              className="absolute -left-[9px] top-1 w-4 h-4 rounded-full"
              style={{
                background: item.color,
                boxShadow: `0 0 8px ${item.color}`,
              }}
            />

            <div className="bg-card p-3 rounded-xl shadow-md">
              <p className="text-xs text-accent">{item.date}</p>
              <p className="font-semibold text-text">{item.title}</p>
              <p className="text-xs text-muted">{item.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};