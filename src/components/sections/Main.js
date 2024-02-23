import "../../App.css";
import bagImg from "../../media/bag.png";
import insta from "../../media/instagram-white-icon.webp";
import viber from "../../media/viber-white-icon.webp";
import tg from "../../media/telegram-white-icon.webp";

const Main = () => {
  return (
    <div className="bg-main-color w-full -24 pl-8 md:pl-16 lg:pl-32 pr-8 md:pr-16 lg:pr-32 pt-24 md:pt-32 md:pt-48 pb-8 flex flex-col md:flex-row justify-between items-center md:items-start">
      <div className="text-center md:text-left mb-8 md:mb-0 lg:mt-36">
        <h1 className="text-4xl lg:text-6xl font-bold mt-4 md:mt-0 text-gray-800">
          Виготовляємо <span className="text-secondary-color">якісні</span> паперові пакети
        </h1>
        <p className="mt-2 text-xl lg:text-2xl lg:mb-16">Висока якість та вигідні ціни</p>
        <div className="flex mt-4 justify-center md:justify-start">
          <div className="w-32 h-12 lg:w-48 lg:h-16 mr-2 lg:mr-12 bgc-secondary rounded-full flex text-white text-base lg:text-xl cursor-pointer text-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <a href="#" className="w-full">
              Замовити
            </a>
          </div>
          <div className="w-12 h-12 lg:w-16 lg:h-16 mr-2 lg:mr-6 bgc-secondary rounded-full flex text-white text-base md:text-xl cursor-pointer text-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <a
              href="https://www.instagram.com/volynpack.ua?igsh=anhzOTgwOHFnaXox"
              className="flex mx-auto w-full h-full justify-center items-center"
            >
              <img src={insta} alt="instagram" className="w-5 h-5 lg:w-7 lg:h-7" />
            </a>
          </div>
          <div className="w-12 h-12 lg:w-16 lg:h-16 mr-2 lg:mr-6 bgc-secondary rounded-full flex text-white text-base md:text-xl cursor-pointer text-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <a
              href="https://www.instagram.com/volynpack.ua?igsh=anhzOTgwOHFnaXox"
              className="flex mx-auto w-full h-full justify-center items-center"
            >
              <img src={viber} alt="viber" className="w-5 h-5 lg:w-7 lg:h-7" />
            </a>
          </div>
          <div className="w-12 h-12 lg:w-16 lg:h-16 bgc-secondary rounded-full flex text-white text-base md:text-xl cursor-pointer text-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <a
              href="https://www.instagram.com/volynpack.ua?igsh=anhzOTgwOHFnaXox"
              className="flex mx-auto w-full h-full justify-center items-center"
            >
              <img src={tg} alt="telegram" className="w-5 h-5 lg:w-7 lg:h-7" />
            </a>
          </div>
        </div>
        <p className="mt-2 text-base lg:text-xl text-gray-400 mt-6">
          Знижка 10% на перше замовлення
        </p>
      </div>
      <div>
        <img
          src={bagImg}
          alt="Паперовий пакет"
          className="max-w-full border-secondary-img lg:mt-36 xl:mt-0"
        />
      </div>
    </div>
  );
};

export default Main;
