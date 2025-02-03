export interface Question {
  question: string;
  answer: string;
  displayAnswer: string;
  wordLengths: number[];
}

export interface FeedbackType {
  messages: string[];
  className: string;
}

export interface Feedback {
  message: string;
  className: string;
}

export interface FeedbackMessages {
  correct: FeedbackType;
  wrong: FeedbackType;
}