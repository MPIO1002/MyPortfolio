import React, { useEffect } from 'react'
import Typical from 'react-typical'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="container mx-auto p-4 bg-[#18181b] text-gray-100">
      <div className="h-screen flex items-center justify-center trasition duration-500" data-aos="fade-in">
        <Typical
          steps={['For me, a beautiful website is one that makes people want to visit it again and again.', 1000]}
          loop={Infinity}
          wrapper="h1"
          className="text-8xl font-bold text-center"
        />
      </div>
      <h1 className="text-5xl font-bold mb-8 text-center">Contact Me</h1>
      <div className="flex flex-col items-center space-y-4 mb-8">
        <div className="text-lg">
          <span className="font-bold">Email: </span>
          <a href="mailto:minhphuc309@gmail.com" className="text-gray-100 hover:underline">minhphuc309@gmail.com</a>
        </div>
        <div className="text-lg">
          <span className="font-bold">GitHub: </span>
          <a href="https://github.com/MPIO1002" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:underline">https://github.com/MPIO1002</a>
        </div>
      </div>
    </div>
  )
}

export default Contact