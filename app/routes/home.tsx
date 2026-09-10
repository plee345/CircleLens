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
    <>
      <Navbar />
      <div className="md:mx-25">
        <div className="col-span-2 border-l-1 border-r-1 border-white bg-slate-950 p-4 rounded">
          <h1 className="text-center text-5xl">Welcome To CircleLens</h1>
          <h3 className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </h3>
          <h3 className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </h3>
          <h3 className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </h3>
          <h3 className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </h3>
        </div>
        <div className="mx-auto grid grid-flow-col grid-rows-3 gap-4 p-4">
          <div className="row-span-3 border-r-1 border-white bg-gray-800 p-4">
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
            <h1 className="text-center">
              Example of a profile card that is generated from CircleLens.
            </h1>
          </div>
          <div className="col-span-2 row-span-3 gap-8 space-y-8">
            <div className="rounded border border-rose-600 bg-slate-950">
              <h1>
                Vel sapiente sunt quo consequatur corporis est quas laboriosam et
                nemo quia qui omnis repellat quo iste iure. Et soluta voluptatum rem
                quia consectetur sed adipisci exercitationem et blanditiis autem.
                Est iste possimus At earum beatae aut illo natus ea adipisci
                nesciunt rem omnis odit.
              </h1>
            </div>
            <div className="rounded border border-yellow-400 bg-slate-950">
              <h1>
                Vel sapiente sunt quo consequatur corporis est quas laboriosam et
                nemo quia qui omnis repellat quo iste iure. Et soluta voluptatum rem
                quia consectetur sed adipisci exercitationem et blanditiis autem.
                Est iste possimus At earum beatae aut illo natus ea adipisci
                nesciunt rem omnis odit.
              </h1>
            </div>
            <div className="rounded border border-green-500 bg-slate-950">
              <h1>
                Vel sapiente sunt quo consequatur corporis est quas laboriosam et
                nemo quia qui omnis repellat quo iste iure. Et soluta voluptatum rem
                quia consectetur sed adipisci exercitationem et blanditiis autem.
                Est iste possimus At earum beatae aut illo natus ea adipisci
                nesciunt rem omnis odit.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
