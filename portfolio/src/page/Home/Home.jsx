import React, { useEffect, useState } from 'react';
import '../../index.css';

const Home = () => {
    const [scale, setScale] = useState(1);
    const [isScaled, setIsScaled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                const newScale = 1 + scrollY / 500; // Điều chỉnh giá trị này để thay đổi tốc độ phóng to
                setScale(newScale);
                setIsScaled(false);
            } else {
                setScale(1 + window.innerHeight / 500); // Giữ nguyên giá trị scale khi cuộn qua ảnh
                setIsScaled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
                <div className={`md:w-1/2 z-10 transition-transform duration-300 ${isScaled ? 'fixed top-0 left-0 w-full h-full' : ''}`}>
                    <img
                        src="/myphoto.JPG"
                        alt="Profile"
                        className="shadow-lg w-full h-auto max-w-full max-h-screen object-cover"
                        style={{ transform: `scale(${scale})`, maxHeight: '100vh' }}
                    />
                </div>
                <div className={`md:w-1/2 p-4 text-center md:text-left z-0 ${isScaled ? 'hidden' : ''}`}>
                    <h1 className="text-7xl font-bold mb-4 slide-in-left">Passionate about building friendly and engaging web interfaces</h1>
                    <div className="flex justify-center md:justify-start space-x-4">

                        <button className="bg-[#262626] text-white px-8 py-2 rounded-3xl hover:bg-[#3f3f46] transition duration-300 slide-in-left w-40"><a href="https://drive.google.com/file/d/1X-Dexav7viP0RX1wdTfQZEhl_PTEYWhg/view?usp=sharing" target="_blank" rel="noopener noreferrer">My CV </a></button>

                    <button className="bg-white text-[#262626] px-8 py-2 rounded-3xl hover:bg-[#3f3f46] hover:text-white transition duration-300 slide-in-left border border-[#262626] w-40">Contact Me</button>
                    <img src="/working.png" alt="Working" className="hidden md:block w-16 h-16 slide-in-left" />
                </div>
            </div>
        </div>
    </div >
  );
}

export default Home;