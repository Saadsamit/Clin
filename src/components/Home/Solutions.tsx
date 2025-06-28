import Container from "../comon/Container";
import Heading from "../comon/Heading";
import SolutionsCard from "./SolutionsCard";

const SolutionsData = [
  {
    icon: "✓",
    color: "#10b981",
    heading: "Validify",
    bg: "rgba(16,185,129,0.1)",
    dec: "Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, ensures codingaccuracy, and maintains regulatory compliance.",
  },
  {
    icon: "⊘",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    heading: "Redactify",
    dec: "Effortlessly redact HIPAA identifiers from text, documents, and structured data with Redactify – automating your compliance workflow. Protect sensitive patient information while maintaining clinical context.",
  },
  {
    icon: "🗣️",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    heading: "TranscriptX",
    dec: "Spend less time documenting. TranscriptX dictates highly accurate medical transcriptions of patient encounters into text, understanding complex medical terminology and clinical context for superior accuracy.",
  },
  {
    icon: "📝",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.1)",
    heading: "Chartwright",
    dec: "Your best friend with charting – turn any normal text into a high-quality chart, delivered exactly how healthcare professionals need it with extensive customization options to match your workflow and documentation standards.",
  },
];

const Solutions = () => {
  return (
    <div className="bg-[#0f172a]">
      <Container>
        <Heading text="Our Solutions" />
        <p className="text-center text-white mb-8">
          Our comprehensive suite of AI-powered solutions transforms every
          aspect of healthcare documentation:
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {SolutionsData.map((data) => (
            <SolutionsCard key={data.heading} data={data} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Solutions;
