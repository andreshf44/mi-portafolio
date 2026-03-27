interface SectionProps {
    id?: string;
    title?: string;
    children: React.ReactNode;
  }
  
  export const Section = ({ id, title, children }: SectionProps) => {
    return (
      <section id={id} className="py-20 px-6 md:px-12">
        {title && <h2 className="text-3xl md:text-4xl font-semibold mb-10">{title}</h2>}
        {children}
      </section>
    );
};