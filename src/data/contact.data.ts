import {
  faSquarePhone,
  faSquareEnvelope,
  faLocationDot,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export type Type = "email" | "phone" | "text" | "link";

interface BaseContact {
  type: "phone" | "text" | "email";
  icon: IconDefinition;
  value: string;
}

interface LinkContact extends Omit<BaseContact, "type"> {
  type: "link";
  href: string;
}

export type ContactType = BaseContact | LinkContact;

export const contactData: ContactType[] = [
  {
    type: "email",
    icon: faSquareEnvelope,
    value: "your_email_@gmail.com",
  },
  {
    type: "phone",
    icon: faSquarePhone,
    value: "+1 234 567 890",
  },
  {
    type: "link",
    icon: faSquareGithub,
    value: "github.com/rvieceli",
    href: "https://github.com/rvieceli",
  },
  {
    type: "link",
    icon: faLinkedin,
    value: "linkedin.com/in/rafael-vieceli",
    href: "https://www.linkedin.com/in/rafael-vieceli/",
  },
  // {
  //   type: "text",
  //   icon: faLocationDot,
  //   value: "Ivrea, Italy",
  // }
];
