
import Button from "./Button";


const Header = () => {
  return (
    <div className="flex justify-between fixed w-full p-4 bg-white shadow-md z-100">
      <div>
        <span className="font-bold">MTIH</span>
      </div>
      <div className="space-x-4 [&>span]:hover:text-secondary [&>span]:cursor-pointer">
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
  );
};

export default Header;
