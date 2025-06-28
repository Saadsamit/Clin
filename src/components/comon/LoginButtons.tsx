import { Link } from "react-router-dom";

const LoginButtons = () => {
  return (
    <div className="flex flex-wrap md:flex-row flex-col justify-center items-center gap-5 mt-8 w-full">
      <Link
        to={"/login"}
        className="border-2 border-[#3b82f6] w-full md:w-max text-white px-8 py-4 rounded-full hover:bg-[rgba(59,130,246,0.1)] shadow-[0_5px_15px_rgba(37,99,235,0.2)] text-center"
      >
        Login
      </Link>
      <Link
        to={"/signup"}
        className="bg-gradient-to-r from-[#3b82f6] w-full md:w-max to-[#2563eb] text-white px-8 py-4 rounded-full hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)] transition-all shadow-[0_5px_15px_rgba(37,99,235,0.4)] text-center"
      >
        Signup
      </Link>
    </div>
  );
};

export default LoginButtons;
