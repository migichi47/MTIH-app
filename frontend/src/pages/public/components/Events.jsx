import { CiLocationOn } from "react-icons/ci";
import { upcomingEvents } from "./upcomingEvents";
import Button from "../../../components/Button";
import { FaArrowRight } from "react-icons/fa";

export function Events() {
  return (
    <div className="space-y-10 px-5 max-w-300 mx-auto">
      <div>
        <span className="text-secondary font-semibold">Connect & Learn</span>
        <h2 className="text-3xl font-semibold">Upcoming Hub Gatherings</h2>
        <p className="text-gray-500 text-sm">
          Level up your technical skills and connect with more tech students.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
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
    <div className="border rounded-lg p-5 border-gray-400 flex flex-col justify-between max-w-150 group hover:shadow-lg transition-colors duration-100">
      <div>
        <div className="flex justify-between">
          <span className="text-secondary bg-secondary/20 px-2 rounded-full text-[10px] font-semibold flex items-center">
            {type}
          </span>
          <span className="text-gray-500 text-xs">{date}</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold group-hover:text-neutral transition-colors">
            {title}
          </h2>
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
          <span className="text-secondary group group-hover:gap-2 duration-100 font-semibold text-xs flex items-center gap-1 cursor-pointer">
            <span className="group-hover:scale-110 duration-100">Details</span>
            <FaArrowRight className="group-hover:scale-120 duration-100" />
          </span>
        )}
      </div>
    </div>
  );
}
