export default function Footer() {
  return (
    <footer className="bottom-0 left-0 mt-8 flex w-full place-items-end items-end justify-between border-t border-gray-500 p-4 text-(--text)">
      <div className="justify-left font-bold md:mx-40">Logo</div>
      <div className="flex gap-2 md:mx-40">
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
