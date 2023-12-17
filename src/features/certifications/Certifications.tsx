import { certificationsData } from "@src/data/certifications.data";
import { Section } from "../../components/section/Section";

export function Certifications() {
  if (!certificationsData.length) return null;

  return (
    <Section title="Certifications">
      <ul className="flex flex-col gap-1 text-md">
        {certificationsData.map((item, index) => (
          <li key={String(index)} className="flex items-baseline">
            <a
              href={item.credentialUrl}
              target="_blank"
              className="underline underline-offset-4 hover:no-underline"
            >
              {item.name}
              <span className="text-sm font-thin"> ({item.year})</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
