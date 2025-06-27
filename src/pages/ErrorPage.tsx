import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative bg-[#5C1CA8] text-white h-screen flex flex-col justify-center">
        <div className="text-center px-6 md:px-8 z-10">
          <h1 className="text-6xl font-extrabold mb-6 text-red-400">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Oops! The page you're looking for doesn't exist.
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            It looks like you took a wrong turn or the page has been moved.
            Don’t worry, we’ll guide you back!
          </p>
          <Link
            to={"/"}
            className="bg-[#CC7FFF] text-white px-12 py-3 rounded-full font-semibold shadow-lg hover:bg-[#a75ed9] transition duration-300"
          >
            Go Back to Home
          </Link>
        </div>
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-pink-500 opacity-20 rounded-full blur-3xl bottom-20 md:bottom-32 right-[150px]"></div>
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-pink-500 opacity-20 rounded-full blur-3xl top-20 -left-20"></div>
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-pink-500 opacity-20 rounded-full blur-3xl -top-10 -right-20"></div>
      </div>
    </div>
  );
};
export default ErrorPage;
