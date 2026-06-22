"use client";

export default function HeroSection() {
  return (
    <div id="home" className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 py-16 text-black bg-white md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center text-black md:text-6xl lg:text-7xl">
        Ship faster.{" "}
        <span className="text-purple-600">Scale without limits.</span>
      </h1>
      <p className="text-center text-gray-600 md:text-lg">
        Teqneia gives your team the infrastructure to build, deploy, and grow —
        all in one unified platform.
      </p>

      <div className="flex items-center justify-center gap-4 mt-8">
        <a
          href="/login"
          className="flex items-center px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 gap-1 transition-all duration-300"
        >
          Login
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>

        <a
          href="/contact"
          className="flex items-center px-6 py-3 text-purple-600 bg-white border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white gap-1 transition-all duration-300"
        >
          Contact Us
        </a>
      </div>

      <small className="text-gray-500 text-sm mt-4 md:mt-0">
        Trusted by <strong>2,400+</strong> teams worldwide · No credit card required
      </small>
    </div>
  );
}
