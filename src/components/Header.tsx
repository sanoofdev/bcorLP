"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white font-bold px-3 py-2 rounded-md text-lg">
            B
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              B-Core ERP
            </h1>
            <p className="text-xs text-blue-600 font-semibold">
              PHARMACY SOFTWARE
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="#">Products</Link>
          <Link href="#">Solutions</Link>
          <Link href="#">Pharmacy Types</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">About</Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md font-medium hover:bg-blue-50">
            Login / Signup
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700">
            Get a Demo
          </button>
        </div>

      </div>
    </header>
  );
}
