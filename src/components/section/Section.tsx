import classNames from "classnames";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
}

export function Section({ title, children, reverse }: SectionProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2
        className={classNames("font-bold uppercase", {
          "text-right": reverse,
        })}
      >
        {title}
      </h2>

      {children}
    </div>
  );
}
