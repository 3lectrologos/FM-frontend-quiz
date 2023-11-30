import CategoryIcon from '@/app/CategoryIcon'
import { Category, CATEGORIES } from '@/app/types'
import Title from '@/app/Title'

function CategoryButton({ category }: { category: Category }) {
  const iconURL = `/images/icon-${category.toLowerCase()}.svg`
  return (
    <div className={`flex flex-row items-center gap-x-4 rounded-xl p-3 bg-white dark:bg-navy`}>
      <CategoryIcon category={category} />
      <span className={`font-heading-sm`}>
        {category}
      </span>
    </div>
  )
}

function Categories() {
  return (
    <div className={`flex flex-col gap-y-3`}>
      {CATEGORIES.map((category) =>
        <CategoryButton key={category} category={category} />
      )}
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className={`flex flex-col gap-y-10`}>
      <Title t1='Welcome to the' t2='Frontend Quiz!' sub='Pick a subject to get started.' />
      <Categories />
    </div>
  )
}