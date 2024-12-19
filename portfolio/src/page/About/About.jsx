import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../index.css';

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <div className="relative overflow-hidden h-32 mb-8">
        <div
          className="absolute whitespace-nowrap w-full text-center"
          style={{ transform: `translateX(${scrollPosition * 0.5}px)` }}
        >
          <span className="text-5xl font-bold">Perseverance in pursuing your</span>
        </div>
        <div
          className="absolute whitespace-nowrap w-full text-center mt-16"
          style={{ transform: `translateX(-${scrollPosition * 0.5}px)` }}
        >
          <span className="text-5xl font-bold">dreams is the key to success</span>
        </div>
      </div>
      <h1 className="text-5xl font-bold mb-8 text-center">About Me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="p-8 hover:-translate-y-2 transition duration-500 rounded-lg flex flex-col items-center justify-center cursor-pointer" data-aos="fade-up">
          <img src="/education.png" alt="Education" className="w-16 h-16 mb-4" />
          <h2 className="text-3xl font-bold mb-2">Education:</h2>
          <p className="text-lg">Studying at Sai Gon University</p>
          <p className="text-lg">GPA: 7.75/10</p>
          <p className="text-lg">IELTS Certificate 7.0 Overall</p>
        </div>
        <div className="p-8 hover:-translate-y-2 transition duration-500 rounded-lg flex flex-col items-center justify-center cursor-pointer" data-aos="fade-up">
          <img src="/code.png" alt="Coding Languages" className="w-16 h-16 mb-4" />
          <h2 className="text-3xl font-bold mb-2">Coding Languages:</h2>
          <p className="text-lg">Java</p>
          <p className="text-lg">JavaScript</p>
          <p className="text-lg">React</p>
        </div>
        <div className="p-8 hover:-translate-y-2 transition duration-500 rounded-lg flex flex-col items-center justify-center cursor-pointer" data-aos="fade-up">
          <img src="/requirements.png" alt="Skills" className="w-16 h-16 mb-4" />
          <h2 className="text-3xl font-bold mb-2">Skills:</h2>
          <p className="text-lg">Teamwork</p>
          <p className="text-lg">Problem Solving</p>
          <p className="text-lg">Communication</p>
        </div>
        <div className="p-8 hover:-translate-y-2 transition duration-500 rounded-lg flex flex-col items-center justify-center cursor-pointer" data-aos="fade-up">
          <img src="/hobby.png" alt="Hobbies" className="w-16 h-16 mb-4" />
          <h2 className="text-3xl font-bold mb-2">Hobbies:</h2>
          <p className="text-lg">Football</p>
          <p className="text-lg">Music</p>
          <p className="text-lg">Video games</p>
        </div>
      </div>
    </div>
  );
}

export default About;