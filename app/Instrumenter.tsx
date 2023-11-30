'use client'

import {Category, Quiz} from '@/app/types'
import TopBar from '@/app/TopBar'
import QuestionPage from '@/app/QuestionPage'
import { useState } from 'react'
import ScorePage from '@/app/ScorePage'
import LandingPage from '@/app/LandingPage'

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
    setQuiz(() => quizes.find((quiz) => quiz.title === category) ?? quizes[0])
    setState(() => 'question')
  }

  return (
    <div className={`flex flex-col`}>
      <TopBar category={quiz?.title} />
      <div className={`py-8`}>
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