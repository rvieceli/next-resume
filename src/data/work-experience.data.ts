import { Content } from "@src/@types/common";

export interface Company {
  name: string;
  url: string;
}

export interface Period {
  start: string;
  end?: string;
}

export interface Position {
  title: string;
  company: Company;
  period: Period;
  details?: Content[];
}

export const workExperienceData: Position[] = [
  {
    title: "FULLSTACK SOFTWARE DEVELOPER",
    company: {
      name: "FOODBARRIO, Switzerland (part-time, remote)",
      url: "https://foodbarrio.com/en/",
    },
    period: {
      start: "Jul 2023",
    },
  },
  {
    title: "SENIOR FULLSTACK SOFTWARE DEVELOPER",
    company: {
      name: "HYPERTING, Italy (remote)",
      url: "https://www.hyperting.com/",
    },
    period: {
      start: "May 2022",
      end: "Apr 2023",
    },
    details: [
      {
        type: "paragraph",
        value:
          "Worked on a software house, involved in internal and international projects, like accounting and flight management CRMs.",
      },
      {
        type: "list",
        items: [
          "Collaborate with stakeholders to gather requirements for new features;",
          "Developed new functionalities for both server and client;",
          "Designing database structures and GraphQL schemas and creating reusable components.",
        ],
      },
      {
        type: "tags",
        items: [
          "React",
          "Node.JS",
          "TypeScript",
          "Express",
          "GraphQL",
          "Apollo server",
          "Apollo client",
          "PostgreSQL",
          "Redis",
          "Rust",
        ],
      },
    ],
  },
  {
    title: "FULLSTACK SOFTWARE DEVELOPER",
    company: {
      name: "FOODBARRIO, Switzerland (remote)",
      url: "https://foodbarrio.com/en/",
    },
    period: {
      start: "Apr 2020",
      end: "Apr 2022",
    },
    details: [
      {
        type: "paragraph",
        value:
          "Helped a Swiss-based startup to build a social marketplace that connects local Italian food producers directly to customers through a mobile app with social network and marketplace features, where people can connect, share, chat, and buy goods.",
      },
      {
        type: "list",
        items: [
          "Collaborate closely with founders to gather requirements, conduct research, and write documentation for new and unique features;",
          "Architect MVP and solutions for new ideas;",
          "Developed new functionalities for both server and client;",
          "Designing database structures and GraphQL schemas and creating reusable components.",
          "Developing, deploying, and debugging cloud-based applications using AWS Lambda, for video processing and generating PDF.",
          "Also responsible for dependency upgrades;",
          "Apple store and Android store management.",
        ],
      },
      {
        type: "tags",
        items: [
          "React Native",
          "Expo",
          "Node.JS",
          "GraphQL",
          "Express",
          "Apollo server",
          "Apollo client",
          "PostgreSQL",
          "AWS S3",
          "AWS Lambda",
          "Python",
          "Redis",
          "Heroku",
          "Redux",
          "Algolia",
          "Stripe",
        ],
      },
    ],
  },
  {
    title: "SENIOR SOFTWARE DEVELOPER",
    company: {
      name: "TOTVS, Brazil",
      url: "https://en.totvs.com/",
    },
    period: {
      start: "Jan 2008",
      end: "Apr 2019",
    },
    details: [
      {
        type: "paragraph",
        value:
          "Worked at the biggest ERP company in Brazil, on multiple software projects simultaneously with different clients from different markets, and had strong expertise in translating the client&apos;s specific needs into easy-to-understand software solutions, ensuring that clients&apos; vision and requirements were met.",
      },
      {
        type: "list",
        items: [
          "Meet with clients and stakeholders to gather requirements, conduct research, and create detailed plans and specifications for new functionality;",
          "Developed new software functionalities;",
          "Custom modules and processes for specific domains;",
          "Integrations using web services, databases, and text files;",
          "Automation of tasks and processes focused on improving productivity;",
          "Algorithms for industry, distribution, and finance companies;",
          "Supervised and led a team of developers.",
        ],
      },
      {
        type: "tags",
        items: [
          "ADVPL (propriety language)",
          "MSSQL",
          "Oracle",
          "Lead",
          "Training",
        ],
      },
    ],
  },
];
