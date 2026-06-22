export default function FeaturesSection() {
  return (
    <div
      id="features"
      className="flex flex-col items-center bg-gray-100 py-12 gap-4 scroll-mt-16"
    >
      <p className="text-purple-600">Features</p>
      <h3 className="text-3xl text-center font-bold text-black">
        Everything your team needs
      </h3>
      <p className="text-gray-600 text-center">
        A complete toolkit that grows with you — from prototype to production
        scale.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-8">
        <div className="group flex flex-col items-start gap-4 p-6 bg-white rounded-lg shadow-md scale-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <div className="text-purple-600 bg-purple-100 border p-2 rounded-lg group-hover:text-white group-hover:bg-purple-600 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-zap text-primary group-hover:text-white transition-colors duration-200"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
          </div>

          <h3 className="text-xl font-bold text-black">
            Lightning Performance
          </h3>
          <p className="text-gray-600">
            Edge infrastructure routes every request to the nearest node
            globally, keeping latency under 10ms.
          </p>
        </div>

        <div className="group flex flex-col items-start gap-4 p-6 bg-white rounded-lg shadow-md scale-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <div className="text-purple-600 bg-purple-100 border p-2 rounded-lg group-hover:text-white group-hover:bg-purple-600 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-users text-primary group-hover:text-white transition-colors duration-200"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>

          <h3 className="text-xl font-bold text-black">Team Collaboration</h3>
          <p className="text-gray-600">
            Real-time editing, inline comments, and version history built
            directly into your workflow.
          </p>
        </div>

        <div className="group flex flex-col items-start gap-4 p-6 bg-white rounded-lg shadow-md scale-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <div className="text-purple-600 bg-purple-100 border p-2 rounded-lg group-hover:text-white group-hover:bg-purple-600 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield-check text-primary group-hover:text-white transition-colors duration-200"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>

          <h3 className="text-xl font-bold text-black">Enterprise Security</h3>
          <p className="text-gray-600">
            SOC 2 Type II certified with end-to-end encryption and granular,
            role-based access controls.
          </p>
        </div>
      </div>
    </div>
  );
}
