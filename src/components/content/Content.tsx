import { Content } from "@src/@types/common";
import { List } from "@components/list/List";
import { Tags } from "@components/tags/Tags";
import classNames from "classnames";

interface ContentProps extends React.HTMLAttributes<HTMLElement> {
  data?: Content[];
  variant?: "default" | "compact";
}

export function Content({
  data,
  variant = "default",
  className = "",
  ...props
}: ContentProps) {
  if (!data) return null;

  function renderItem(item: Content, index: number) {
    const key = String(index);
    switch (item.type) {
      case "paragraph":
        return <p key={key}>{item.value}</p>;

      case "list":
        return <List key={key} items={item.items} />;

      case "tags":
        return <Tags key={key} items={item.items} />;

      default:
        return null;
    }
  }

  return (
    <main
      className={classNames("flex flex-col gap-2", {
        "text-sm": variant === "compact",
        "leading-snug": variant === "default",
        className,
      })}
      {...props}
    >
      {data.map(renderItem)}
    </main>
  );
}
