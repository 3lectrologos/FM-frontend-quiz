'use client'

import {Category, Quiz} from '@/app/types'
import TopBar from '@/app/TopBar'
import QuestionPage from '@/app/QuestionPage'
import { useState } from 'react'
import ScorePage from '@/app/ScorePage'
import LandingPage from '@/app/LandingPage'
import { shuffleArray } from '@/app/util'

type State = 'landing' | 'question' | 'score'

export default function Instrumenter({ quizes }: { quizes: Quiz[] }) {
  const [state, setState] = useState<State>('landing')
  const [score, setScore] = useState<number>(0)
  const [quiz, setQuiz] = useState<Quiz|null>(null)

  function onFinished(score: number) {
    setScore(() => score)
    setState(() => 'score')
  }

  function onAgain() {
    setScore(() => 0)
    setState(() => 'landing')
  }

  function onSelectCategory(category: Category) {
    const nextQuiz = quizes.find((quiz) => quiz.title === category) ?? quizes[0]
    nextQuiz.questions = shuffleArray(nextQuiz.questions)
    for (const question of nextQuiz.questions) {
      question.options = shuffleArray(question.options)
    }
    setQuiz(() => nextQuiz)
    setState(() => 'question')
  }

  return (
    <div className={`flex flex-col w-full grow max-w-[450px] tablet:grow-0 tablet:max-w-none tablet:w-[640px] desktop:w-[1160px]`}>
      <TopBar category={quiz?.title} />
      <div className={`py-8 desktop:pt-0`}>
        {state === 'landing' &&
          <LandingPage onSelect={onSelectCategory} />
        }
        {state === 'question' &&
          <QuestionPage
            questions={quiz!.questions!}
            onFinished={onFinished}
          />
        }
        {state === 'score' &&
          <ScorePage
            category={quiz?.title!}
            score={score}
            maxScore={quiz!.questions.length}
            onAgain={onAgain}
          />}
      </div>
    </div>
  )
}