import type { Route } from "./+types/dailyrotation";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import BeatmapCard, { PresetBigImage } from "~/components/beatmapcard";
import { Checkbox } from "~/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "~/components/ui/field"

export function CheckboxGroup() {
  return (
    <FieldSet>
      <FieldLegend variant="label">
        Statistic Options:
      </FieldLegend>
      <FieldDescription>
        Modify the attributes listed to change the stats listed on the card.
      </FieldDescription>
      <FieldGroup className="gap-3">
        <Field orientation="responsive">
          <Checkbox
            id="finder-pref-9k2-hard-disks-ljj-checkbox"
            name="finder-pref-9k2-hard-disks-ljj-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
            className="font-normal"
          >
            Global Rank
          </FieldLabel>
          <Checkbox
            id="finder-pref-9k2-hard-disks-ljj-checkbox"
            name="finder-pref-9k2-hard-disks-ljj-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
            className="font-normal"
          >
            Global Rank
          </FieldLabel>
        </Field>
        <Field orientation="responsive">
          <Checkbox
            id="finder-pref-9k2-external-disks-1yg-checkbox"
            name="finder-pref-9k2-external-disks-1yg-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-external-disks-1yg-checkbox"
            className="font-normal"
          >
            Country Rank
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-cds-dvds-fzt-checkbox"
            name="finder-pref-9k2-cds-dvds-fzt-checkbox"
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-cds-dvds-fzt-checkbox"
            className="font-normal"
          >
            Performance Points
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-connected-servers-6l2-checkbox"
            name="finder-pref-9k2-connected-servers-6l2-checkbox"
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-connected-servers-6l2-checkbox"
            className="font-normal"
          >
            Accuracy
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-connected-servers-6l2-checkbox"
            name="finder-pref-9k2-connected-servers-6l2-checkbox"
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-connected-servers-6l2-checkbox"
            className="font-normal"
          >
            Hours Played
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-connected-servers-6l2-checkbox"
            name="finder-pref-9k2-connected-servers-6l2-checkbox"
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-connected-servers-6l2-checkbox"
            className="font-normal"
          >
            PlayCount
          </FieldLabel>
        </Field>
      </FieldGroup>

    </FieldSet>
  )
}



export default function Profile() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-6 gap-4 px-4 lg:grid-cols-[270px_minmax(0,1fr)]">
        <div className="min-w-0">
          <BeatmapCard
            img="https://media.tenor.com/ZLHdbFbs26sAAAAj/kirby-cute.gif"
            name="plee"
            joinDate="May 2018"
            nation="United States"
            rankGlobal={872}
            rankNation={189}
            totalPP={14107}
            accuracy={98.71}
            playCount={51505}
            hitsPerPlay={323}
            playTime={971}
          />
        </div>
        <div className="min-w-0">
          <CheckboxGroup />
        </div>
        <div className="min-w-0">
          <PresetBigImage />
        </div>
      </div>
      <Footer />
    </div>
  );
}
