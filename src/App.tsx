import { useState } from 'react'
import BeatmapCard from './components/BeatmapCard'

function App() {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between bg-slate-950 text-white p-4">
          <div className="justify-left font-bold">CircleLens</div>
          <div className="flex gap-6">
            <span className=""><a>Home</a></span>
            <span>Leaderboard</span>
            <span>Daily Rotation</span>
            <span>Profile</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 p-4 mx-auto">
          <div className="bg-slate-950 p-4 border-r-1 border-white">
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
            <h1 className="text-white">Example of a profile card that is generated from CircleLens.</h1>
          </div>
          <div className="bg-slate-950 p-4 text-white col-span-2 border-l-1 border-white">
            <h1 className="text-center text-5xl">Welcome To CircleLens</h1>
            <h3 className="p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
            <h3 className="p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
            <h3 className="p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
            <h3 className="p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 p-4 mx-auto">
          <div className="bg-slate-950 p-4 rounded text-white border border-rose-600">
            <h1>Vel sapiente sunt quo consequatur corporis est quas laboriosam et nemo quia qui omnis repellat quo iste iure. Et soluta voluptatum rem quia consectetur sed adipisci exercitationem et blanditiis autem. Est iste possimus At earum beatae aut illo natus ea adipisci nesciunt rem omnis odit.</h1>
          </div>
          <div className="bg-slate-950 p-4 rounded text-white border border-yellow-400">
            <h1>Vel sapiente sunt quo consequatur corporis est quas laboriosam et nemo quia qui omnis repellat quo iste iure. Et soluta voluptatum rem quia consectetur sed adipisci exercitationem et blanditiis autem. Est iste possimus At earum beatae aut illo natus ea adipisci nesciunt rem omnis odit.</h1>
          </div>
          <div className="bg-slate-950 p-4 rounded text-white border border-green-500">
            <h1>Vel sapiente sunt quo consequatur corporis est quas laboriosam et nemo quia qui omnis repellat quo iste iure. Et soluta voluptatum rem quia consectetur sed adipisci exercitationem et blanditiis autem. Est iste possimus At earum beatae aut illo natus ea adipisci nesciunt rem omnis odit.</h1>
          </div>
        </div>
        <footer className="fixed bottom-0 left-0 w-full flex items-end place-items-end justify-between bg-slate-950 text-white p-4">
          <div className="justify-left font-bold">Logo</div>
          <div className="flex gap-2">
            <span className=""><a>Home</a></span>
            <span>Leaderboard</span>
            <span>Daily Rotation</span>
            <span>Profile</span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
