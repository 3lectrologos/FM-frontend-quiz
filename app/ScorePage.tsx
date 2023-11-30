import Title from '@/app/Title'
import CategoryIcon from '@/app/CategoryIcon'
import { Category } from '@/app/types'

function ScoreBox({ category, score, maxScore }: { category: Category, score: number, maxScore: number }) {
  return (
    <div className={`flex flex-col items-center gap-y-4 p-8 rounded-xl bg-white dark:bg-navy`}>
      <div className={`flex flex-row items-center justify-center gap-x-4`}>
        <CategoryIcon category={category} />
        <span className={`font-heading-sm`}>
            {category}
          </span>
      </div>
      <div className={`text-center font-display`}>
        {score}
      </div>
      <div className={`text-center font-body-md text-gray_navy dark:text-light_bluish`}>
        out of {maxScore}
      </div>
    </div>
  )
}

function PlayAgainButton() {
  return (
    <button className={`flex flex-row h-14 items-center justify-center rounded-xl p-3 bg-purple text-white font-heading-sm hover:transition hover:bg-purple/50`}>
      Play Again
    </button>
  )
}

export default function ScorePage({ category, score, maxScore }: { category: Category, score: number, maxScore: number }) {
  return (
    <div className={`flex flex-col gap-y-10`}>
      <Title t1='Quiz completed' t2='You scored...' />
      <ScoreBox category={category} score={score} maxScore={maxScore} />
      <PlayAgainButton />
    </div>
  )
}