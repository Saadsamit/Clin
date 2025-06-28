const BannerLogo = () => {
  return (
    <div className={`size-32 relative`}>
      <svg
        className="absolute top-0 left-0 size-full"
        style={{
          animation: "pulse 5s infinite",
          filter: "drop-shadow(0 0 15px rgba(96, 165, 250, 0.5))",
        }}
        viewBox="0 0 100 100"
      >
        <path
          d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40
                   C80 50, 70 60, 60 65 C70 70, 80 80, 80 90
                   C80 105, 60 115, 50 115 C40 115, 20 105, 20 90
                   C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2"
        ></path>
      </svg>
      <svg
        className="absolute top-0 left-0 size-full"
        style={{
          animation: "glow 3s infinite",
        }}
        viewBox="0 0 100 100"
      >
        <path
          d="M35 40 H65 M50 40 V80
                   M35 60 H65 M25 50 H75"
          stroke="#93c5fd"
          strokeWidth="1.5"
          fill="none"
        ></path>
        <circle cx="35" cy="80" r="2" fill="#93c5fd"></circle>
        <circle cx="65" cy="80" r="2" fill="#93c5fd"></circle>
      </svg>
    </div>
  );
};

export default BannerLogo;
