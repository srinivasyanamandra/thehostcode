import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styles


function Footer() {
  return (
    <footer className="bg-deep text-light">
      <div className="container grid grid-4 mb-lg">
        <div>
          <h3 className="heading-3 mb-md text-accent">About Us</h3>
          <p className="body-text mb-md">
            TheHostCode is a premier digital solutions provider specializing in
            creating exceptional web and mobile experiences. We combine technical
            expertise with creative innovation to deliver results that exceed
            expectations.
          </p>
          <div className="social-links flex gap-md">
            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
              <a key={social} href="#">
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
                  <path
                    d={
                      social === 'facebook'
                        ? 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'
                        : social === 'twitter'
                        ? 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'
                        : social === 'linkedin'
                        ? 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'
                        : 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01'
                    }
                  ></path>
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="heading-3 mb-md text-accent">Quick Links</h3>
          <ul className="list-none">
            {[
              'Home',
              'About Us',
              'Services',
              'Portfolio',
              'Blog',
              'Contact',
            ].map((link) => (
              <li key={link} className="mb-sm">
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="body-text hover:text-accent"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="heading-3 mb-md text-accent">Services</h3>
          <ul className="list-none">
            {[
              'React Native Development',
              'Java Backend Excellence',
              'DevSecOps Mastery',
              'AI/ML Integration',
              'Data Analytics & Insights',
            ].map((service) => (
              <li key={service} className="mb-sm">
                <a href="#" className="body-text hover:text-accent">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="heading-3 mb-md text-accent">Newsletter</h3>
          <p className="body-text mb-md">
            Subscribe to our newsletter to receive updates on the latest tech
            trends and company news.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="form-input flex-grow rounded-r-none"
            />
            <button type="submit" className="btn btn-secondary rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 TheHostCode. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;