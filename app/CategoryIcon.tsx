import Image from 'next/image'
import { Category } from '@/app/types'

export default function CategoryIcon({ category }: { category: Category }) {
  const lowerCaseName = category.toLowerCase()
  const capitalizedName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1)
  let bgColor = ''
  let iconURL = `/images/icon-${lowerCaseName.toLowerCase()}.svg`
  switch (category) {
    case 'HTML':
      bgColor = 'bg-icon_orange'
      break
    case 'CSS':
      bgColor = 'bg-icon_green'
      break
    case 'Javascript':
      bgColor = 'bg-icon_blue'
      iconURL = `/images/icon-js.svg`
      break
    case 'Accessibility':
      bgColor = 'bg-icon_purple'
      break
  }

  return (
    <div className={`shrink-0 w-10 h-10 ${bgColor} p-[5.7px] rounded tablet:w-14 tablet:h-14 tablet:rounded-xl tablet:p-2`}>
      <div className={`relative w-full h-full`}>
        <Image src={iconURL}
               alt={`${capitalizedName} icon`}
               fill />
      </div>
    </div>
  )
}