import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const portfolioItems = [
    {
      title: 'Fintech Mobile App',
      description:
        'A revolutionary mobile banking solution with advanced security features.',
      image: '/api/placeholder/600/400',
      clientLogo: '/api/placeholder/120/40',
    },
    {
      title: 'E-commerce Platform',
      description:
        'Scalable online marketplace with intuitive UX and robust backend.',
      image: '/api/placeholder/600/400',
      clientLogo: '/api/placeholder/120/40',
    },
    {
      title: 'Healthcare Dashboard',
      description:
        'Comprehensive analytics platform for healthcare providers.',
      image: '/api/placeholder/600/400',
      clientLogo: '/api/placeholder/120/40',
    },
    {
      title: 'Smart Home IoT Solution',
      description:
        'Connected device ecosystem with intuitive control interface.',
      image: '/api/placeholder/600/400',
      clientLogo: '/api/placeholder/120/40',
    },
  ];

  return (
    <section className="bg-light">
      <div className="container">
        <h2 className="heading-2 text-center mb-lg">Our Featured Work</h2>
        <div className="portfolio-carousel flex gap-lg">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{ flex: '0 0 300px', scrollSnapAlign: 'start' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="p-md">
                <h3 className="heading-3 mb-sm text-dark">{item.title}</h3>
                <p className="small-text mb-md">{item.description}</p>
                <img
                  src={item.clientLogo}
                  alt="Client Logo"
                  className="h-10"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;