import Container from "../comon/Container";
import Heading from "../comon/Heading";
import LoginButtons from "../comon/LoginButtons";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1E293B] text-white border-b border-[rgba(96,165,250,0.2)]">
        <Container>
          <Heading text="Get Started" />
          <p className="text-center max-w-4xl mx-auto">
            Ready to transform your clinical documentation process? Contact our
            team to learn how Clin Technologies can be tailored to your specific
            healthcare setting.
          </p>
          <LoginButtons />
        </Container>
      </div>
      <div className="text-[#95a4b9] bg-[#1E293B]">
        <Container className="pt-14 pb-8 flex flex-wrap flex-col gap-4 md:flex-row justify-between items-center">
          <ul className="flex flex-wrap gap-4">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
          <p>© 2025 Clin Technologies. All rights reserved.</p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
