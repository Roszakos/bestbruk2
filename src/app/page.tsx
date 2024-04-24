import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services/Services";
import AboutUs from "@/components/home/AbousUs/AboutUs";
import Realizations from "@/components/home/Realizations/Realizations";
import Contact from "@/components/home/Contact/Contact";

export default function Home() {
  return (
    <>
      <div className="pb-20">
        <Hero />
        <div className="m-auto">
          <Services />
          <AboutUs />
          <Realizations />
          <Contact />
        </div>
      </div>
    </>
  );
}
