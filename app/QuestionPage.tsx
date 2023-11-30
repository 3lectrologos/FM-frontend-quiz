import { Category, Question } from '@/app/types'
import Button from '@/app/Button'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

function QuestionTitle({ question, idx, maxIdx, className='' }: { question: Question, idx: number, maxIdx: number, className?: string }) {
  return (
    <div className={`flex flex-col gap-3 tablet:gap-7 ${className}`}>
      <span className={`font-body-sm text-gray_navy dark:text-light_bluish`}>
        Question {idx + 1} of {maxIdx}
      </span>
      <h1 className={`font-heading-md`}>
        {question.question}
      </h1>
    </div>
  )
}

function ProgressBar({ idx, maxIdx, className='' }: { idx: number, maxIdx: number, className?: string }) {
  const style = {
    width: `${idx / maxIdx * 100}%`
  }
  return (
    <div className={`h-4 rounded-full bg-white dark:bg-navy p-1 ${className}`}>
      <div className={`h-2 bg-purple rounded-full`}
           style={style}
      />
    </div>
  )
}

function Options( { options, className='', onClick, selected=null, isCorrect=null, correct }: { options: string[], className?: string, onClick : (idx: number) => void, selected: number | null, isCorrect: boolean | null, correct: number }) {
  const listIds = ['A', 'B', 'C', 'D', 'E', 'F']

  return (
    <div className={`flex flex-col gap-y-3 tablet:gap-y-6 ${className}`}>
      {options.slice(0, listIds.length).map((choice, idx) =>
        <button
          className={twMerge(
            `transition-none flex flex-row items-center rounded-xl p-3 gap-4 bg-white dark:bg-navy ring-inset ring-[3px] shadow-button-light dark:shadow-button-dark`,
            `${selected === idx && isCorrect === null && 'transition'}`,
            `${(selected === idx) ? ((isCorrect === null) ? 'ring-purple' : (isCorrect ? 'ring-green' : 'ring-red')) : 'ring-purple/0'}`,
            `tablet:rounded-3xl`
            )}
          key={idx}
          onClick={() => onClick(idx)}
        >
          <div className={twMerge(
            `w-10 h-10 flex items-center justify-center shrink-0 rounded bg-light_gray font-heading-sm text-gray_navy`,
            `${selected === idx && isCorrect === null && 'transition'}`,
            `${(selected === idx) && 'text-white'}`,
            `${(selected === idx) && ((isCorrect === null) ? 'bg-purple' : (isCorrect ? 'bg-green' : 'bg-red'))}`,
            `tablet:w-14 tablet:h-14 tablet:rounded-xl`
          )}
          >
            {listIds[idx]}
          </div>
          <span className={`font-heading-sm text-left`}>
            {choice}
          </span>
          <div className={`flex-grow`} />
          <div className={`relative shrink-0 w-8 h-8 tablet:w-10 tablet:h-10`}>
            {correct === idx && isCorrect !== null && <Image src='/images/icon-correct.svg' alt='Correct icon' fill />}
            {selected === idx && isCorrect === false && <Image src='/images/icon-error.svg' alt='Error icon' fill />}
          </div>
        </button>
      )}
    </div>
  )
}

export default function QuestionPage({ questions, onFinished }: { questions: Question[], onFinished: (score: number) => void }) {
  const [hasAnswered, setHasAnswered] = useState<boolean>(false)
  const [selected, setSelected] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showError, setShowError] = useState<boolean>(false)
  const [idx, setIdx] = useState<number>(0)
  const [score, setScore] = useState<number>(0)

  function goNext() {
    if (idx + 1 === questions.length) {
      onFinished(score + 1)
      return
    }
    if (isCorrect) {
      setScore(() => score + 1)
    }
    setIdx(() => idx + 1)
    setHasAnswered(() => false)
    setSelected(() => null)
    setIsCorrect(() => null)
    setShowError(() => false)
  }

  function onSubmit() {
    if (selected === null) {
      setShowError(() => true)
      return
    }
    const correct = questions[idx].answer === questions[idx].options[selected]
    setIsCorrect(() => correct)
    setHasAnswered(() => true)
  }

  function onClick(idx: number) {
    setShowError(() => false)
    if (!hasAnswered) {
      setSelected(idx)
    }
  }

  return (
    <div className={`flex flex-col`}>
      <QuestionTitle className={`mb-6 tablet:mb-10`}
        idx={idx} maxIdx={questions.length} question={questions[idx]} />
      <ProgressBar className={`mb-10 tablet:mb-16`}
        idx={idx} maxIdx={questions.length} />
      <Options
        className={`mb-3 tablet:mb-8`}
        options={questions[idx].options}
        selected={selected}
        isCorrect={isCorrect}
        correct={questions[idx].options.indexOf(questions[idx].answer)}
        onClick={onClick}
      />
      <div className={`mb-3 tablet:mb-8`}>
      { hasAnswered ?
        <Button
          text='Next Question'
          onClick={goNext}
        /> :
        <Button
          text='Submit Answer'
          onClick={onSubmit}
        />
      }
      </div>
      { showError &&
        <div className={`flex flex-row items-center gap-x-2 mx-auto`}>
          <div className={`relative shrink-0 w-8 h-8 tablet:w-10 tablet:h-10`}>
            <Image src='/images/icon-error.svg' alt='Error icon' fill />
          </div>
          <span className={`font-body-md text-center text-red dark:text-white`}>
            Please select an answer
          </span>
        </div>
      }
    </div>
  )
}