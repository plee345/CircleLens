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
{
  /*option for horizontal cards alongside vertical cards?*/
}
export default function BeatmapCard(props: ProfileAttributes) {
  return (
    <div className="w-max rounded border-2 border-gray-900 bg-linear-65 from-pink-500 to-rose-600 text-center text-white shadow-xl/40 ring-4 ring-white">
      <h1 className="border-b-4 text-center">
        {props.name} - {props.joinDate} - {props.nation}
      </h1>
      <img src={props.img} className="mx-auto flex" />
      <h1 className="border-t-4">
        #{props.rankGlobal} Global - #{props.rankNation} Country
      </h1>
      <h1>
        {props.totalPP}pp {props.accuracy}% {props.playTime} Hours
      </h1>
      <h1>
        PlayCount: {props.playCount} {props.hitsPerPlay} Hits Per Play
      </h1>
    </div>
  );
}
