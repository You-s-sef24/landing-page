import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col lg:flex-row lg:justify-around items-center gap-1 p-4 border-t border-gray-300">
      <h3 className="text-2xl font-bold text-purple-600">Teqneia</h3>

      <p>© 2026 Teqneia, Inc. All rights reserved.</p>

      <Link href={"https://www.linkedin.com/company/teqneia/"}>
        <div className="hover:text-purple-600 hover:bg-neutral-100 rounded-lg p-2 transition-all duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </div>
      </Link>
    </footer>
  );
}
