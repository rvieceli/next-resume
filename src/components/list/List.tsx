import classNames from "classnames";

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: string[];
}

export function List({ items, className, ...props }: ListProps) {
  return (
    <ul className={classNames("list-disc ml-4", className)} {...props}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
