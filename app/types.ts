export const CATEGORIES = ['HTML', 'CSS', 'Javascript', 'Accessibility'] as const
export type Category = typeof CATEGORIES[number]

export type Question = {
  question: string,
  options: string[],
  answer: string
}

export type Quiz = {
  title: Category,
  icon: string,
  questions: Question[]
}

export type QuizData = {
  quizzes: Quiz[]
}