import { FaArrowRight } from "react-icons/fa";
import Button from "../../../components/Button";

export function Hero() {
  return (
    <section id="home" className="flex flex-col justify-center items-center text-center space-y-10 h-[70vh] px-10 max-w-300 mx-auto">
      <div className="space-y-10 border-b border-gray-300 pb-20 flex flex-col items-center">
        <h1 className="font-bold text-4xl max-w-150">
          Where Machakos Tech Enthusiasts Build The Future
        </h1>
        <p className="text-gray-500">
          Machakos Tech and Innovation Hub (MTIH) is a community of student
          engineers, designers, and innovators building production skills,
          real-world team projects, and high-impact career opportunities
          together.
        </p>
        <div className="flex mx-auto w-fit space-x-4">
          <Button variant="secondary" className="py-2 px-4">
            Join MTIH <FaArrowRight />
          </Button>
          <Button className="py-2 px-4">Explore Activities</Button>
        </div>
      </div>
      <div className="flex gap-5 mx-auto [&>div]:text-start [&>div]:[&>h3]:font-semibold [&>div]:[&>p]:text-gray-500 [&>div]:[&>p]:text-xs">
        <div>
          <h3>3 Teams</h3>
          <p>Frontend, Backend, Database</p>
        </div>
        <div>
          <h3>50+</h3>
          <p>Active Students</p>
        </div>
        <div>
          <h3>100%</h3>
          <p>Student-Led</p>
        </div>
      </div>
    </section>
  );
}