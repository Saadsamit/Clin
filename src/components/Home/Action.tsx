import { useState } from "react";
import Container from "../comon/Container";
import Heading from "../comon/Heading";

const data = [
  {
    id: 1,
    title: "TranscriptX",
  },
  {
    id: 2,
    title: "Chartwright",
  },
  {
    id: 3,
    title: "Redactify",
  },
  {
    id: 4,
    title: "Validify",
  },
];

const Action = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#1E293B] text-white">
      <Container>
        <Heading text="See Our Solutions in Action" />
        <div className="rounded-2xl overflow-hidden shadow-2xl md:max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 sm:grid-cols-2">
            {data.map((item) => (
              <button
                onClick={() => setActive(item.id)}
                className={`${
                  active === item.id && "action-active"
                } border-r border-b border-[#1E293B] cursor-pointer text-[#94a3b8] font-semibold bg-[#0f172a] py-4 last:border-r-0`}
                key={item.id}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="bg-[#3b82f6] cursor-pointer text-center font-medium py-4">
            Click to expand comparison
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Action;
