import { config } from "@src/data/config";
import classNames from "classnames";

interface TagsProps extends React.HTMLAttributes<HTMLUListElement> {
  variant?: "primary" | "secondary";
  items: string[];
}

const variants = {
  primary: {
    list: "gap-1",
    item: "bg-gray-200",
  },
  secondary: {
    list: classNames("gap-1", config.highlight_color.text),
    item: "bg-white",
  },
} as const;

export function Tags({
  variant = "primary",
  className = "",
  items,
  ...props
}: TagsProps) {
  return (
    <ul
      className={`flex flex-wrap ${variants[variant].list} ${className}`}
      {...props}
    >
      {items.map((item) => (
        <li key={item} className={`px-1 rounded-md ${variants[variant].item}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
