import React from "react";

const SimpleBanner = ({ children }) => {
  return (
    <div>
      <div className="bg-cover text-white">
        <div className="text-7xl font-bold text-center pt-16 pb-16 bg-gradient-to-t from-[#011D29] opacity-95 text-[#fd6656]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SimpleBanner;
