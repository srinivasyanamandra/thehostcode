import { useEffect, useRef } from 'react';
import './Services.css'; // Assuming you have a CSS file for styles

function Services() {
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => observer.observe(card), index * 200);
      }
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'React Native Development',
      description:
        'We build cross-platform mobile applications that deliver native performance and exceptional user experiences.',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Java Backend Excellence',
      description:
        'Our robust backend solutions ensure your applications are scalable, secure, and perform at their best.',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'DevSecOps Mastery',
      description:
        'We integrate security into every stage of development, ensuring your applications are not only functional but also secure.',
      image: '/api/placeholder/600/400',
    },
  ];

  return (
    <section className="bg-light">
      <div className="container">
        <h2 className="heading-2 text-center mb-lg">Our Core Services</h2>
        <div className="grid grid-3">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card card"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="p-lg">
                <h3 className="heading-3 mb-md text-dark">{service.title}</h3>
                <p className="body-text mb-md">{service.description}</p>
                <a href="#" className="btn btn-icon text-mid">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;