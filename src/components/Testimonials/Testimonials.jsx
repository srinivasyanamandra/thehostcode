import { useState, useEffect } from 'react';
import './Testimonials.css'; // Assuming you have a CSS file for styles

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      content:
        "TheHostCode transformed our digital presence completely. Their team not only delivered a beautiful website but also ensured it performed exceptionally well. The attention to detail and commitment to quality is truly remarkable.",
      author: 'Sarah Johnson',
      position: 'CEO, TechInnovate',
      image: '/api/placeholder/100/100',
    },
    {
      content:
        "Working with TheHostCode was a game-changer for our startup. Their React Native development expertise helped us launch our app months ahead of schedule, and the user feedback has been overwhelmingly positive.",
      author: 'Michael Chen',
      position: 'Founder, AppLaunch',
      image: '/api/placeholder/100/100',
    },
    {
      content:
        "The DevSecOps implementation by TheHostCode has revolutionized our development process. We're now deploying more frequently with confidence, knowing that security is baked into every step.",
      author: 'Emma Rodriguez',
      position: 'CTO, SecureFinance',
      image: '/api/placeholder/100/100',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-light text-center">
      <div className="container container-sm">
        <h2 className="heading-2 mb-lg">What Our Clients Say</h2>
        <div className="mt-lg">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-item card p-lg ${
                index === currentIndex ? 'active' : ''
              }`}
            >
              <p className="body-text italic mb-lg">{testimonial.content}</p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mr-md"
                  style={{ objectFit: 'cover' }}
                />
                <div>
                  <h4 className="heading-3 text-dark">{testimonial.author}</h4>
                  <p className="small-text">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-lg gap-sm">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`testimonial-dot ${
                  index === currentIndex ? 'active' : ''
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;