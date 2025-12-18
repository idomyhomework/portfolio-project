import React, {useState} from 'react'
import {navLinks} from "../constants/index.js";
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/close.svg';
import '../index.css';
const Header = () => {

    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () =>{
        setOpen((prevOpen) => !prevOpen);
        console.log(isOpen);
    }

    const NavItems = ()=> {
        return (
            <ul className={"flex flex-col gap-4 justify-between items-center leading-none sm:flex-row"}>
                {navLinks.map((item) => (
                    <li className={"text-base"} key={item.id}>
                        <a href={item.href}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <header className={"bg-[transparent]"}>
            <div className={"w-9/12 h-16 flex justify-between items-center mx-auto font-mono max-w-7xl"}>
                <h1 className={"leading-none flex items-center"}>My Portfolio<span className={"text-rose-400 text-3xl leading-none"}>.</span></h1>
                <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none
                     sm:hidden flex" aria-label="Toggle Menu">
                    <img src={isOpen ? closeIcon : menuIcon } alt={"button"} className="w-6 h-6" />
                </button>
                <nav className={"sm:flex hidden"}>
                    <NavItems/>
                </nav>
            </div>

            <div
                className={`nav-sidebar ${
                    isOpen
                        ? 'opacity-100 scale-y-100 max-h-96'
                        : 'opacity-0 scale-y-0 max-h-0 pointer-events-none'
                }`}
            >
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}
export default Header
