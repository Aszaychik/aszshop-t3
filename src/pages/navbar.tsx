import modal from "./modal";

export default function Navbar() {
  return (
    <main>
      <nav className="p-5 flex justify-between">
        <div className="text-2xl cursor-pointer text-blue-500 font-bold">ASZSHOP</div>
        <div>
          <ul className="flex gap-5 items-center">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Categories</li>
            <li>{modal()}</li>
          </ul>
        </div>
      </nav>
    </main>
  );
}