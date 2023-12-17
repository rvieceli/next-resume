## About the Project

Writing a CV isn't easy, and doing it in Word isn't fun. So html and css make it easy. `React` and `Tailwindcss` make it even easier and enjoyable.


At [`localhost:3000/`](http://localhost:3000/) is your CV, open [src/app/page.tsx](src/app/page.tsx) and change the layout, move things around.

`text-color` are set at the higher level.

At [`localhost:3000/cover-letter`](http://localhost:3000/cover-letter) is your cover letter

 - [src/app/cover-letter/layout.tsx](src/app/cover-letter/layout.tsx) contain the header, it uses the same `Title` and `Contact` components of you CV.
 - [src/app/cover-letter/page.tsx](src/app/cover-letter/page.tsx) is the letter content.

## How to

### Want an avatar?

Replace my avatar [public/avatar.jpg](public/avatar.jpg) and remember to keep it small, otherwise the PDF will be big.

> Avatar should be around 50KB.

#### If you want to remove it

Turn off avatar in the [src/data/config.ts](src/data/config.ts)

```ts
export const config = {
  avatar: false,
};
```

## Add your data

### Title

Your name and position your are applying.

Open [src/data/title.data.ts](src/data/title.data.ts)

```ts
export const titleData = {
  name: "Rafael Ricardo Vieceli",
  headline: "Fullstack developer",
};
```

### Profile

Your introduction

Open [src/data/profile.data.ts](src/data/profile.data.ts)

```ts
export const profileData: Paragraph[] = [
  {
    type: "paragraph",
    value: "Experienced FullStack Developer with...",
  },
];
```

I used the concept of some text editors. You can look how it is rendered in the [Content](src/components/content/Content.tsx) component.

> I'm working on a better way to add log texts

### Contact

Your contacts, phone, email, github, linkedin and more.

Open [src/data/contact.data.ts](src/data/contact.data.ts)

Current we have 4 types of contacts

```ts
interface BaseContact {
  type: "phone" | "text" | "email";
  icon: IconDefinition;
  value: string;
}

interface LinkContact extends Omit<BaseContact, "type"> {
  type: "link";
  href: string;
}

export const contactData: ContactType[] = [
  {
    type: "email",
    icon: faSquareEnvelope,
    value: "your_email_@gmail.com",
  },
  {
    type: "phone",
    icon: faSquarePhone,
    value: "your phone number",
  },
  {
    type: "link",
    icon: faSquareGithub,
    value: "github.com/rvieceli",
    href: "https://github.com/rvieceli",
  },
];
```

Why? I added link for everything, Email has `href=mailto:email` and phone has `href=tel:+1..`

You can look how it is rendered in the [ContactItem](src/features/contact/ContactItem.tsx) component.

If you want to add something else, like Instagram

```ts
import {
  faSquareGithub,
  faLinkedin,
  faInstagram, // << here
} from "@fortawesome/free-brands-svg-icons";
```

and then add it to [profile.data.ts](src/data/profile.data.ts)

```ts
export const contactData: ContactType[] = [
  ...,
  {
    type: "link",
    icon: faInstagram,
    value: "instagram/rvieceli",
    href: "https://www.instagram.com/rvieceli",
  },
]
```

### Personal Details

This details are like contact, but they're hard to describe with an icon, So it is a Label/Value list.

Open [src/data/personal-details.data.ts](src/data/personal-details.data.ts)

```ts
export const personalDetailsData: LabelValue[] = [
  {
    label: "Nationality",
    value: "Brazilian, Italian",
  },
  {
    label: "Location",
    value: "Ivrea, Italy",
  },
];
```

> Nationality is relevant since I can work in Europe without a visa. But you can leave it empty and it will be hidden.

### Languages

Languages you speak, for an international position is a must have.

Open [src/data/languages.data.ts](src/data/languages.data.ts)

```ts
export const languagesData: Language[] = [
  {
    language: "Portuguese",
    level: "native",
  },
  {
    language: "English",
    level: "advanced",
  },
];
```

> You can leave it empty and it will be hidden.

### Skills

It's all of your skills, an array of string.

Open [src/data/skills.data.ts](src/data/skills.data.ts)

```ts
export const skillsData: string[] = [
  "JavaScript",
  "TypeScript",
  "AWS",
  "React",
  "React Native",
  "GraphQL",
  "Node.js",
  ...
]
```

> It could get from work experience and filter duplications, but You can remove or add something as need.
> You can leave it empty and it will be hidden.

### Certifications

Certifications has 3 relevant information, `name`, `year` (because it expires) and the `credentialUrl`, people might want to check.

Open [src/data/certifications.data.ts](src/data/certifications.data.ts)

```ts
export const certificationsData: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    year: "2023",
    credentialUrl:
      "https://www.credly.com/badges/f3853a19-e3a9-4880-9d04-0eff8aeddf2d/public_url",
  },
];
```

> You can leave it empty and it will be hidden.

### Work experience

Open [src/data/work-experience.data.ts](src/data/work-experience.data.ts)

Each work experience is divided is two parts, header (`title`, `company` and `period`) and optional details (`details`).

```ts
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
```

This an example.

```ts
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
        value: "Worked on a software house",
      },
      {
        type: "list",
        items: ["Item 1;", "Item 2;"],
      },
      {
        type: "tags",
        items: ["React", "Node.JS", "TypeScript"],
      },
    ],
  },
];
```

You can look how it is rendered in the [WorkExperienceItem](src/features/work-experience/WorkExperienceItem.tsx) and [Content](src/components/content/Content.tsx) component.

> **content** can be ordered as you want, you can add tags first, or you can just use a list. There is no rules here.
> You can leave it empty and it will be hidden.

### Education

It's similar to Work Experiences.

Open [src/data/education.data.ts](src/data/education.data.ts)

The differences area `school` (replacing `company`) and `period.end` that is required (add the future date, like LinkedIn)

```ts
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
```

And here is an example:

```ts
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
    details: [
      {
        type: "paragraph",
        value: "I've studied a lot.",
      },
      {
        type: "tags",
        items: ["Networking"],
      },
    ],
  },
];
```

> You can rename the [Education](src/features/education/Education.tsx) component as `Courses` or duplicate it.
> You can leave it empty and it will be hidden.

### Config

I add a config to change highlight color and toggle avatar.

Open [src/data/config.ts](src/data/config.ts)

```ts
export const config = {
  avatar: false,
  highlight_color: {
    bg: "bg-blue-700", // bg-[#00f] for arbitrary color}
    text: "text-blue-700", // text-[#00f] for arbitrary color}
  },
};
```

## Printing PDF

When you print, you can set `A4` or `Letter`.

Set `Margins` to `None`

Disable `Print headers and footers`
Enable `Print backgrounds`

The save as PDF, in this way all links will work fine.

## Getting Started

### Built With

- [Next.js](https://nextjs.org/?ref=rvieceli)
- [Tailwind CSS](https://tailwindcss.com/?ref=rvieceli)

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run Next-CV

- Node.js (Version: >=18.x)
- Npm

### Setup

1. Clone the repo into a **private** GitHub repository.

   ```sh
   git clone https://github.com/rvieceli/next-cv.git
   ```

2. Go to the project folder

   ```sh
   cd next-cv
   ```

3. Install packages with yarn

   ```sh
   npm install
   ```

4. Run

   ```sh
   npm run dev
   ```
