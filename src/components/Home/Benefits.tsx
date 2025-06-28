import Container from "../comon/Container";
import Heading from "../comon/Heading";
import LoginButtons from "../comon/LoginButtons";

const Benefits = () => {
  return (
    <div className="bg-[#1E293B] text-white">
      <Container>
        <Heading text="Benefits" />
        <div className="md:max-w-5xl mx-auto">
          <p>Healthcare providers using Clin Technologies solutions report:</p>
          <ul className="list-disc ml-8 mt-4">
            <li>Reduction in documentation time by 40-60%</li>
            <li>Improved work-life balance with less after-hours charting</li>
            <li>
              Enhanced patient interaction due to less focus on note-taking
            </li>
            <li>More comprehensive and consistent clinical documentation</li>
            <li>Reduced risk of documentation errors and omissions</li>
          </ul>
          <LoginButtons />
        </div>
      </Container>
    </div>
  );
};

export default Benefits;
