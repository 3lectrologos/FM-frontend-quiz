import Image from 'next/image'
import ThemeToggle from '@/app/ThemeToggle'
import CategoryIcon from '@/app/CategoryIcon'
import { Category } from '@/app/types'

export default function TopBar({ category=undefined }: { category?: Category }) {
  return (
    <div className={`flex flex-row items-center py-4 tablet:pt-10`}>
      <div className={`flex flex-row gap-x-4 items-center ${category ?? 'invisible'} tablet:gap-x-6`}>
        <CategoryIcon category={category ?? 'HTML'} />
        <span className={`font-heading-sm`}>
          {category ?? 'HTML'}
        </span>
      </div>
      <div className={`flex-grow`} />
      <ThemeToggle />
    </div>
  )
}