// import React from "react";

// const Hero = () => (
//   <section className="hero" id="home">
//     <h1>Hi, I'm Vivek Badoni</h1>
//     <p>Web Developer | React Enthusiast | Python Developer</p>
//   </section>
// );

// export default Hero;
import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => (
  <section className="hero" id="home">
    <h1>Hi, I'm Vivek Badoni</h1>
    <p>
      <TypeAnimation
  sequence={[
          "Web Developer 💻", 2000,
          "React Enthusiast ⚛️", 2000,
          "Python Developer 🐍", 2000,
          "Open to Opportunities 🚀", 2000,
          "💻 Frontend Developer", 2000,
          "⚛️ ReactJS Lover", 2000,
          "🌐 Django Backend Builder", 2000,
          "🧠 Lifelong Learner", 2000,
          "🚀 Ready to Build & Grow!", 2000
         ]}
  speed={50}
  repeat={Infinity}
/>
{/* 
    "Web Developer",
    2000,
    "Tech Enthusiast",
    2000,
    "Problem Solver",
    2000, */}
      


    </p>
  </section>
);

export default Hero;
