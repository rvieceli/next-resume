import classNames from "classnames";
import { contactData } from "@src/data/contact.data";
import { ContactItem } from "./ContactItem";
import { Section } from "@components/section/Section";

interface ContactProps {
  reverse?: boolean;
}

export function ContactSection(props: ContactProps) {
  if (!contactData.length) return null;

  return (
    <Section title="Contact" {...props}>
      <Contact {...props} />
    </Section>
  );
}

export function Contact({ reverse }: ContactProps) {
  return (
    <ul className="flex flex-col gap-2">
      {contactData.map((contact, index) => (
        <li key={String(index)}>
          <ContactItem
            data={contact}
            className={classNames(
              "flex items-end gap-2 underline underline-offset-4 hover:no-underline",
              {
                "flex-row-reverse": reverse,
              },
            )}
          />
        </li>
      ))}
    </ul>
  );
}
