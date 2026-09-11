import { FaArrowRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

import Button from "../../components/Button";
import { upcomingEvents } from "../../upcomingEvents";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Events />
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-10 h-[70vh] px-10 max-w-300 mx-auto">
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
    <div className="space-y-10 px-5 max-w-300 mx-auto">
      <div>
        <span className="text-secondary font-semibold">Connect & Learn</span>
        <h2 className="text-3xl font-semibold">Upcoming Hub Gatherings</h2>
        <p className="text-gray-500 text-sm">
          Level up your technical skills and connect with more tech students.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {upcomingEvents.map((event) => {
          return <UpcomingEventCard key={event.id} {...event} />;
        })}
      </div>
    </div>
  );
}

function UpcomingEventCard({
  title,
  description,
  type,
  date,
  location,
  registration,
}) {
  return (
    <div className="border rounded-lg p-5 border-gray-400 flex flex-col justify-between max-w-150">
      <div>
        <div className="flex justify-between">
          <span className="text-secondary bg-secondary/20 px-2 rounded-full text-[10px] font-semibold flex items-center">
            {type}
          </span>
          <span className="text-gray-500 text-xs">{date}</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
      <div className="pt-3 flex justify-between">
        <span className="flex items-center gap-1">
          <CiLocationOn />
          <span
            className={`text-xs font-semibold ${registration.open ? "text-gray-500" : "text-neutral"}`}
          >
            {location}
          </span>
        </span>
        {registration.open ? (
          <Button variant="tertiary">Register</Button>
        ) : (
          <span className="text-secondary group hover:gap-2 duration-100 font-semibold text-xs flex items-center gap-1 cursor-pointer">
            <span className="group-hover:scale-110 duration-100">Details</span>
            <FaArrowRight className="group-hover:scale-120 duration-100" />
          </span>
        )}
      </div>
    </div>
  );
}

function Footer() {
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
      <div className="border-t border-gray-600 w-full flex justify-between items-center py-4 px-20">
        <div>
          <h2 className="font-semibold">Machakos Tech & Innovation Hub</h2>
          <p className="text-gray-500 text-[11px]">
            © MTIH. Advancing student developer excellence.
          </p>
        </div>
        <div className="text-gray-500 text-[12px] space-x-3 [&>a]:hover:text-gray-400">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Github Hub</a>
          <a href="#">Contact Support</a>
        </div>
      </div>
    </div>
  );
}
