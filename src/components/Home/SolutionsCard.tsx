type TSolutionsCard = {
  icon: string;
  color: string;
  heading: string;
  dec: string;
  bg: string;
};

const SolutionsCard = ({ data }: { data: TSolutionsCard }) => {
  const { icon, color, heading, dec, bg } = data;
  return (
    <div
      className={`bg-[#1e3a8a4d] text-white rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative hover:translate-y-[-10px] hover:shadow-2xl border-t-4 border-t-[${color}]`}
    >
      <div
        className={`flex items-center justify-center size-16 rounded-full bg-[${bg}] mb-5 transition-all duration-300 text-3xl text-[${color}] hover:scale-110`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#60a5fa] mt-0 mb-4">
        {heading}
      </h3>
      <p>{dec}</p>
    </div>
  );
};

export default SolutionsCard;
