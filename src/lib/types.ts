export interface Slide {
  title: string;
  content: string;
  keyIdea?: string;
  question?: string;
  options?: string[];
  answer?: number;
  feedback?: string;
  facilitatorNote?: string;
}

export interface Lesson {
  title: string;
  overview?: string;
  slides: Slide[];
}

export interface TruthLabScenario {
  id: string;
  title: string;
  description: string;
  isFake: boolean;
  explanation: string;
}
