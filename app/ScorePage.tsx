import Title from '@/app/Title'
import CategoryIcon from '@/app/CategoryIcon'
import { Category } from '@/app/types'
import Button from '@/app/Button'

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

export default function ScorePage({ category, score, maxScore }: { category: Category, score: number, maxScore: number }) {
  return (
    <div className={`flex flex-col gap-y-10`}>
      <Title t1='Quiz completed' t2='You scored...' />
      <ScoreBox category={category} score={score} maxScore={maxScore} />
      <Button text='Play Again' />
    </div>
  )
}