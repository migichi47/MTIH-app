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
          className="md:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        />
        {showMenu && (
          <div className="text-gray-700 text-sm [&>span]:hover:text-secondary [&>span]:cursor-pointer flex flex-col md:hidden absolute top-15.5 rounded-b-2xl bg-white border-t border-gray-300 shadow-lg left-0 animate-slide-right [&>span]:border-b [&>span]:pl-5 [&>span]:pr-2 [&>span]:border-gray-300 [&>span]:py-1.5">
            <span>Home</span>
            <span>About</span>
            <span>Teams</span>
            <span>Events</span>
            <span>Activities</span>
            <span className="border-none">Announcements</span>
          </div>
        )}
      </div>
      <div className="flex gap-10 items-center">
        <div className="space-x-2 text-gray-700 text-sm [&>span]:hover:text-secondary [&>span]:cursor-pointer hidden md:flex">
          <span>Home</span>
          <span>About</span>
          <span>Teams</span>
          <span>Events</span>
          <span>Activities</span>
          <span>Announcements</span>
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
