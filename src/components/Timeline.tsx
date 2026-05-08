import { useEffect, useRef, useState } from "react";

const items = [
  {
    title: "Front-end Developer",
    company: "BPO",
    date: "2024 - Actualidad",
    x: 6,
    y: 33,
    color: "#bbf469",
  },
  {
    title: "Front-end Developer",
    company: "WebClass",
    date: "2023 - 2024",
    x: 0,
    y: 195,
    color: "#FF8CDA",
    flexDirection: "row-reverse" as const,
  },
  {
    title: "Práctica Universitaria",
    company: "Banco Itau",
    date: "2023",
    x: 373,
    y: 242,
    color: "#e3ca80",
    alginItems: "flex-end",
  },
  {
    title: "Ingeniería en informática",
    company: "UDP",
    date: "2020 - 2024",
    x: 370,
    y: 440,
    color: "#d4229b",
    flexDirection: "row-reverse" as const,
  },
  {
    title: "Técnico programación",
    company: "UDP",
    date: "2020 - 2021",
    x: 730,
    y: 505,
    color: "#0cc125",
    alginItems: "flex-end",
  },
];

export const Timeline = () => {
  const [progress, setProgress] = useState(0);

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
    <div className="relative w-full h-[900px]">

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
                <div className="bg-card p-3 rounded-xl shadow-lg w-[auto]">
                  <p className="font-semibold text-text">{item.title}</p>
                  <p className="text-xs text-muted">{item.company}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden md:block w-full overflow-x-auto">
        <div className="relative flex items-center gap-32 px-20 min-w-[900px] h-[300px]">
          {/* línea base */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300" />

          {/* línea animada */}
          <div
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-[#7C5CFF] via-[#FF8CDA] to-[#22c55e]"
            style={{
              width: `${progress * 100}%`,
              boxShadow: "0 0 8px #7C5CFF",
            }}
          />

          {items.map((item, index) => {
            const total = items.length;
            const segment = 1 / total;
            const visible = progress > index * segment;

            return (
              <div
                key={index}
                className={`relative flex flex-col items-center transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* punto */}
                <div
                  className="w-3 h-3 rounded-full mb-4"
                  style={{
                    background: item.color,
                    boxShadow: visible ? `0 0 10px ${item.color}` : "none",
                  }}
                />

                {/* card */}
                <div className="bg-card p-3 rounded-xl shadow-lg w-[200px] text-center">
                  <p className="text-xs text-accent">{item.date}</p>
                  <p className="font-semibold text-text">{item.title}</p>
                  <p className="text-xs text-muted">{item.company}</p>
                </div>
              </div>
            );
          })}
        </div>
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