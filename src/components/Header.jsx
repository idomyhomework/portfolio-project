import { useState, useEffect } from "react";
import { navLinks } from "../constants/index.js";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import "../index.css";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const projectsPositionTop = projectsSection.getBoundingClientRect().top;
        const projectsPositionBottom =
          projectsSection.getBoundingClientRect().bottom;
        const isVisibleNow = projectsPositionTop > 0 || projectsPositionBottom < 0
        setVisible(isVisibleNow);
        if (!isVisibleNow) {
          setOpen(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log(isOpen);
  };

  const NavItems = () => {
    return (
      <ul
        className={
          "flex flex-col gap-4 justify-between items-center leading-none sm:flex-row"
        }
      >
        {navLinks.map((item) => (
          <li className={"header-nav-links"} key={item.id}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0 bg-white shadow-md" : "-translate-y-full"
        }`}
      >
        <div
          className={
            "w-9/12 max-w-7xl h-16 flex justify-between items-center mx-auto font-mono"
          }
        >
          <h1 className={"leading-none flex items-center"}>
            My Portfolio
            <span className={"text-rose-400 text-3xl leading-none"}>.</span>
          </h1>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none
                     sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? closeIcon : menuIcon}
              alt={"button"}
              className="w-6 h-6"
            />
          </button>
          <nav className={"sm:flex hidden"}>
            <NavItems />
          </nav>
        </div>

        <div
          className={`nav-sidebar ${
            isOpen && isVisible
              ? "opacity-100 scale-y-100 max-h-96"
              : "opacity-0 scale-y-0 max-h-0 pointer-events-none"
          }`}
        >
          <nav className="p-5">
            <NavItems />
          </nav>
        </div>
      </header>
      <section className={"h-[calc(100vh-4rem)] w-full"}>
        <div className={"pt-[calc(20vh)] w-9/12 mx-auto"}>
          <h1
            className={
              "font-mono text-6xl text-[#333333] sm:text-8xl md:text-9xl"
            }
          >
            Hello,
            <br /> you
          </h1>
        </div>
      </section>
    </>
  );
};
export default Header;
