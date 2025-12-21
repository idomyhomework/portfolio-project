import React from 'react'
import {footerLinks} from "../constants/index.js";

const Footer = () => {
    const NavFooterItems = ()=> {
        return (
            <ul className={"flex flex-col gap-4 justify-between leading-none sm:flex-row"}>
                {footerLinks.map((item) => (
                    <li className={"footer-nav-link"} key={item.id}>
                        <a href={item.href} target="_blank">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <footer className={"bg-[transparent] py-9"}>
            <div className={"w-9/12 max-w-7xl mx-auto font-mono flex flex-col"}>
                <h1 className={"leading-none flex items-center mb-5"}>My Portfolio<span className={"text-rose-400 text-3xl leading-none"}>.</span></h1>
                <nav className={"max-w-2xl"}>
                    <NavFooterItems/>
                </nav>
            </div>
        </footer>
    )
}
export default Footer
