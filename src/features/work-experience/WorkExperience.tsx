import classNames from "classnames";

import { workExperienceData } from "@src/data/work-experience.data";
import { WorkExperienceItem } from "./WorkExperienceItem";
import { config } from "@src/data/config";

export function WorkExperience() {
  return (
    <div className="flex flex-col gap-2">
      <h2
        className={classNames(
          "text-lg font-bold uppercase",
          config.highlight_color.text,
        )}
      >
        Work Experience
      </h2>

      {workExperienceData.map((data, index) => (
        <WorkExperienceItem key={String(index)} data={data} />
      ))}
    </div>
  );
}
