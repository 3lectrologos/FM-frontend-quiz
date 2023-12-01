import CategoryIcon from '@/app/CategoryIcon'
import { Category, CATEGORIES } from '@/app/types'
import Title from '@/app/Title'
import { twMerge } from 'tailwind-merge'
import { keyDownLikeButton } from '@/app/util'

function CategoryButton({ category, onClick }: { category: Category, onClick: () => void }) {
  const iconURL = `/images/icon-${category.toLowerCase()}.svg`
  return (
    <div
      className={twMerge(
        `flex flex-row items-center gap-x-4 rounded-xl p-3 bg-white cursor-pointer dark:bg-navy shadow-button-light dark:shadow-button-dark`,
        `tablet:gap-x-8 tablet:rounded-3xl`,
        `desktop:w-[564px] desktop:p-5`,
        `hover:transition hover:bg-white/50 dark:hover:bg-navy/50`,
        `focusable`
      )}
      role='button'
      tabIndex={0}
      aria-label={`Select category ${category}`}
      onKeyDown={keyDownLikeButton}
      onClick={onClick}
    >
      <CategoryIcon category={category} />
      <span className={`font-heading-sm`}>
        {category}
      </span>
    </div>
  )
}

function Categories({ onClick }: { onClick: (category: Category) => void }) {
  return (
    <div className={`flex flex-col gap-y-3 tablet:gap-y-6`}>
      {CATEGORIES.map((category) =>
        <CategoryButton
          key={category}
          category={category}
          onClick={() => onClick(category)}
        />
      )}
    </div>
  )
}

export default function LandingPage({ onSelect }: { onSelect: (category: Category) => void }) {
  return (
    <div className={twMerge(
      `flex flex-col gap-y-10 tablet:gap-y-16`,
      `desktop:w-[1160px] desktop:flex-row desktop:justify-between`
    )}>
      <Title t1='Welcome to the' t2='Frontend Quiz!' sub='Pick a subject to get started.' />
      <Categories onClick={onSelect} />
    </div>
  )
}