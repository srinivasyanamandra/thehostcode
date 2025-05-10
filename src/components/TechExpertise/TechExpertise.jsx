import { useEffect, useRef } from 'react';
import './TechExpertise.css'; // Assuming you have a CSS file for styles

function TechExpertise() {
  const iconsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    iconsRef.current.forEach((icon, index) => {
      if (icon) {
        setTimeout(() => observer.observe(icon), index * 100);
      }
    });

    return () => observer.disconnect();
  }, []);

  const techs = [
    { name: 'React', image: '/api/placeholder/50/50' },
    { name: 'Java', image: '/api/placeholder/50/50' },
    { name: 'Python', image: '/api/placeholder/50/50' },
    { name: 'Node.js', image: '/api/placeholder/50/50' },
    { name: 'AWS', image: '/api/placeholder/50/50' },
    { name: 'Docker', image: '/api/placeholder/50/50' },
    { name: 'Kubernetes', image: '/api/placeholder/50/50' },
    { name: 'TensorFlow', image: '/api/placeholder/50/50' },
  ];

  return (
    <section className="bg-light text-center">
      <div className="container">
        <h2 className="heading-2 mb-lg">Our Technical Expertise</h2>
        <div className="flex flex-wrap justify-center gap-lg mt-lg">
          {techs.map((tech, index) => (
            <div
              key={index}
              ref={(el) => (iconsRef.current[index] = el)}
              className="tech-icon card"
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={tech.image}
                alt={tech.name}
                style={{ width: '50px', height: '50px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechExpertise;