import React from "react";
import "./ContactCTA.css"; // Assuming you have a CSS file for styles

function ContactCTA() {
  return (
    <div className="contact_CTA">
      <section id="contact-cta" className="bg-dark text-light text-center relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "url('/api/placeholder/800/400') center/cover no-repeat",
          }}
        ></div>
        <div className="container container-sm relative">
          <h2 className="heading-2 mb-md">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="body-text mb-lg">
            Let's discuss how we can help you achieve your digital goals and create
            exceptional experiences for your users.
          </p>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactCTA;