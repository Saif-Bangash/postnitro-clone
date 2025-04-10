import React from "react";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="text-center py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm bg-green-100 text-green-700 px-4 py-1 rounded-full mb-4 inline-block">
          ✅ AI-Powered Carousel Generator For Viral Content
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          AI-Powered Carousel Generator for Instagram, LinkedIn & More
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          PostNitro's AI-powered platform creates stunning carousels for Instagram, LinkedIn, TikTok, and more.
          Boost your social media engagement with customizable, brand-aligned content generated in minutes.
        </p>

        <div className="flex justify-center items-center space-x-2 mb-4">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">5.0</span>
          <span className="text-gray-500">Join 32,000+ Creators</span>
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow">
          Start Creating Free Carousels →
        </button>

        <p className="text-sm text-gray-500 mt-2">No Credit Card Required | Free Downloads Every Month</p>
      </div>
    </section>
  );
};

export default Hero;
