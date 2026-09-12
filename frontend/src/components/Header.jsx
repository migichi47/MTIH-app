import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex justify-between fixed w-full p-4 bg-white shadow-md z-100">
      <div className="flex items-center gap-3">
        <span className="font-bold hidden md:inline-flex">MTIH</span>
        <RxHamburgerMenu
          className="md:hidden text-xl"
          onClick={() => setShowMenu((prev) => !prev)}
        />
        {showMenu && (
          <div className="text-gray-700 text-sm [&>a]:hover:text-secondary [&>a]:cursor-pointer flex flex-col md:hidden absolute top-15.5 rounded-b-2xl bg-white border-t border-gray-300 shadow-lg left-0 animate-slide-right [&>a]:border-b [&>a]:pl-5 [&>a]:pr-2 [&>a]:border-gray-300 [&>a]:py-1.5">
            <a href="#home">Home</a>
            <a href="">About</a>
            <a href="#teams">Teams</a>
            <a href="">Events</a>
            <a href="">Activities</a>
            <a className="border-none">Announcements</a>
          </div>
        )}
      </div>
      <div className="flex gap-10 items-center">
        <div className="space-x-2 text-gray-700 text-sm [&>a]:hover:text-secondary [&>a]:cursor-pointer hidden md:flex">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Teams</a>
          <a href="">Events</a>
          <a href="">Activities</a>
          <a href="">Announcements</a>
        </div>
        <div className="flex gap-4">
          <Button variant="primary">Login</Button>
          <Button variant="secondary">Join MTIH </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
