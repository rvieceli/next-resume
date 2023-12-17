import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactType } from "@src/data/contact.data";

interface ContactItemProps extends React.HTMLAttributes<HTMLElement> {
  data: ContactType;
  variant?: "reverse";
}

export function ContactItem({ data, variant, ...props }: ContactItemProps) {
  if (data.type === "email") {
    return (
      <a href={`mailto:${data.value}`} {...props}>
        <FontAwesomeIcon icon={data.icon} width={14} height={16} />
        {data.value}
      </a>
    );
  }

  if (data.type === "phone") {
    return (
      <a href={`tel:${data.value}`} {...props}>
        <FontAwesomeIcon icon={data.icon} width={14} height={16} />
        {data.value}
      </a>
    );
  }

  if (data.type === "link") {
    return (
      <a href={data.href} target="_blank" {...props}>
        <FontAwesomeIcon icon={data.icon} width={14} height={16} />
        {data.value}
      </a>
    );
  }

  return (
    <p {...props}>
      <FontAwesomeIcon icon={data.icon} width={14} height={16} />
      {data.value}
    </p>
  );
}
