import { NavLink } from "react-router";
import { Link } from "react-router";
import { useState } from "react";

export default function Navbar() {
  return (
    <div className="mb-8 flex items-center justify-between border-b border-gray-500 p-4 text-(--text)">
      {/*make animation to add text when hovering logo*/}
      <div className="flex items-center gap-3 md:ml-40">
        <div className="size-8 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
        <span className="flex">
          <Link to="/">Home</Link>
        </span>
      </div>
      <div className="flex gap-6 md:mx-40">
        <div className="rounded-xl hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </div>
        <span>
          <button>Test</button>
        </span>
        <span>
          <Link to="/leaderboard">Leaderboard</Link>
        </span>
        <span>
          <Link to="/dailyrotation">Daily Rotation</Link>
        </span>
        <span>
          <Link to="/profile">Profile</Link>
        </span>
      </div>
    </div>
  );
}
