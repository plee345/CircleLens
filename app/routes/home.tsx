import type { Route } from "./+types/home";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BeatmapCard from "../components/beatmapcard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "CircleLens" },
    { name: "description", content: "Welcome to CircleLens!" },
  ];
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="md:mx-40">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 flex flex-col justify-evenly text-center text-2xl font-bold">
            <span className="text-6xl leading-[2.0] text-(--text)">
              Design Custom Cards Using Advanced Stats
            </span>
          </div>
          <div className="col-span-2">
            <div className="flex justify-center">
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
            </div>
            <h1 className="text-center p-4">
              Example of a profile card that is generated from CircleLens.
            </h1>
            <div className="flex justify-center">
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
            </div>
            <h1 className="text-center p-4">
              Example of a profile card that is generated from CircleLens.
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
