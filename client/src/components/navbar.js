import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <img className="w-[200px] h-[200px]" src="http://artenstudio.com/wp-content/uploads/2022/05/logo-arten.jpeg" alt="" />
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <ul className="lg:flex hidden items-center space-x-10">
                        <li className="text-lg font-semibold hover:text-red-500 transition duration-200 cursor-pointer"><Link to="/">Home</Link></li>
                        <li className="text-lg font-semibold hover:text-red-500 transition duration-200 cursor-pointer">Portofolio</li>
                        <li className="text-lg font-semibold hover:text-red-500 transition duration-200 cursor-pointer">Prices</li>
                        <li className="text-lg font-semibold hover:text-red-500 transition duration-200 cursor-pointer">Online Booking</li>
                        <li className="text-lg font-semibold hover:text-red-500 transition duration-200 cursor-pointer">Music News</li>
                        <li className="text-lg font-semibold hover:text-red-500 transition duration-200 cursor-pointer">Shop</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;