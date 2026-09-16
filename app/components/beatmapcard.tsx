import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

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
interface AdvancedStats {
  xPP: number;
  xRank: number;
  xStarRating: number;
}



{
  /*option for horizontal cards alongside vertical cards?*/
}

function BeatmapCardBuildDefault(profile: ProfileAttributes, adStats: AdvancedStats) {
  return (
    <div className="w-max rounded border-2 border-gray-900 bg-linear-65 from-pink-500 to-rose-600 text-center text-white shadow-xl/40 ring-4 ring-white">
      <h1 className="border-b-4 text-center">
        {profile.name} - {profile.joinDate} - {profile.nation}
      </h1>
      <img src={profile.img} className="mx-auto flex object-contain" />
      <h1 className="border-t-4">
        #{profile.rankGlobal} Global - #{profile.rankNation} Country
      </h1>
      <h1>
        {profile.totalPP}pp {profile.accuracy}% {profile.playTime} Hours
      </h1>
      <h1>
        PlayCount: {profile.playCount} {profile.hitsPerPlay} Hits Per Play
      </h1>
    </div>
  );
}

export function PresetBigImage({/*profile: ProfileAttributes, adStats: AdvancedStats*/ }) {
  return (
    <Card className="relative w-[270px] max-w-full pt-0">
      <div className="flex aspect-[45/32] w-full items-center justify-center bg-linear-65 from-pink-500 to-rose-600">
        <img
          src="https://media.tenor.com/ZLHdbFbs26sAAAAj/kirby-cute.gif"
          alt="Kirby"
          className="h-1/2 w-1/2 object-contain"
        />
      </div>
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>plee</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  );
}

function BeatmapCardConstructor(profile: ProfileAttributes, adStats: AdvancedStats) {

}

export default function BeatmapCard(profile: ProfileAttributes) {
  return (
    <div className="w-max rounded border-2 border-gray-900 bg-linear-65 from-pink-500 to-rose-600 text-center text-white shadow-xl/40 ring-4 ring-white">
      <h1 className="border-b-4 text-center">
        {profile.name} - {profile.joinDate} - {profile.nation}
      </h1>
      <img src={profile.img} className="mx-auto flex" />
      <h1 className="border-t-4">
        #{profile.rankGlobal} Global - #{profile.rankNation} Country
      </h1>
      <h1>
        {profile.totalPP}pp {profile.accuracy}% {profile.playTime} Hours
      </h1>
      <h1>
        PlayCount: {profile.playCount} {profile.hitsPerPlay} Hits Per Play
      </h1>
    </div>
  );
}
