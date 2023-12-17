import { Content } from "@src/@types/common";

export interface School {
  name: string;
  url?: string;
}

export interface Period {
  start: string;
  end: string; // future date if in progress
}

export interface Education {
  degree: string;
  school: School;
  period: Period;
  details?: Content[];
}

export const educationData: Education[] = [
  {
    degree: "Bachelor of Technology Management",
    school: {
      name: "FAEC INESUL, Brazil",
    },
    period: {
      start: "2007",
      end: "2019",
    },
    // details: [
    //   {
    //     type: "paragraph",
    //     value: "I've studied a lot.",
    //   },
    //   {
    //     type: "tags",
    //     items: ["Networking"],
    //   },
    // ],
  },
];
