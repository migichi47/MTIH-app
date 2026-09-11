import { FaArrowRight, FaClock, FaDotCircle, FaStar } from "react-icons/fa";
import { CiLocationOn, CiTrophy } from "react-icons/ci";

import Button from "../../components/Button";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Events />
    </>
  );
};

export default LandingPage;

function Hero() {
  return (
    <div className="flex flex-col justify-center text-center space-y-10 h-[70vh] px-10">
      <div className="space-y-10 border-b border-gray-300 pb-20">
        <h1 className="font-bold text-4xl">
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
            Join MTIH <FaArrowRight />{" "}
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
    </div>
  );
}

function Events() {
  return (
    <div className="space-y-5 px-5">
      <div>
        <span className="text-secondary font-semibold">Connect & Learn</span>
        <h2 className="text-3xl font-semibold">Upcoming Hub Gatherings</h2>
        <p className="text-gray-500 text-sm">
          Level up your technical skills and connect with more tech students.
        </p>
      </div>
      <div className="grid grid-cols-[1.5fr_1fr] gap-5">
        <div className="border-2 border-neutral/50 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="bg-neutral/60 rounded-full px-5 text-xs flex justify-center items-center h-fit py-1 gap-1">
                <FaStar /> Tech Meetup
              </div>
              <div className="bg-tertiary/20 border border-tertiary/30 text-tertiary font-semibold flex items-center gap-1 text-xs px-2 rounded-full">
                <FaDotCircle /> Registration Open
              </div>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-xl font-semibold">
                MTIH Tech Meetup: Scalable Web Architectures
              </h2>
              <p className="text-gray-500 text-xs">
                Deep dive into microservices, MongoDB indexing, and React 19
                concurrent patterns with industry guest speakers and Machakos
                student core developers.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4 flex gap-10">
              <div className="flex gap-1 items-center text-sm ">
                <FaClock className="text-secondary" />
                20 September 2026,{" "}
                <span className="text-gray-500 text-xs">5:00 PM EAT</span>
              </div>
              <div className="flex gap-1 items-center text-sm ">
                <CiLocationOn className="text-secondary" />
                <span className="text-gray-500 text-xs">
                  Machakos University Amphitheatre
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">54 Members Attending</span>
            <Button variant="tertiary" className="px-4">
              Register
            </Button>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-5">
          <div className="border rounded-lg p-5 border-gray-400">
            <div className="flex justify-between">
              <span className="text-secondary bg-secondary/20 px-2 rounded-full text-[10px] font-semibold flex items-center">
                Hackathon
              </span>
              <span className="text-gray-500 text-xs">Oct 14-16, 2026</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                Annual Campus Hackathon 2026
              </h2>
              <p className="text-xs text-gray-500 border-b pb-3 border-gray-300">
                48-hour continuous software build sprint. Assemble
                cross-functional squads to tackle regional challenges in
                Fintech, Health, and AgriTech.
              </p>
            </div>
            <div className="pt-3 flex justify-between">
              <span className="flex items-center gap-1">
                <CiTrophy />
                <span className="text-xs text-neutral font-semibold">
                  Ksh 150,000 Prize Pool
                </span>
              </span>
              <span className="text-secondary font-semibold text-xs flex items-center gap-1">
                Details
                <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="border rounded-lg p-5 border-gray-400">
            <div className="flex justify-between">
              <span className="text-secondary bg-secondary/20 px-2 rounded-full text-[10px] font-semibold flex items-center">
                Hackathon
              </span>
              <span className="text-gray-500 text-xs">Oct 02, 2026</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                Backend Node.js & Docker Masterclass
              </h2>
              <p className="text-xs text-gray-500 border-b pb-3 border-gray-300">
                Hands-on live containerization, building multi-stage Docker builds, caching node_modules, and deploying microservices locally.
              </p>
            </div>
            <div className="pt-3 flex justify-between">
              <span className="flex items-center gap-1">
                <CiTrophy />
                <span className="text-xs text-neutral font-semibold">
                  Hands-On Lab (Lab 4B)
                </span>
              </span>
              <span className="text-secondary font-semibold text-xs flex items-center gap-1">
                Details
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
