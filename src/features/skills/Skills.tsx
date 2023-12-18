import { Section } from "@components/section/Section";
import { Tags } from "@components/tags/Tags";
import { skillsData } from "@src/data/skills.data";

export function Skills({ inverted = false }: { inverted?: boolean }) {
  if (!skillsData.length) return null;

  return (
    <Section title="Skills">
      <Tags
        variant={inverted ? "secondary" : "primary"}
        className="text-sm mr-2"
        items={skillsData}
      />
    </Section>
  );
}
