export interface Paragraph {
  type: "paragraph";
  value: string;
}

export interface List {
  type: "list";
  items: Array<string>;
}

export interface Tags {
  type: "tags";
  items: Array<string>;
}

export type Content = Paragraph | List | Tags;
