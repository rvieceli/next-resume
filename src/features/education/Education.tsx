import classNames from "classnames";

import { educationData } from "@src/data/education.data";
import { EducationItem } from "./EducationItem";
import { config } from "@src/data/config";

export function Education() {
  return (
    <div className="flex flex-col gap-1">
      <h2
        className={classNames(
          "text-lg font-bold uppercase",
          config.highlight_color.text,
        )}
      >
        Education
      </h2>

      {educationData.map((data, index) => (
        <EducationItem key={String(index)} data={data} />
      ))}
    </div>
  );
}
