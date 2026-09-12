import { FaArrowRight } from "react-icons/fa";
import Button from "../../../components/Button";

export function Footer() {
  return (
    <div className="bg-primary text-white flex flex-col items-center mt-20">
      <div className="flex flex-col items-center max-w-150 text-center py-10 space-y-4">
        <h1 className="text-2xl font-bold">Ready to build with MTIH?</h1>
        <p className="text-gray-500 text-sm">
          Join our community of student engineers and tech enthusiasts building
          skills, shipping real projects, and unlocking high-impact careers.
        </p>
        <Button variant="secondary" className="px-4 py-2">
          Join MTIH Today <FaArrowRight />
        </Button>
      </div>
      <div className="border-t border-gray-600 w-full flex justify-between items-center py-4 md:px-20 px-5">
        <div>
          <h2 className="font-semibold">
            <span className="hidden md:inline">
              Machakos Tech & Innovation Hub
            </span>
            <span className="inline md:hidden">MTIH</span>
          </h2>
          <p className="text-gray-500 md:text-[11px] text-[10px]">
            © MTIH. Advancing student developer excellence.
          </p>
        </div>
        <div className="text-gray-500 md:text-[12px] text-[10px] md:space-x-3 space-x-2 [&>a]:hover:text-gray-400">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Github Hub</a>
          <a href="#">Contact Support</a>
        </div>
      </div>
    </div>
  );
}
