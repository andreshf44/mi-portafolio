import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background shadow-sm py-4" : "bg-transparent py-6"
    }`}>
      
      <div className="px-6 md:px-12 flex items-center justify-between">
        
        {/* Nombre (aparece con scroll) */}
        <a
          href="#hero"
          className={`text-lg font-semibold hover:scale-105 transition-transform duration-300 no-underline ${
            scrolled
              ? "opacity-100 px-3 py-1 rounded-md bg-[#e3ca80] text-black"
              : "opacity-0 pointer-events-none absolute"
          }`}
        >
          Andres Enrique
        </a>

        {/* Menú */}
        <ul
          className={`flex gap-8 text-m p-2 font-medium transition-all list-none duration-300 ${
            scrolled
              ? "ml-auto"
              : "mx-auto bg-accent rounded-md" // centrado cuando NO hay scroll
          }`}
        >
          <li>
            <a
              href="#projects"
              className="no-underline hover:opacity-70 transition"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#stack"
              className="no-underline hover:opacity-70 transition"
            >
              Stack
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};