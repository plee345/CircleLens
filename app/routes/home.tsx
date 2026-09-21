import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BeatmapCard from "~/components/beatmapcard";
import { AspectRatio } from "~/components/ui-shadcn/aspect-ratio";

export function meta() {
  return [
    { title: "CircleLens" },
    { name: "description", content: "Welcome to CircleLens!" },
  ];
}

export default function Home() {
  const samplePlayerData = {
    img: "https://media.tenor.com/ZLHdbFbs26sAAAAj/kirby-cute.gif",
    name: "plee",
    joinDate: "May 2018",
    nation: "United States",
    rankGlobal: 872,
    rankNation: 189,
    totalPP: 14107,
    accuracy: 98.71,
    playCount: 51505,
    hitsPerPlay: 323,
    playTime: 971,
  };
  const sampleCardProps = {
    profile: samplePlayerData,
    adStats: { xPP: 14500, xRank: 800, xStarRating: 7.8 },
    options: {
      name: true,
      joinDate: true,
      country: true,
      globalRank: true,
      countryRank: true,
      playTime: true,
      pp: true,
      accuracy: true,
      level: true,
      xPP: true,
      xRank: true,
      xStarRating: true,
    },
    presets: {
      defaultBasic: true,
      basicVertical: false,
      basicHorizontal: false,
      ticketHorizontal: false,
      ticketVertical: false,
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="md:mx-40">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 flex flex-col justify-evenly text-center text-2xl font-bold">
            <span className="text-6xl leading-loose text-(--text)">
              Design{" "}
              <span className="underline decoration-pink-500">Custom</span>{" "}
              Cards Using{" "}
              <span className="underline decoration-indigo-500">Advanced</span>{" "}
              Stats
            </span>
          </div>
          <div className="col-span-2">
            <div className="flex justify-center">
              <BeatmapCard {...sampleCardProps} />
            </div>
            <h1 className="p-4 text-center">
              <p className="border-t-2">
                Custom  can be applied to these cards to make them
                unique.
              </p>
            </h1>
          </div>
          <div className="col-span-2">
            <div className="flex justify-center">
              <BeatmapCard {...sampleCardProps} />
            </div>
            <h1 className="p-4 text-center">
              <p className="border-t-2">
                Custom attributes can be applied to these cards to make them
                unique.
              </p>
            </h1>
          </div>
          <div className="col-span-2">
            <div className="flex justify-center">
              <BeatmapCard {...sampleCardProps} />
            </div>
            <h1 className="p-4 text-center">
              <p className="border-t-2">
                Custom attributes can be applied to these cards to make them
                unique.
              </p>
            </h1>
          </div>
          <div className="col-span-2 flex justify-center rounded-md">
            <div className="relative">
              <AspectRatio ratio={1 / 1}>
                <img
                  src="https://avatar.vercel.sh/shadcn1"
                  className="size-full rounded-full border-8 border-white object-cover shadow-2xl ring-gray-50 dark:brightness-20"
                />
                <img
                  src="/1.png"
                  alt="Your image description"
                  className="absolute inset-0 z-10 size-full object-contain p-8"
                />
              </AspectRatio>
            </div>
          </div>
          <div className="col-span-2 flex justify-center rounded-md">
            <div className="relative">
              <AspectRatio ratio={1 / 1}>
                <img
                  src="https://avatar.vercel.sh/shadcn1"
                  className="size-full rounded-full border-8 border-white object-cover shadow-2xl ring-gray-50 dark:brightness-20"
                />
                <img
                  src="/2.png"
                  alt="Your image description"
                  className="absolute inset-0 z-10 size-full object-contain p-8"
                />
              </AspectRatio>
            </div>
          </div>
          <div className="col-span-2 flex justify-center rounded-md">
            <div className="relative">
              <AspectRatio ratio={1 / 1}>
                <img
                  src="https://avatar.vercel.sh/shadcn1"
                  className="size-full rounded-full border-8 border-white object-cover shadow-2xl ring-gray-50 dark:brightness-20"
                />
                <img
                  src="/3.png"
                  alt="Your image description"
                  className="absolute inset-0 z-10 size-full object-contain p-8"
                />
              </AspectRatio>
            </div>
          </div>
          <div className="gap-4"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
