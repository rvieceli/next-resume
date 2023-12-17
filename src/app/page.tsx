import { Metadata } from "next";
import classNames from "classnames";
import { PageContainer } from "../components/page-container/PageContainer";
import { Avatar } from "../features/avatar/Avatar";
import { Certifications } from "../features/certifications/Certifications";
import { ContactSection } from "../features/contact/Contact";
import { Education } from "../features/education/Education";
import { Languages } from "../features/languages/Languages";
import { PersonalDetails } from "../features/personal-details/PersonalDetails";
import { Profile } from "../features/profile/Profile";
import { Skills } from "../features/skills/Skills";
import { Title } from "../features/title/Title";
import { WorkExperience } from "../features/work-experience/WorkExperience";
import { config } from "@src/data/config";

export const metadata: Metadata = {
  title: "Next-CV",
};

export default function Page() {
  return (
    <PageContainer id="resume" className="grid grid-cols-[35%_1fr] gap-0">
      <aside
        className={classNames(
          "h-full flex flex-col gap-6 pl-10 pt-10 pr-4 text-white",
          config.highlight_color.bg,
        )}
      >
        {config.avatar && (
          <div className="flex justify-center mr-6">
            <Avatar />
          </div>
        )}

        <Profile />

        <ContactSection />

        <PersonalDetails />

        <Languages />

        <Skills />

        <Certifications />
      </aside>
      <main className="flex flex-col gap-4 m-4 mt-10 mr-8">
        <Title />

        <WorkExperience />

        <Education />
      </main>
    </PageContainer>
  );
}
