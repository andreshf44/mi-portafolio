export const Stack = () => {
    const skills = ["React", "TypeScript", "Tailwind", "Framer Motion", "Node.js"];
  
    return (
      <section id="stack" className="py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Stack Tecnológico</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 border rounded-lg bg-white hover:bg-primary hover:text-white transition cursor-default transition-transform hover:scale-105 hover:opacity-90"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
};