import React from "react";
import { Link } from "react-router-dom";

const StoreBanner = () => {
  return (
    <div className="px-10 mt-6">
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('/assets/store.jpg')` }}
        ></div>

        {/* Overlay content */}
         {/* Overlay content */}
        <div className="absolute bottom-6 right-6 z-10">
          <Link
            to="/store"
            className="bg-black bg-opacity-70 text-white px-5 py-3 rounded-lg hover:bg-opacity-90 transition font-semibold shadow-md"
          >
            Check our store
          </Link>
      </div>
      </div>
    </div>
  );
};

export default StoreBanner;


