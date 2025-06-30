import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaAws, FaGitAlt, FaJira, FaLinux, FaNetworkWired, FaCloud } from "react-icons/fa";
import { SiMongodb, SiMysql, SiC, SiCplusplus, SiKalilinux } from "react-icons/si";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsFillLightningFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import "./TechStack.css";

const techCategories = [
  {
    title: "Programming",
    skills: [
      { icon: <FaPython size={40} color="#3776AB" />, name: "Python" },
      { icon: <FaJava size={40} color="#007396" />, name: "Java" },
      { icon: <SiC size={40} color="#A8B9CC" />, name: "C" },
    ],
  },
  {
    title: "Web",
    skills: [
      { icon: <FaHtml5 size={40} color="#e34c26" />, name: "HTML5" },
      { icon: <FaCss3Alt size={40} color="#2965f1" />, name: "CSS3" },
      { icon: <FaJs size={40} color="#f7df1e" />, name: "JavaScript" },
      { icon: <FaReact size={40} color="#61dafb" />, name: "React" },
      { icon: <FaNodeJs size={40} color="#8cc84b" />, name: "Node.js" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { icon: <SiMysql size={40} color="#00758F" />, name: "MySQL" },
      { icon: <SiMongodb size={40} color="#47A248" />, name: "MongoDB" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { icon: <FaAws size={40} color="#FF9900" />, name: "AWS" },
      { icon: <FaCloud size={40} color="#0089D6" />, name: "Azure" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: <FaGitAlt size={40} color="#F05032" />, name: "Git" },
      { icon: <FaJira size={40} color="#0052CC" />, name: "JIRA" },
      { icon: <MdOutlineAnalytics size={40} color="#F2C811" />, name: "Power BI" },
    ],
  },
  {
    title: "Other",
    skills: [
      { icon: <BsFillLightningFill size={40} color="#4e54c8" />, name: "Problem-Solving" },
      { icon: <MdOutlineAnalytics size={40} color="#4e54c8" />, name: "Business Analytics" },
      { icon: <span style={{fontSize:40, color:'#4e54c8'}}>Agile</span>, name: "Agile" },
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      { icon: <SiKalilinux size={40} color="#268BEE" />, name: "Kali Linux" },
      { icon: <FaLinux size={40} color="#FCC624" />, name: "Operating Systems" },
      { icon: <FaNetworkWired size={40} color="#4e54c8" />, name: "Computer Networks" },
    ],
  },
];

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="techstack-section" id="techstack">
      <h2 className="techstack-title">Tech Stack</h2>
      <div className="techstack-categories">
        {techCategories.map((cat, i) => (
          <div className="techstack-category" key={cat.title} data-aos="fade-up" data-aos-delay={i * 100}>
            <h3 className="techstack-category-title">{cat.title}</h3>
            <div className="techstack-grid">
              {cat.skills.map((t, idx) => (
                <Tilt
                  className="tech-card"
                  glareEnable={true}
                  glareMaxOpacity={0.25}
                  glareColor="#fff"
                  glarePosition="all"
                  scale={1.07}
                  key={t.name}
                >
                  <>
                    <div className="tech-icon">{t.icon}</div>
                    <div className="tech-name">{t.name}</div>
                  </>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
