import { Section } from "@components/section/Section";
import { personalDetailsData } from "@src/data/personal-details.data";

export function PersonalDetails() {
  if (!personalDetailsData.length) return null;

  return (
    <Section title="Personal Details">
      <ul className="flex flex-col gap-2">
        {personalDetailsData.map((item, index) => (
          <li key={String(index)}>
            <h3 className="font-light text-sm">{item.label}</h3>
            <p className="font-semibold">{item.value}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
