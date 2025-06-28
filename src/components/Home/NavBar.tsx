import { useState } from "react";
import Container from "../comon/Container";
import NavLogo from "./NavLogo";
import { IoMenu } from "react-icons/io5";
import LinkComponents from "./LinkComponents";

const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
      <div className="bg-[#0E1628] text-white fixed z-50 top-0 right-0 left-0">
        <Container className="py-4!">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <NavLogo />
              <h3 className="text-2xl font-bold ml-2">Clin</h3>
              <button
                onClick={() => setShow(!show)}
                className="block md:hidden"
              >
                <IoMenu size={25} />
              </button>
            </div>
            <div className="hidden md:block">
              <LinkComponents />
            </div>
          </div>
          <div className={`my-10 ml-6 block md:hidden ${!show && "hidden"}`}>
            <LinkComponents setShow={setShow} />
            <div className=""></div>
          </div>
        </Container>
      </div>
  );
};

export default NavBar;
