import classNames from "classnames";
import { contactData } from "@src/data/contact.data";
import { ContactItem } from "./ContactItem";
import { Section } from "@components/section/Section";

export function ContactSection() {
  if (!contactData.length) return null;

  return (
    <Section title="Contact">
      <Contact />
    </Section>
  );
}

export function Contact({ variant }: { variant?: "reverse" }) {
  const anchorClass = classNames(
    "flex items-end gap-2 underline underline-offset-4 hover:no-underline",
    {
      "flex-row-reverse": variant === "reverse",
    },
  );

  return (
    <ul className="flex flex-col gap-2">
      {contactData.map((contact, index) => (
        <li key={String(index)}>
          <ContactItem data={contact} className={anchorClass} />
        </li>
      ))}
    </ul>
  );
}
