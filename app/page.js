import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import Results from "@/components/sections/Results";
import Reviews from "@/components/sections/Reviews";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Works />
        <Results />
        <Reviews />
        <Process />
        {/* <Pricing /> */}
        <Contact />
      </main>
    </>
  );
}
