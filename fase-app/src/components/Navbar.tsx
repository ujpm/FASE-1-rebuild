import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <span className="mr-2">❤️</span> FASE-1
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link href="/training" className="hover:text-blue-200">
            Training
          </Link>
          <Link href="/emergency" className="hover:text-blue-200">
            Emergency
          </Link>
          <Link href="/#about" className="hover:text-blue-200">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;