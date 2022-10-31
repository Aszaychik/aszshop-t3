import Link from "next/link";

export default function Navbar() {
  return (
    <main>
      <nav className="bg-black text-white p-3 flex justify-between">
        <div className="text-2xl">ASZSHOP</div>
        <div>
          <ul className="flex gap-3 items-center">
            <li>Home</li>
            <li>Categories</li>
            <li><Link href='/login' className="bg-red-500 p-2 rounded hover:bg-red-700">Login</Link></li>
          </ul>
        </div>
      </nav>
    </main>
  );
}