import Image from "next/image";
import Link from "next/link";

import Container from "@/components/container";

import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <header className="fixed top-0 w-full shadow-xl text-light z-1000 bg-dark">
      <Container className="flex items-center justify-between py-4">
        <div className="z-10 w-full">
          <Link href="/" className="flex items-center">
            <Image src="/weekly-diamond.webp" alt="logo" width={70} height={70} />
            <span className="font-bold bg-gradient-to-r from-primary via-blue-400 to-cyan-400 text-transparent bg-clip-text text-lg">TOP UP</span>
          </Link>
        </div>
        <nav className="flex gap-6 list-none whitespace-nowrap">
          <li className="font-medium duration-300 hover:text-primary">
            <Link href="/">Beranda</Link>
          </li>
          <li className="font-medium duration-300 hover:text-primary">
            <Link href="/">Cari Pesanan</Link>
          </li>
          <li className="font-medium duration-300 hover:text-primary">
            <Link href="/">Daftar Harga</Link>
          </li>
        </nav>
        <div className="relative">
          <input
            type="text"
            className="px-4 py-1 bg-gray-800 border border-gray-500 outline-none w-44 rounded-xl ms-6 cursor-text"
            placeholder="Cari Produk..."
            disabled
          />
          <i className="absolute top-1.5 right-2">
            <BiSearch size={20} />
          </i>
        </div>
      </Container>
    </header>
  );
};

export default Header;
