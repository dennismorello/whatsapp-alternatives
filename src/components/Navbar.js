import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <nav className="sticky top-0 z-50 h-20 px-8 bg-white shadow-sm">
    <div className="flex items-center h-full mx-auto max-w-7xl">
      <Link href="/">
        <a>
          <Image src="/icon.png" width={50} height={43} />
        </a>
      </Link>

      <div className="ml-auto space-x-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dennismorello/whatsapp-alternatives"
          className="font-medium text-gray-500 transition hover:text-gray-900"
        >
          GitHub
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
