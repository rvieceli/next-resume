<img width="1537" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/81305f37-96de-4770-8034-59ac44041303">

## About the Project

Writing a `Resume` isn't easy, and doing it in Word isn't fun. So html and css make it easy. `React` and `Tailwindcss` make it even easier and enjoyable.


At [`localhost:3000/`](http://localhost:3000/) is your `Resume`, open [src/app/page.tsx](src/app/page.tsx) and change the layout, move things around.

At [`localhost:3000/cover-letter`](http://localhost:3000/cover-letter) is your cover letter

 - [src/app/cover-letter/layout.tsx](src/app/cover-letter/layout.tsx) contain the header, it uses the same `Title` and `Contact` components of you `Resume`.
 - [src/app/cover-letter/page.tsx](src/app/cover-letter/page.tsx) is the letter content.

<img height="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/9496a227-8353-4682-a31c-f84158ce5a06">
<img height="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/7be3f99f-18e0-4951-9c15-cbdeaac6a174">
<img height="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/2d4d4e96-8967-4e4b-88ea-f1a98de2d80f">

## How to

### One Page!

**IMPORTANT!:** I'm using the premise that `resume` should have one page. You can change [src/app/globals.css](src/app/globals.css) with a percentage that works better for you. I'm using 83%, and I think it should not be bellow 80%.

```css
:root {
  font-size: 83%;
}
```

### Want an avatar?

<img width="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/ae884384-965a-49f8-833c-cacd6558b4ef">

Replace my avatar [public/avatar.jpg](public/avatar.jpg) and remember to keep it small.

> Avatar should be around 50KB, otherwise the PDF will be big.

#### If you want to remove it

Turn off avatar in the [src/data/config.ts](src/data/config.ts)

```ts
export const config = {
  avatar: false,
};
```

## Add your data

### Title

<img width="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/7490668e-41ba-4501-a219-13a437fe6eea">

Your name and position your are applying.

Open [src/data/title.data.ts](src/data/title.data.ts)

```ts
export const titleData = {
  name: "Rafael Ricardo Vieceli",
  headline: "Fullstack developer",
};
```

### Profile

<img width="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/48cb6ba2-5682-4d22-a384-e6396341f6f9">
> Remember, you are a dev, you can move it around.

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

<img width="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/a740c8d7-dc40-4dee-ae1f-40b957ae76d6">

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

<img width="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/e85a3356-c370-4459-a33d-f1ec2faf64c5">


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

<img width="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/19882dac-284a-47f9-9d92-ab44be854c8d">

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

<img width="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/c4720c70-2124-402c-8e3b-1db2136a6ee3">

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

<img width="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/24ee0376-c390-48cc-b219-ce981ba49a3d">

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

<img width="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/f9061e30-278b-411d-92bd-1213ea0c83c6">


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

<img width="300" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/33816426-e9a0-4f0f-98a6-5d1b6bc7acc0">

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

<img height="200" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/89a8dff3-774e-4732-b451-845a93e78ba4">
<img height="200" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/386f0c16-fb86-40fb-851e-b2a4c98e999f">
<img height="200" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/535eea07-5aaf-4c7b-a747-dda6feaa4d5b">
<img height="200" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/fbcb3fad-5219-4678-b948-363d0ca95bd9">


## Printing PDF

When you print, you can set `A4` or `Letter`.

Set `Margins` to `None`

Disable `Print headers and footers`
Enable `Print backgrounds`

The save as PDF, in this way all links will work fine.

<img height="200" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/6ebc5243-d0de-4ee9-8605-d7e32cd16741">
<img height="200" alt="image" src="https://github.com/rvieceli/next-resume/assets/2790845/efe4e9b7-9559-454b-acef-ff538ae2bba2">

## Getting Started

### Built With

- [Next.js](https://nextjs.org/?ref=rvieceli)
- [Tailwind CSS](https://tailwindcss.com/?ref=rvieceli)

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run Next-Resume

- Node.js (Version: >=18.x)
- Npm

### Setup

1. Clone the repo into a **private** GitHub repository.

   ```sh
   git clone https://github.com/rvieceli/next-resume.git
   ```

2. Go to the project folder

   ```sh
   cd next-resume
   ```

3. Install packages with yarn

   ```sh
   npm install
   ```

4. Run

   ```sh
   npm run dev
   ```
