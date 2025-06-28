import Container from "../comon/Container";
import Heading from "../comon/Heading";

const Technology = () => {
  return (
    <div className="bg-[#0f172a]">
      <Container>
        <Heading text="Our Technology" />
        <p className=" text-white mb-8 mx-auto md:max-w-5xl">
          At Clin Technologies, we've built our platform on groundbreaking AI
          technology specifically designed for healthcare. Our solutions use the
          latest advancements in natural language processing and machine
          learning to create a system that truly understands the complexities of
          medical documentation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mx-auto mt-12 text-white">
          <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl">
            <div className="flex justify-center items-center size-20 bg-[rgba(59,130,246,0.1)] rounded-full mb-5 transition-all duration-300 hover:scale-110 hover:bg-[rgba(59,130,246,0.2)]">
              <div className="text-3xl text-[#60a5fa]">🧠</div>
            </div>
            <h3 className="text-3xl font-semibold text-[#60a5fa] mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4">
              Sophisticated Natural Language Processing
            </h3>
            <p>
              At the core of our platform is an advanced foundation model. This
              enables our system to grasp the nuances of clinical conversations
              — understanding context, recognizing intent, and accurately
              interpreting medical terminology. This deep comprehension allows
              the AI to generate clear, concise, and contextually relevant
              medical notes automatically.
            </p>
          </div>
          <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-x transition-all duration-500 relative overflow-hidden hover:-translate-y-2.5 hover:shadow-2xl">
            <div className="flex justify-center items-center size-20 bg-[rgba(59,130,246,0.1)] rounded-full mb-5 transition-all duration-300 hover:scale-110 hover:bg-[rgba(59,130,246,0.2)]">
              <div className="text-3xl text-[#60a5fa]">🔄</div>
            </div>
            <h3 className="text-3xl font-semibold text-[#60a5fa] mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4">
              Learning Mode &amp; Personalization
            </h3>
            <p>
              Our AI doesn't rely on generic templates. We initiate the process
              by learning directly from your specific cases and workflows. The
              system intelligently refines its understanding and output based on
              your ongoing feedback. With each processed case, its accuracy and
              alignment with your unique clinical documentation needs become
              increasingly precise, ensuring a truly personalized solution.
            </p>
          </div>
          <div className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:-translate-y-2.5 hover:shadow-2xl">
            <div className="flex gap-4 flex-wrap">
              <div className="inline-flex items-center bg-[rgba(16,185,129,0.1)] py-1.5 px-4 rounded-3xl mb-5 border border-[rgba(16,185,129,0.3)] transition-all duration-300 hover:bg-[rgba(16,185,129,0.2)]">
                <span className="text-[#10b981] mr-2.5 text-lg">🔒</span>
                <span className="text-white font-semibold text-sm">
                  HIPAA COMPLIANT
                </span>
              </div>
              <div className="inline-flex items-center bg-[rgba(79,70,229,0.1)] py-1.5 px-4 rounded-3xl mb-5 border border-[rgba(79,70,229,0.3)] transition-all duration-300 hover:bg-[rgba(79,70,229,0.2)]">
                <span className="text-[#818cf8] mr-2.5 text-lg">📝</span>
                <span className="text-white font-semibold text-sm">
                  BUSINESS ASSOCIATE AGREEMENT
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-semibold text-[#60a5fa] mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4">
              Robust Data Privacy &amp; Security
            </h3>
            <p>
              Protecting sensitive health information is paramount. Our AI
              solutions are architected with a security-first approach,
              incorporating principles like 'zero trust'. We utilize robust
              security measures, including comprehensive encryption (both at
              rest and in transit) and strict, role-based access controls, to
              ensure data integrity and confidentiality, limiting access
              exclusively to authorized personnel.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Technology;
