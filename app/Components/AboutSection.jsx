import Image from "next/image";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white py-12 px-4 sm:px-6 lg:px-8 scroll-mt-16"
    >

      <div>
        <p className="text-purple-600">About</p>
        <h3 className="text-3xl font-bold text-gray-800 mt-4">
          Built by engineers, for engineering teams
        </h3>
        <p className="text-gray-500 mt-2">
          Teqneia was founded in 2022 by a team of infrastructure veterans who
          spent years fighting slow deploys, fragile pipelines, and siloed
          tooling at high-growth companies. We built the platform we always
          wished existed. Today we&apos;re a remote-first team of 38 people
          across 14 countries, obsessively focused on making infrastructure
          invisible so product teams can move at the speed they think.
        </p>

        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center text-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-purple-600">2,400+</h3>
            <p>Teams</p>
          </div>

          <div className="flex flex-col items-center text-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-purple-600">99.99%</h3>
            <p>Uptime SLA</p>
          </div>

          <div className="flex flex-col items-center text-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-purple-600">38</h3>
            <p>Team Members</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image
        src="/images/about.avif"
          width={500}
          height={300}
          alt="Teqneia team collaborating around a table"
          className="object-cover rounded-lg shadow-lg"
        ></Image>
      </div>
    </div>
  );
}
