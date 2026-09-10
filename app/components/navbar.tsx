import { NavLink } from "react-router";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 text-white border-b-gray-600">
      <div className="justify-left font-bold">CircleLens</div>
      <div className="flex gap-6">
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
