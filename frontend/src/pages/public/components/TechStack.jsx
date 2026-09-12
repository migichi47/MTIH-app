import { CgWebsite } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";

export function TechStackSection() {
  return (
    <section id="teams" className="space-y-10 px-5 max-w-300 mx-auto mt-20">
      <div className="text-center space-y-1">
        <h2 className="text-secondary font-semibold">SPECIALIZED CORE UNITS</h2>
        <h1 className="text-3xl font-bold">The Three Technical Tracks</h1>
        <p className="text-gray-500 text-sm max-w-160 mx-auto">
          Every MTIH member specializes within a structured track led by
          experienced student leads, contributing to collaborative real-world
          deployments.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <TechStackTile
          name="Frontend"
          members="64"
          description="Design and build high-performance, accessible user interfaces and web applications using React, Next.js, and modern Tailwind systems."
          captain="Alex Mutiso"
          techStacks={["HTML & CSS", "React", "Tailwind"]}
        />
        <TechStackTile
          name="Backend"
          members="72"
          description="Architect robust REST & GraphQL APIs, resilient microservices, authentication systems, and cloud infrastructure."
          captain="Faith Mwende"
          techStacks={["NodeJs", "Express"]}
        />
        <TechStackTile
          name="Database"
          members="48"
          description="Model complex schemas, optimize queries, manage database reliability, and implement automated indexing & migrations."
          captain="Brian Kiprono"
          techStacks={["MongoDB", "PostgreSQL", "mySQL"]}
        />
      </div>
    </section>
  );
}

function TechStackTile({ name, members, description, captain, techStacks }) {
  return (
    <div className="border border-gray-300 rounded-lg p-5 space-y-3 hover:border-secondary/80 transition-transform duration-300 hover:-translate-y-1 group">
      <div className="bg-secondary/30 w-fit p-1 rounded-sm group-hover:bg-secondary transition-colors">
        <CgWebsite className="text-secondary group-hover:text-white transition-colors" />
      </div>
      <div className="flex justify-between">
        <h3 className="font-semibold">{name} Team</h3>
        <span className="text-gray-500 font-semibold text-[10px] bg-gray-200 rounded-sm px-2 py-1">
          {members} Members
        </span>
      </div>
      <p className="text-gray-500 text-xs">{description}</p>
      <div className="flex items-center gap-2 bg-blue-100/80 rounded-lg p-1">
        <div className="bg-primary/30 rounded-full p-2">
          <FaUserAlt className="text-secondary" />
        </div>
        <div className="leading-4">
          <h4 className="font-semibold text-sm">{captain}</h4>
          <p className="text-xs text-gray-500">Frontend Captain</p>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-5 space-y-2">
        <h5 className="text-gray-500 text-xs w-fit mx-auto">
          CORE TECH STACKS
        </h5>
        <div className="flex justify-center gap-2 [&>span]:bg-blue-100/80 [&>span]:rounded-lg [&>span]:px-2 [&>span]:py-1 text-xs">
          {techStacks.map((techStack) => (
            <span>{techStack}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
