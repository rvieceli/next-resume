import { Section } from "@components/section/Section";
import { languagesData } from "@src/data/languages.data";

export function Languages() {
  if (!languagesData.length) return null;

  return (
    <Section title="Languages">
      <ul className="text-md">
        {languagesData.map((item, index) => (
          <li key={String(index)}>
            {item.language}{" "}
            <span className="text-sm font-thin">({item.level})</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
