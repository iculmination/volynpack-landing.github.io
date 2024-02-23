import { Element } from "react-scroll";
import Header from "./components/Header";
import Main from "./components/sections/Main";
import Process from "./components/sections/Process";
import Services from "./components/sections/Services";
import Offer from "./components/sections/Offer";
import About from "./components/sections/About";
import Reviews from "./components/sections/Reviews";
import Form from "./components/sections/Form";
import Contacts from "./components/sections/Contacts";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Element name="main">
        <Main />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="offer">
        <Offer />
      </Element>
      <Element name="process">
        <Process />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="reviews">
        <Reviews />
      </Element>
      <Element name="form">
        <Form />
      </Element>
      <Element name="contacts">
        <Contacts />
      </Element>
    </>
  );
};

export default App;
