"use client"
import Link from "next/link";
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className="border-b-2 bg-neutral-100 mt-2">
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        {/* all content */}
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px] px-0">
          <div className="flex items-center pl-0"> {/* No padding left here */}
            <h1 className="sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold m-0">Exclusive</h1>
          </div>

          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black">
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/about">About</Link>
              </li>
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-x-4">
            {/* Search bar - hidden on small screens */}
            <div className="hidden lg:flex w-full bg-gray-200 rounded-md items-center px-2">
              <label htmlFor="search-input" className="sr-only">Search</label>
              <input
                id="search-input"
                type="search"
                placeholder="What are you looking for?"
                className="w-full p-2 bg-gray-200 rounded-md outline-none text-sm focus:ring-2 focus:bg-white transition-all"
              />
              <button
                type="submit"
                className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none transition-colors"
              >
                <Image src="/icon/search.png" alt="search Icon" width={30} height={30}
                  className="cursor-pointer hover:opacity-80" />
              </button>
            </div>

            {/* Wishlist Icon */}
            <Link href="/wishlist">
              <AiOutlineHeart className="text-gray-600 hover:text-gray-900 cursor-pointer" size={24} />
            </Link>

            {/* Cart Icon */}
            <Link href="/cart">
              <AiOutlineShoppingCart className="text-gray-600 hover:text-gray-900 cursor-pointer" size={24} />
            </Link>

            {/* Toggle Button for mobile */}
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
