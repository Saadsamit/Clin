import type { ReactNode } from "react";

type TContainer = {
  className?: string;
  children: ReactNode;
};
const Container = ({ className = "", children }: TContainer) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-6 py-20 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
