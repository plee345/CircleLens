import type { Route } from "./+types/dailyrotation";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import BeatmapCard from "~/components/beatmapcard";

export default function DailyRotation() {
  return (
    <>
      <Navbar />
      <BeatmapCard
        img="https://media.tenor.com/ZLHdbFbs26sAAAAj/kirby-cute.gif"
        name="plee"
        joinDate="May 2018"
        nation="United States"
        rankGlobal={872}
        rankNation={189}
        totalPP={14107}
        accuracy={98.71}
        playCount={51505}
        hitsPerPlay={323}
        playTime={971}
      />
      <Footer />
    </>
  );
}
