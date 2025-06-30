import React, { useEffect } from "react";
import { FaMobileAlt, FaRocket, FaPaintBrush, FaPlug } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Features.css";

const features = [
  {
    icon: <FaMobileAlt size={40} color="#4e54c8" />,
    title: "Responsive Design",
    desc: "Looks great on any device, from mobile to desktop."
  },
  {
    icon: <FaRocket size={40} color="#4e54c8" />,
    title: "Fast Performance",
    desc: "Optimized for speed and smooth user experience."
  },
  {
    icon: <FaPaintBrush size={40} color="#4e54c8" />,
    title: "Modern UI",
    desc: "Clean, modern, and visually appealing interface."
  },
  {
    icon: <FaPlug size={40} color="#4e54c8" />,
    title: "API Integration",
    desc: "Seamless integration with external APIs and services."
  }
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="features-section" id="features">
      <h2 className="features-title">Features</h2>
      <div className="features-grid">
        {features.map((f, idx) => (
          <div
            className="feature-card"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 120}
          >
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
