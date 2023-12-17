import { Content } from "@components/content/Content";
import { Section } from "@components/section/Section";
import { profileData } from "@src/data/profile.data";

export function Profile() {
  if (!profileData.length) return null;

  return (
    <Section title="Profile">
      <Content data={profileData} />
    </Section>
  );
}
