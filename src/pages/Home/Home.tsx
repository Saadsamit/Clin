import { Element } from "react-scroll";
import About from "../../components/Home/About";
import Banner from "../../components/Home/Banner";
import NavBar from "../../components/Home/NavBar";
import Solutions from "../../components/Home/Solutions";
import Action from "../../components/Home/Action";
import Technology from "../../components/Home/Technology";
import Benefits from "../../components/Home/Benefits";
import Case from "../../components/Home/Case";
import Footer from "../../components/Home/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Element name="about">
        <Banner />
        <About />
      </Element>
      <Element name="solutions">
        <Solutions />
      </Element>
      <Element name="action">
        <Action />
      </Element>
      <Element name="technology">
        <Technology />
      </Element>
      <Element name="benefits">
        <Benefits />
      </Element>
      <Element name="case">
        <Case />
      </Element>
      <Footer />
    </>
  );
};

export default Home;
