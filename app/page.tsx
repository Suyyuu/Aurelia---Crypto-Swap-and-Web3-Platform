import HeroText from "@/components/HeroText";
// import IntroSteps from "@/components/IntroSteps";
import MagicalGrid from "@/components/MagicalGrid";
import Navbar from "@/components/Navbar";
import SwapInterface from "@/components/SwapInterface";
// import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroText />
    {/* <IntroSteps /> */}
    <SwapInterface />
    <MagicalGrid />
    </>
  );
}
