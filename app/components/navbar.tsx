import { NavLink } from "react-router";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="mb-8 flex items-center justify-between border-b border-gray-500 p-4 text-(--text)">
      <div className="justify-left font-bold md:mx-40">CircleLens</div>
      <div className="flex gap-6 md:mx-40">
        <span>
          <button>Test</button>
        </span>
        <span className="">
          <Link to="/">Home</Link>
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
