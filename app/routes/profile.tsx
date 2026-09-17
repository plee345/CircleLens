import { useState } from "react";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import { BeatmapCardBuildDefault, BasicVertialPreset } from "~/components/beatmapcard";
import { Checkbox } from "~/components/ui-shadcn/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "~/components/ui-shadcn/field"

const initialOptions = {
  name: true,
  joinDate: true,
  country: true,
  globalRank: true,
  countryRank: true,
  playTime: true,
  pp: true,
  accuracy: true,
  level: true,
  xPP: true,
  xRank: true,
  xStarRating: true,
};

const presets = {
  defaultBasic: false,
  basicVertical: true,
  basicHorizontal: false,
  ticketHorizontal: false,
  ticketVertical: false,
};

type CheckboxGroupProps = {
  options: typeof initialOptions;
  onOptionChange: (key: keyof typeof initialOptions, checked: boolean) => void;
};

export function CheckboxGroup({ options, onOptionChange }: CheckboxGroupProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
      <FieldSet className="min-w-0">
        <FieldLegend>
          Profile Statistics
        </FieldLegend>
        <FieldDescription>
          Basic Attributes found on an osu! profile.
        </FieldDescription>
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
          <Field orientation="horizontal">
            <Checkbox
              id="name-checkbox"
              checked={options.name}
              onCheckedChange={(checked) => onOptionChange("name", checked)}
            />
            <FieldLabel htmlFor="name-checkbox">Name</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="joinDate-checkbox"
              checked={options.joinDate}
              onCheckedChange={(checked) => onOptionChange("joinDate", checked)}
            />
            <FieldLabel htmlFor="joinDate-checkbox">Join Date</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="country-checkbox"
              checked={options.country}
              onCheckedChange={(checked) => onOptionChange("country", checked)}
            />
            <FieldLabel htmlFor="country-checkbox">Country</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="global-rank-checkbox"
              checked={options.globalRank}
              onCheckedChange={(checked) => onOptionChange("globalRank", checked)}
            />
            <FieldLabel htmlFor="global-rank-checkbox">Global Rank</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="country-rank-checkbox"
              checked={options.countryRank}
              onCheckedChange={(checked) => onOptionChange("countryRank", checked)}
            />
            <FieldLabel htmlFor="country-rank-checkbox">Country Rank</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="pp-checkbox"
              checked={options.pp}
              onCheckedChange={(checked) => onOptionChange("pp", checked)}
            />
            <FieldLabel htmlFor="pp-checkbox">Performance Points</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="accuracy-checkbox"
              checked={options.accuracy}
              onCheckedChange={(checked) => onOptionChange("accuracy", checked)}
            />
            <FieldLabel htmlFor="accuracy-checkbox">Accuracy</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="level-checkbox"
              checked={options.level}
              onCheckedChange={(checked) => onOptionChange("level", checked)}
            />
            <FieldLabel htmlFor="level-checkbox">Level</FieldLabel>
          </Field>
        </div>
      </FieldSet>
      <FieldSet className="min-w-0">
        <FieldLegend>
          Advanced Statistics
        </FieldLegend>
        <FieldDescription>
          Attributes generated from your profile stats. The 'x' before the stat name stands for expected, it is your estimated value based off of your stats compared to the players around you.
        </FieldDescription>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="xPP-checkbox"
              checked={options.xPP}
              onCheckedChange={(checked) => onOptionChange("xPP", checked)}
            />
            <FieldLabel htmlFor="xPP-checkbox">xPerformance Points</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="xRank-checkbox"
              checked={options.xRank}
              onCheckedChange={(checked) => onOptionChange("xRank", checked)}
            />
            <FieldLabel htmlFor="xRank-checkbox">xRank</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="xStarRating-checkbox"
              checked={options.xStarRating}
              onCheckedChange={(checked) => onOptionChange("xStarRating", checked)}
            />
            <FieldLabel htmlFor="xStarRating-checkbox">xStar Rating</FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSet className="min-w-0">
        <FieldLegend>
          Advanced Statistics
        </FieldLegend>
        <FieldDescription>
          Attributes generated from your profile stats. The 'x' before the stat name stands for expected, it is your estimated value based off of your stats compared to the players around you.
        </FieldDescription>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="xPP-checkbox"
              checked={options.xPP}
              onCheckedChange={(checked) => onOptionChange("xPP", checked)}
            />
            <FieldLabel htmlFor="xPP-checkbox">xPerformance Points</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="xRank-checkbox"
              checked={options.xRank}
              onCheckedChange={(checked) => onOptionChange("xRank", checked)}
            />
            <FieldLabel htmlFor="xRank-checkbox">xRank</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="xStarRating-checkbox"
              checked={options.xStarRating}
              onCheckedChange={(checked) => onOptionChange("xStarRating", checked)}
            />
            <FieldLabel htmlFor="xStarRating-checkbox">xStar Rating</FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}

export type ProfileOptions = typeof initialOptions;


export default function Profile() {
  const [options, setOptions] = useState(initialOptions);
  function updateOption(key: keyof typeof options, checked: boolean) {
    setOptions((previous) => ({
      ...previous,
      [key]: checked,
    }));
  }

  const profileData = {
    img: "https://media.tenor.com/ZLHdbFbs26sAAAAj/kirby-cute.gif",
    name: "plee",
    joinDate: "May 7th 2018",
    nation: "United States",
    rankGlobal: 872,
    rankNation: 189,
    totalPP: 14107,
    accuracy: 98.71,
    playCount: 51505,
    hitsPerPlay: 323,
    playTime: 971,
  };
  const advancedStats = {
    xPP: 14500,
    xRank: 800,
    xStarRating: 7.8,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 lg:grid-cols-[270px_minmax(0,1fr)]">
        <div className="min-w-0">
          <BeatmapCardBuildDefault {...profileData} />
        </div>
        <div className="min-w-0">
          <CheckboxGroup options={options} onOptionChange={updateOption} />
        </div>
        <div className="min-w-0">
          <BasicVertialPreset
            profile={profileData}
            adStats={advancedStats}
            options={options}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
