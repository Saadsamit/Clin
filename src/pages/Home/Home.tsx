import { Element } from "react-scroll";
import About from "../../components/Home/About";
import Banner from "../../components/Home/Banner";
import NavBar from "../../components/Home/NavBar";
import Solutions from "../../components/Home/Solutions";

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
    </>
  );
};

export default Home;
