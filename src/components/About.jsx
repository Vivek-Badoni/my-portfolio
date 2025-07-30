// import React from "react";

// const About = () => (
//   <section className="section" id="about">
//     <h2>About Me</h2>
//     <p>I'm pursuing BSc in IT from Uttarakhand University. I build websites using HTML, CSS, Bootstrap, React, Python, and Django.</p>
//   </section>
// );

// export default About;
import React from "react";
import { FaFileDownload, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGithub, FaDatabase, FaMicrophone, FaBootstrap } from "react-icons/fa";
import { SiFirebase, SiPostman } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';

const About = () => (
  <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10" id="about">
    <div className="container">
      <h2 className="text-center mb-4">About Me</h2>

      {/* Typing animation */}
      <div className="text-center mb-3">
        <TypeAnimation
          sequence={[
            "Web Developer",
            2000,
            "Tech Enthusiast",
            2000,
            "Problem Solver",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}
        />
      </div>

      <p className="text-center mb-4">
        I'm Vivek Badoni, a passionate Web Developer with a strong interest in real-world problem-solving using technology. I build responsive web applications with modern tools like React, Bootstrap, and Python.
      </p>

      <div className="row mb-4">
        {/* Skills Section */}
        <div className="col-md-6">
          <h5>Skills</h5>
          <ul className="list-unstyled">
            <li><FaHtml5 className="text-danger me-2" /> HTML</li>
            <li><FaCss3Alt className="text-primary me-2" /> CSS</li>
            <li><FaJs className="text-warning me-2" /> JavaScript</li>
            <li><FaReact className="text-info me-2" /> React</li>
            <li><FaBootstrap className="text-purple me-2" /> Bootstrap</li>
            <li><FaPython className="text-success me-2" /> Python</li>
            <li><FaPhp className="text-primary me-2" /> PHP</li>
            <li><FaMicrophone className="text-secondary me-2" /> Speech Recognition</li>
            <li><SiFirebase className="text-warning me-2" /> Firebase</li>
            <li><FaDatabase className="text-danger me-2" /> MySQL</li>
            <li><FaGithub className="text-dark me-2" /> GitHub</li>
            <li><SiPostman className="text-warning me-2" /> Postman</li>
          </ul>
        </div>

        {/* Certifications Section */}
        <div className="col-md-6">
          <h5>Certifications</h5>
          <ul className="list-unstyled">
            <li>✅ Python for Beginners</li>
            <li>✅ Responsive Web Design</li>
            <li>✅ React Crash Course</li>
            <li>✅ Git & GitHub Essentials</li>
          </ul>
          <a
            href="/myfinal resume.dox"
            className="btn btn-outline-success mt-3"
            download
          >
            <FaFileDownload className="me-2" /> Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
