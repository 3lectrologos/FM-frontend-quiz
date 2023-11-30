import Title from '@/app/Title'
import CategoryIcon from '@/app/CategoryIcon'
import { Category } from '@/app/types'
import Button from '@/app/Button'

function ScoreBox({ category, score, maxScore, className='' }: { category: Category, score: number, maxScore: number, className?: string }) {
  return (
    <div className={`flex flex-col items-center p-8 rounded-xl bg-white dark:bg-navy shadow-button-light dark:shadow-button-dark tablet:p-12 tablet:rounded-3xl ${className}`}>
      <div className={`flex flex-row items-center justify-center gap-x-4 mb-4 tablet:gap-x-6 tablet:mb-10`}>
        <CategoryIcon category={category} />
        <span className={`font-heading-sm`}>
            {category}
          </span>
      </div>
      <div className={`text-center font-display mb-4 tablet:mb-4`}>
        {score}
      </div>
      <div className={`text-center font-body-md text-gray_navy dark:text-light_bluish`}>
        out of {maxScore}
      </div>
    </div>
  )
}

export default function ScorePage({ category, score, maxScore, onAgain }: { category: Category, score: number, maxScore: number, onAgain: () => void }) {
  return (
    <div className={`flex flex-col`}>
      <Title className={`mb-10 tablet:mb-16`}
        t1='Quiz completed' t2='You scored...' />
      <ScoreBox className={`mb-3 tablet:mb-8`}
        category={category} score={score} maxScore={maxScore} />
      <Button text='Play Again' onClick={onAgain} />
    </div>
  )
}