const Heading = ({ text }: { text: string }) => {
  return (
    <h3 className="text-4xl font-bold mb-8 text-[#60a5fa] text-center">
      {text}
    </h3>
  );
};

export default Heading;
