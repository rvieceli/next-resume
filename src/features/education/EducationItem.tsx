import { Content } from "@components/content/Content";
import { Education } from "@src/data/education.data";
import classNames from "classnames";

interface EducationItemProps {
  data: Education;
}

export function EducationItem({ data }: EducationItemProps) {
  const { degree, school, period, details } = data;

  return (
    <section className="flex flex-col gap-2">
      <header>
        <h3 className="text-md font-bold uppercase">{degree}</h3>
        <p className="text-md leading-tight">
          <a
            href={school.url}
            target="_blank"
            className={classNames({
              "hover:underline": school.url,
              disabled: !school.url,
            })}
          >
            {school.name}
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
