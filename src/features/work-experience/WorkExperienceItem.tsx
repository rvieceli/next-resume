import { Content } from "@components/content/Content";
import { Position } from "@src/data/work-experience.data";
import classNames from "classnames";

interface WorkExperienceItemProps {
  data: Position;
}

export function WorkExperienceItem({ data }: WorkExperienceItemProps) {
  const { title, company, period, details } = data;

  return (
    <section className="flex flex-col gap-2">
      <header>
        <h3 className="text-md font-bold uppercase">{title}</h3>
        <p className="text-md leading-tight">
          <a
            href={company.url}
            target="_blank"
            className={classNames({
              "hover:underline": company.url,
              disabled: !company.url,
            })}
          >
            {company.name}
          </a>
          <span className="text-sm font-thin ml-2">
            {period.start} - {period.end || "Present"}
          </span>
        </p>
      </header>

      <Content data={details} variant='compact' />
    </section>
  );
}
