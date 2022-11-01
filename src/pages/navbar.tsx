import Link from "next/link";
import modal from "./modal";

export default function Navbar() {
  return (
    <main>
      <nav className="p-5 flex justify-between">
        <div className="text-2xl cursor-pointer">ASZSHOP</div>
        <div>
          <ul className="flex gap-5 items-center cursor-pointer">
            <li>Home</li>
            <li>Categories</li>
            <li>{modal()}</li>
          </ul>
        </div>
      </nav>
    </main>
  );
}