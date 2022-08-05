import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="flex items-center justify-center text-gray-400 h-[72px] min-h-[72px]">
      <ul className="flex gap-5">
        <li>
          <Link href="/">
            <a className="hover:text-white">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a className="hover:text-white">About</a>
          </Link>
        </li>
        <li>
          <Link href="/#services">
            <a className="hover:text-white">Services</a>
          </Link>
        </li>
        <li>
          <Link href="/#contactus">
            <a className="hover:text-white">Contact Us</a>
          </Link>
        </li>
        <li>
          <a href="/signin" className="hover:text-white">
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
