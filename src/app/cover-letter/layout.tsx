import classNames from "classnames";
import { PageContainer } from "../../components/page-container/PageContainer";
import { Contact } from "../../features/contact/Contact";
import { Title } from "../../features/title/Title";
import { config } from "@src/data/config";

export default function CoverLetterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      <main className="flex flex-col">
        <style>
          {`
          :root {
            font-size: 90%;
          }
        `}
        </style>
        <header
          className={classNames(
            "flex justify-between items-start p-[1.5cm] text-white",
            config.highlight_color.bg,
          )}
        >
          <Title />
          <Contact variant="reverse" />
        </header>
        {children}
      </main>
    </PageContainer>
  );
}
