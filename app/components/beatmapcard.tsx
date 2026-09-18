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


export interface ProfileAttributes {
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

interface PresetOptions {
  defaultBasic: boolean,
  basicVertical: boolean,
  basicHorizontal: boolean,
  ticketHorizontal: boolean,
  ticketVertical: boolean,
}

type PresetImageProps = {
  profile: ProfileAttributes;
  adStats: AdvancedStats;
  options: ProfileOptions;
  presets: PresetOptions;
};

type CardImageProps = Omit<PresetImageProps, "presets">;

{
  /*option for horizontal cards alongside vertical cards?*/
}


function TicketVerticalPreset({ profile, adStats, options }: CardImageProps) {
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

function TicketHorizontalPreset({ profile, adStats, options }: CardImageProps) {
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

function BasicHorizontalPreset({ profile, adStats, options }: CardImageProps) {
  const panelClassName = "rounded-md bg-gray-100/50 p-2 text-white";
  const isDisplayCardHeader = options.globalRank || options.countryRank;
  return (
    <Card className="relative w-[270px] max-w-full pt-3 bg-linear-65 from-pink-500 to-rose-600 ring-4 ring-white border-2 border-gray-900 shadow-2xl gap-0 border-t-4 border-b-4" >
      <div className="grid w-full grid-cols-2 gap-2 p-3">

        <div className="flex min-w-0 flex-col gap-2">
          {options.name &&
            <div className={`${panelClassName} text-center font-bold`}>
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
      {
        isDisplayCardHeader &&
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

function BasicVertialPreset({ profile, adStats, options }: CardImageProps) {
  const panelClassName = "rounded-md bg-gray-100/50 p-2 text-white";
  const isDisplayCardHeader = options.globalRank || options.countryRank;
  return (
    <Card className="relative w-[270px] max-w-full pt-3 bg-linear-65 from-pink-500 to-rose-600 ring-4 ring-white border-2 border-gray-900 shadow-2xl gap-0 border-t-4 border-b-4" >
      <div className="grid w-full grid-cols-2 gap-2 p-3">

        <div className="flex min-w-0 flex-col gap-2">
          {options.name &&
            <div className={`${panelClassName} text-center font-bold`}>
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
      {
        isDisplayCardHeader &&
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

function DefaultImagePreset({ profile }: { profile: ProfileAttributes }) {
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

function BeatmapCardConstructor({ profile, adStats, options, presets }: PresetImageProps) {
  if (presets.defaultBasic) {
    return <DefaultImagePreset
      profile={profile}
    />
  }
  if (presets.basicHorizontal) {
    return <BasicHorizontalPreset
      profile={profile}
      adStats={adStats}
      options={options}
    />
  }
  if (presets.basicVertical) {
    return <BasicVertialPreset
      profile={profile}
      adStats={adStats}
      options={options}
    />
  }
  if (presets.ticketHorizontal) {
    return <TicketHorizontalPreset
      profile={profile}
      adStats={adStats}
      options={options}
    />
  }
  if (presets.ticketVertical) {
    return <TicketVerticalPreset
      profile={profile}
      adStats={adStats}
      options={options}
    />
  }
  return null
}

export default function BeatmapCard({ profile, adStats, options, presets }: PresetImageProps) {
  return (
    <BeatmapCardConstructor
      profile={profile}
      adStats={adStats}
      options={options}
      presets={presets}
    />
  );
}
