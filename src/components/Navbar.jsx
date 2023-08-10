import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/logo.png"

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    const closeNav = () => setNavOpen(false)
  return (
    <header className='fixed bg-gray-900/50 backdrop-blur h-24 w-screen top-0 z-50 font-Poppins '>
    <nav className="flex items-center justify-between w-full leading-[96px] md:px-32 px-5 md:mt-0 mt-5">
        <Link to="/" onClick={closeNav}> 
            <img src={Logo} alt="" width="100px"/>
        </Link>
        <ul className='lg:flex gap-8 text-custom-white hidden'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/" >Fleet Analytics</Link>
            </li>
            <li>
                <Link to="/">Armoured Vehicles</Link>
            </li>
            <li>
                <Link to="/">Speed Limiters</Link>
            </li>
            <li>
                <Link to="/">Contact Us</Link>
            </li>
        </ul>
        <div className={`lg:hidden`} onClick={() => setNavOpen(!navOpen)}>
        {
            !navOpen? <FaBars color='white' size={35} /> : <FaTimes color='white' size={35} />
        }
        </div>
       
    </nav>
    {
        navOpen && <ul className='flex flex-col items-center px-10 h-[40vh] bg-gray-900/50 backdrop-blur top-[-20] w-screen relative lg:hidden space-y-8 p-4 text-white'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/" >Fleet Analytics</Link>
            </li>
            <li>
                <Link to="/">Armoured Vehicles</Link>
            </li>
            <li>
                <Link to="/">Speed Limiters</Link>
            </li>
            <li>
                <Link to="/">Contact Us</Link>
            </li>
        </ul> 

    }
</header>
  )
}

export default Navbar