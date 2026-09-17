import { Badge } from "~/components/ui-shadcn/badge"
import { Button } from "~/components/ui-shadcn/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui-shadcn/card"
import type { ProfileOptions } from "~/routes/profile"
import {
  Progress,
  ProgressValue,
  ProgressLabel
} from "~/components/ui-shadcn/progress"


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

export function BeatmapCardBuildDefault(profile: ProfileAttributes) {
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

type PresetImageProps = {
  profile: ProfileAttributes;
  adStats: AdvancedStats;
  options: ProfileOptions;
};


export function TicketHorizontalPreset({ profile, adStats, options }: PresetImageProps) {
  const panelClassName = "rounded-md bg-gray-100/50 p-2 text-white";
  const isDisplayCardHeader = options.globalRank || options.countryRank;

  return (
    <Card className="relative w-[270px] max-w-full pt-3 bg-linear-65 from-pink-500 to-rose-600 ring-4 ring-white border-2 border-gray-900 shadow-2xl gap-0 border-t-4 border-b-4" >
      <div className="grid w-full grid-cols-2 gap-2 p-3">
        <div className="col-span-2">
          <div className="flex min-w-0 flex-col gap-2">
            {options.name &&
              <div className={"`${panelClassName}` text-center font-bold"}>
                {profile.name}
              </div>
            }
            <img
              src={profile.img}
              alt={profile.name}
              className="h-24 w-full object-contain"
            />
            {options.joinDate &&
              <div className={`${panelClassName} text-center font-bold`}>
                {profile.joinDate}
              </div>
            }
          </div>
          <div className={`${panelClassName} flex min-w-0 flex-col justify-evenly gap-2 font-bold`}>
            {options.pp && <h1>PP: {profile.totalPP}pp</h1>}
            {options.accuracy && <h1>Acc: {profile.accuracy}%</h1>}
            {options.playTime && <h1>Play Time: {profile.playTime}h</h1>}
            {options.xPP && <h1>xPP: {adStats.xPP}pp</h1>}
            {options.xRank && <h1>xRank: #{adStats.xRank}</h1>}
            {options.xStarRating && (
              <h1>xSR: {adStats.xStarRating}*</h1>
            )}
          </div>
        </div>
      </div>
      {isDisplayCardHeader &&
        < CardHeader className="bg-muted/75">
          <div className="flex flex-wrap justify-center gap-2 my-2">
            {options.globalRank && <Badge variant="secondary">#{profile.rankGlobal} Global</Badge>}
            {options.countryRank && < Badge variant="secondary">#{profile.rankNation} Country</Badge>}
          </div>
        </CardHeader>
      }
      {
        options.level && (
          <CardFooter>
            <Progress value={60} className="w-full text-white">
              <ProgressLabel>Level 101</ProgressLabel>
              <ProgressValue className="text-white" />
            </Progress>
          </CardFooter>
        )
      }
    </Card >
  );
}

export function BasicVertialPreset({ profile, adStats, options }: PresetImageProps) {

  const panelClassName = "rounded-md bg-gray-100/50 p-2 text-white";
  const isDisplayCardHeader = options.globalRank || options.countryRank;
  return (
    /*<Card className="relative w-[270px] max-w-full pt-0">
      <div className="flex aspect-[45/32] w-full items-center bg-linear-65 from-pink-500 to-rose-600">
        <img
          src="https://media.tenor.com/ZLHdbFbs26sAAAAj/kirby-cute.gif"
          alt="Kirby"
          className="h-1/2 w-1/2 object-contain justify-left"
        />
        <div className="flex flex-col justify-evenly min-w-0 flex-1 bg-gray-100/50 p-2 text-white self-stretch m-3 rounded-md">
          {options.pp && <h1>{profile.totalPP}pp</h1>}
          {options.accuracy && <h1>{profile.accuracy}%</h1>}
          {options.playTime && <h1>{profile.playTime} Hours</h1>}
          {options.xPP && <h1>xPP: {adStats.xPP}pp</h1>}
          {options.xRank && <h1>xRank: #{adStats.xRank}</h1>}
          {options.xStarRating && <h1>xSR: {adStats.xStarRating}*</h1>}
        </div>
      </div>
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Global #870</Badge>
        </CardAction>
        <CardTitle>plee</CardTitle>
        <CardDescription>

        </CardDescription>
      </CardHeader>
      {options.level &&
        <CardFooter>
          <Progress value={60} className="w-full">
            <ProgressLabel>Level 101</ProgressLabel>
            <ProgressValue />
          </Progress>
        </CardFooter>
      }
    </Card>*/
    <Card className="relative w-[270px] max-w-full pt-3 bg-linear-65 from-pink-500 to-rose-600 ring-4 ring-white border-2 border-gray-900 shadow-2xl gap-0 border-t-4 border-b-4" >
      <div className="grid w-full grid-cols-2 gap-2 p-3">
        <div className="col-span-2">
          <div className="flex min-w-0 flex-col gap-2">
            {options.name &&
              <div className={"`${panelClassName}` text-center font-bold"}>
                {profile.name}
              </div>
            }
            <img
              src={profile.img}
              alt={profile.name}
              className="h-24 w-full object-contain"
            />
            {options.joinDate &&
              <div className={`${panelClassName} text-center font-bold`}>
                {profile.joinDate}
              </div>
            }
          </div>
          <div className={`${panelClassName} flex min-w-0 flex-col justify-evenly gap-2 font-bold`}>
            {options.pp && <h1>PP: {profile.totalPP}pp</h1>}
            {options.accuracy && <h1>Acc: {profile.accuracy}%</h1>}
            {options.playTime && <h1>Play Time: {profile.playTime}h</h1>}
            {options.xPP && <h1>xPP: {adStats.xPP}pp</h1>}
            {options.xRank && <h1>xRank: #{adStats.xRank}</h1>}
            {options.xStarRating && (
              <h1>xSR: {adStats.xStarRating}*</h1>
            )}
          </div>
        </div>
      </div>
      {isDisplayCardHeader &&
        < CardHeader className="bg-muted/75">
          <div className="flex flex-wrap justify-center gap-2 my-2">
            {options.globalRank && <Badge variant="secondary">#{profile.rankGlobal} Global</Badge>}
            {options.countryRank && < Badge variant="secondary">#{profile.rankNation} Country</Badge>}
          </div>
        </CardHeader>
      }
      {
        options.level && (
          <CardFooter>
            <Progress value={60} className="w-full text-white">
              <ProgressLabel>Level 101</ProgressLabel>
              <ProgressValue className="text-white" />
            </Progress>
          </CardFooter>
        )
      }
    </Card >
  );
}

export function PresetDefaultImage(profile: ProfileAttributes, adStats: AdvancedStats) {
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
