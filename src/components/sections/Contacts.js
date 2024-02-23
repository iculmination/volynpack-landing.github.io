import bagImg from "../../media/bag.png";
import insta from "../../media/instagram-white-icon.webp";
import viber from "../../media/viber-white-icon.webp";
import tg from "../../media/telegram-white-icon.webp";

const Contacts = () => {
  return (
    <div className="h-[80vh] lg:h-screen flex items-center justify-center">
      <div
        className="bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bagImg})`,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="bg-gradient-to-r to-transparent from-black absolute inset-0"></div>
        <div className="text-white z-10 relative p-8 md:p-32 pt-16 md:pt-48 text-center">
          <h2 className="text-4xl mb-4">Контактна інформація</h2>
          <p className="text-lg mb-2">
            <a
              href="mailto:example@gmail.com"
              className="text-white hover:underline"
            >
              Електронна пошта: example@gmail.com
            </a>
          </p>
          <p className="text-lg mb-2">
            <a href="tel:1234567890" className="text-white hover:underline">
              Телефон: +1-234-5677-890
            </a>
          </p>
          <p className="text-lg mb-2">
            Адреса складу: вул. Приклад, м. Приклад
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <img
              src={insta}
              className="w-7 h-7 cursor-pointer"
              alt="Instagram"
            />
            <img src={viber} className="w-7 h-7 cursor-pointer" alt="Viber" />
            <img src={tg} className="w-7 h-7 cursor-pointer" alt="Telegram" />
          </div>
          <p className="text-lg mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            perspiciatis.
          </p>
          <p className="text-lg">Lorem ipsum dolor sit amet.</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla
            eligendi blanditiis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
