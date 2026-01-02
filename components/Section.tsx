import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', containerClass = '', id }) => {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;