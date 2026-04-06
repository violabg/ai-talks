export type Slide = {
  type: "title" | "section" | "closing";
  title: string;
  subtitle?: string;
  points?: string[];
  code?: string;
  tags?: string[];
  note?: string;
};

export type PresentationData = {
  slides: Slide[];
};
