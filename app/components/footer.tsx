export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full place-items-end items-end justify-between bg-slate-950 p-4 text-white">
      <div className="justify-left font-bold">Logo</div>
      <div className="flex gap-2">
        <span className="">
          <a>Home</a>
        </span>
        <span>Leaderboard</span>
        <span>Daily Rotation</span>
        <span>Profile</span>
      </div>
    </footer>
  );
}
