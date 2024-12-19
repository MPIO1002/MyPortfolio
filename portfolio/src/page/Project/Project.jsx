import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className='container mx-auto bg-gray-100'>
            <h1 className="text-5xl font-bold mb-8 text-center">Projects</h1>

            {/* Project 1 */}
            <div className='p-8'>
                <h1 className="text-3xl font-bold mb-2 text-center">Ecommerce Website: Manwah Clone</h1>
                <p className="text-center text-lg">(8 members, score: 8.5)</p>
                <div className="flex justify-center space-x-4 mt-8 mb-8">
                    <a href="https://github.com/Restaurant-Manager-Project" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#262626] text-white px-8 py-2 rounded-3xl hover:bg-[#3f3f46] transition duration-300">GitHub</button>
                    </a>
                    <a href="https://hougouhotpotrestaurant.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#262626] text-white px-8 py-2 rounded-3xl hover:bg-[#3f3f46] transition duration-300">Demo</button>
                    </a>
                </div>
                <p className="text-center text-md mb-8">
                    Position: Frontend dev (using ReactJS, Axios)<br />
                    This innovative platform revolutionizes the way we manage our restaurant. By implementing QR code scanning for order placement, we empower customers to browse and order their favorite dishes with ease. Our integrated loyalty program rewards repeat customers with exclusive offers, fostering customer retention and loyalty. Additionally, the seamless integration with VNPay provides a convenient and secure payment option for our guests. Developed using a combination of ReactJS, Java, Rest API and PostgreSQL.
                </p>
                <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="col-span-1 row-span-3" data-aos="fade-right">
                        <img src="/pro-home.png" alt="Vertical 1" className="w-full h-full object-cover rounded-lg shadow-md" />
                    </div>
                    <div className="col-span-1 row-span-3" data-aos="fade-left">
                        <img src="/pro-menu.png" alt="Vertical 2" className="w-full h-full object-cover rounded-lg shadow-md" />
                    </div>
                    <div className="col-span-1 row-span-1" data-aos="fade-up">
                        <img src="pro-table.png" alt="Horizontal 1" className="w-full h-full object-cover rounded-lg shadow-md" />
                    </div>
                    <div className="col-span-1 row-span-1" data-aos="fade-up">
                        <img src="pro-cart.png" alt="Horizontal 2" className="w-full h-full object-cover rounded-lg shadow-md" />
                    </div>
                    <div className="col-span-1 row-span-1" data-aos="fade-up">
                        <img src="pro-vn-pay.png" alt="Horizontal 3" className="w-full h-full object-cover rounded-lg shadow-md" />
                    </div>
                </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#18181b] text-gray-100 p-8">
                <h1 className="text-3xl font-bold mt-8 mb-2 text-center">Ecommerce Website: Popeyes Clone</h1>
                <p className="text-center text-lg">(3 members, score: 8)</p>
                <div className="flex justify-center space-x-4 mt-8 mb-8">
                    <a href="https://github.com/MPIO1002/POPEYES-clone" target="_blank" rel="noopener noreferrer">
                        <button className="text-[#262626] bg-gray-100 px-8 py-2 rounded-3xl hover:bg-[#3f3f46] transition duration-300">GitHub</button>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <button className="text-[#262626] bg-gray-100 px-8 py-2 rounded-3xl hover:bg-[#3f3f46] transition duration-300">Demo</button>
                    </a>
                </div>
                <p className="text-center text-md mb-8">
                    Position: Leader<br />
                    This project is an e-commerce website developed using HTML, CSS, and JavaScript. It features a user-friendly interface with essential functionalities such as product display, shopping cart, order management, and user registration/login.
                </p>
                <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="col-span-1" data-aos="fade-right">
                        <img src="/pop-home.jpeg" alt="Pop Home" className="w-full h-full object-cover rounded-lg shadow-md" />
                    </div>
                    <div className="col-span-1" data-aos="fade-left">
                        <img src="/pop-memu.jpeg" alt="Pop Menu" className="w-full h-full object-cover rounded-lg shadow-md" />
                    </div>
                </div>
            </div>

            {/* Project 3 */}
            <div className='p-8 bg-gray-100'>
                <h1 className="text-3xl font-bold mb-2 text-center">Ecommerce Website: Pizza Hut Clone</h1>
                <p className="text-center text-lg">(5 members, score: 9)</p>
                <div className="flex justify-center space-x-4 mt-8 mb-8">
                    <a href="https://github.com/MPIO1002/PizzaHut-clone" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#262626] text-white px-8 py-2 rounded-3xl hover:bg-[#3f3f46] transition duration-300">GitHub</button>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#262626] text-white px-8 py-2 rounded-3xl hover:bg-[#3f3f46] transition duration-300">Demo</button>
                    </a>
                </div>
                <p className="text-center text-md mb-8">
                    Position: Frontend dev (using HTML, CSS, JavaScript)<br />
                    This web application is designed to automate the processes of a pizza restaurant. Developed using a combination of HTML, CSS, JavaScript, PHP, and SQL Server, the system offers a user-friendly frontend for customers to place orders and a backend for store owners to manage operations. Key features include an online menu, shopping cart functionality, order tracking, inventory management, and sales reporting.
                </p>
                <div className="grid gap-4 p-4">
                    <div className="row-span-1" data-aos="fade-right">
                        <img src="/hut-home.jpeg" alt="Pizza Home" className="w-full aspect-w-16 aspect-h-9 object-cover rounded-lg shadow-md" />
                    </div>
                    <div className="row-span-1" data-aos="fade-left">
                        <img src="/hut-signup.jpeg" alt="Pizza Menu" className="w-full aspect-w-16 aspect-h-9 object-cover rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project