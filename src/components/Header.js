import React, { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";
import insta from "../media/instagram-white-icon.webp";
import viber from "../media/viber-white-icon.webp";
import tg from "../media/telegram-white-icon.webp";
import phone from "../media/Tilda_Icons_2web_phone.svg";
import burgerIcon from "../media/hamburger-menu.svg";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (isMobileMenuOpen) {
  //       // Заборона скролінгу при відкритому меню
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       // Відновлення скролінгу при закритті меню
  //       document.body.style.overflow = 'auto';
  //     document.body.style.overflowY = 'scroll';

  //     }
  //   };

  //   // Додавання обробника подій при відкритті/закритті меню
  //   if (isMobileMenuOpen) {
  //     document.addEventListener("scroll", handleScroll);
  //   }

  //   // Видалення обробника подій при видаленні компонента або закритті меню
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    closeMobileMenu();
  };

  return (
    <div className="fixed top-0 bg-main-color box-border w-full pl-4 pr-4 pt-4 pb-4 md:pl-32 md:pr-32 md:pt-8 md:pb-8 flex justify-between z-50 text-gray-800 shadow-main-bottom">
      <div className="flex items-center">
        <Link
          to="main"
          smooth
          className="flex flex-col items-center cursor-pointer"
          onClick={closeMobileMenu}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
            VolynPack LOGO
          </h2>
          <p className="text-sm md:text-base">Паперові пакети</p>
        </Link>
      </div>
      <nav className="hidden md:flex justify-between w-12 min-w-96 items-center">
        <Link
          to="about"
          smooth
          onClick={() => scrollToElement("about")}
          role="button"
        >
          <p className="text-gray-800 cursor-pointer text-sm md:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Про нас
          </p>
        </Link>
        <Link
          to="contacts"
          smooth
          onClick={() => scrollToElement("contacts")}
          role="button"
        >
          <p className="text-gray-800 cursor-pointer text-sm md:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Контакти
          </p>
        </Link>
        <Link
          to="form"
          smooth
          onClick={() => scrollToElement("form")}
          role="button"
        >
          <p className="text-gray-800 cursor-pointer text-sm md:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Замовити
          </p>
        </Link>
      </nav>
      <div className="md:hidden flex items-center">
        <img
          src={burgerIcon}
          alt="burger"
          className="w-6 h-6 cursor-pointer"
          onClick={toggleMobileMenu}
        />
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 h-screen w-full bg-main-color flex flex-col items-center opacity-100">
            <button
              className="self-end text-xl mr-4 mt-4 font-bold"
              onClick={closeMobileMenu}
            >
              ✕
            </button>

            <Link
              to="about"
              smooth
              onClick={() => scrollToElement("about")}
              className="cursor-pointer py-4"
            >
              Про нас
            </Link>
            <Link
              to="contacts"
              smooth
              onClick={() => scrollToElement("contacts")}
              className="cursor-pointer py-4"
            >
              Контакти
            </Link>
            <Link
              to="form"
              smooth
              onClick={() => scrollToElement("form")}
              className="cursor-pointer py-4"
            >
              Замовити
            </Link>
            <div className="flex items-center py-4">
              <img src={phone} alt="call" className="w-6 h-6 mr-2" />
              <a href="tel:1234567890">+1-234-5677-890</a>
            </div>
            <div className="flex mt-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 mr-2 lg:mr-6 bgc-secondary rounded-full flex text-white text-base md:text-xl cursor-pointer text-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a
                  href="https://www.instagram.com/volynpack.ua?igsh=anhzOTgwOHFnaXox"
                  className="flex mx-auto w-full h-full justify-center items-center"
                >
                  <img
                    src={insta}
                    alt="instagram"
                    className="w-5 h-5 lg:w-7 lg:h-7"
                  />
                </a>
              </div>
              <div className="w-12 h-12 lg:w-16 lg:h-16 mr-2 lg:mr-6 bgc-secondary rounded-full flex text-white text-base md:text-xl cursor-pointer text-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a
                  href="https://www.instagram.com/volynpack.ua?igsh=anhzOTgwOHFnaXox"
                  className="flex mx-auto w-full h-full justify-center items-center"
                >
                  <img
                    src={viber}
                    alt="viber"
                    className="w-5 h-5 lg:w-7 lg:h-7"
                  />
                </a>
              </div>
              <div className="w-12 h-12 lg:w-16 lg:h-16 bgc-secondary rounded-full flex text-white text-base md:text-xl cursor-pointer text-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a
                  href="https://www.instagram.com/volynpack.ua?igsh=anhzOTgwOHFnaXox"
                  className="flex mx-auto w-full h-full justify-center items-center"
                >
                  <img
                    src={tg}
                    alt="telegram"
                    className="w-5 h-5 lg:w-7 lg:h-7"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
