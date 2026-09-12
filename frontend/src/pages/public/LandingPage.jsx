import { Events } from "./components/Events";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { TechStackSection } from "./components/TechStack";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Events />
      <TechStackSection />
      <Footer />
    </>
  );
}
