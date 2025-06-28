import type { CSSProperties } from "react";
import bannerImg from "../../assets/bannerImg.png";
import Container from "../comon/Container";
import LoginButtons from "../comon/LoginButtons";
import NavLogo from "./NavLogo";

const Banner = () => {
  const bannerCss: CSSProperties = {
    backgroundImage: `url(${bannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="h-[calc(100vh-64px)] relative" style={bannerCss}>
      <div className="bg-black opacity-5 absolute inset-0"></div>
      <Container className="h-full">
        <div className="text-white z-10 relative flex flex-col gap-4 justify-center text-center items-center h-full">
          <NavLogo size={32} />
          <h1 className="text-5xl font-extrabold text-[#60a5fa] ">
            Clin Technologies
          </h1>
          <p className="text-2xl text-[#94a3b8] mt-2.5 mb-0 md:max-w-5xl  ">
            Revolutionizing clinical documentation through{" "}
            <span className="text-[#f59e0b] font-semibold">
              HIPAA COMPLIANT
            </span>
            advanced artificial intelligence, giving healthcare providers more
            time for what truly matters — patient care. try it for{" "}
            <span className="text-[#f59e0b] font-semibold">FREE</span> today
          </p>
          <p className="text-xl text-[#e2e8f0] mt-3.5 md:max-w-xl">
            Our sophisticated AI platform intelligently processes clinical
            conversations, creating accurate documentation that integrates with
            your existing EMR system.
          </p>
          <LoginButtons />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
