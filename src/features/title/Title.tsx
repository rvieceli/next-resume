import { titleData } from "@src/data/title.data";
import classNames from "classnames";

interface TitleProps {
  variant?: "small" | "large";
}

export function Title({ variant = "large" }: TitleProps) {
  return (
    <div className="flex flex-col">
      <h1
        className={classNames("font-bold uppercase", {
          "text-3xl": variant === "large",
          "text-lg": variant === "small",
        })}
      >
        {titleData.name}
      </h1>
      <h2
        className={classNames(" uppercase", {
          "text-xl": variant === "large",
          "text-md": variant === "small",
        })}
      >
        {titleData.headline}
      </h2>
    </div>
  );
}
