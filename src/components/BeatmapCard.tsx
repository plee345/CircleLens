interface ProfileAttributes {
  img: string;
  name: string;
  joinDate: string;
  totalPP: number;
  accuracy: number;
  playCount: number;
  hitsPerPlay: number;
  rankGlobal: number;
  rankNation: number;
  playTime: number;
  nation: string;
}

export default function BeatmapCard(props: ProfileAttributes) {
  return (
    <div className="rounded-lg, shadow-md, p-6, bg-pink">
      <h1>{props.name} - {props.joinDate} - {props.nation}</h1>
      <img
        src={props.img}
      />
      <h1 className="">#{props.rankGlobal} Global - #{props.rankNation} Country</h1>
      <h1>{props.totalPP}pp {props.accuracy}% {props.playTime} Hours</h1>
      <h1>PlayCount: {props.playCount} {props.hitsPerPlay} Hits Per Play</h1>
    </div>
  );
}
