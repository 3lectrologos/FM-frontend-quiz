'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className={`flex flex-row items-center gap-x-2`}>
      <div className={`relative w-4 h-4 dark:hidden`}>
        <Image src='/images/icon-sun-dark.svg' alt='Accessibility icon' fill />
      </div>
      <div className={`relative w-4 h-4 hidden dark:block`}>
        <Image src='/images/icon-sun-light.svg' alt='Accessibility icon' fill />
      </div>
      <label className={`relative inline-flex items-center cursor-pointer`}>
        <input type='checkbox'
               value=''
               className={`hidden peer group`}
               checked={theme === 'dark'}
               onChange={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
        />
        <div className={`flex flex-row shrink-0 w-8 h-5 bg-purple rounded-full p-1`} />
        <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-3`} />
      </label>
      <div className={`relative w-4 h-4 dark:hidden`}>
        <Image src='/images/icon-moon-dark.svg' alt='Accessibility icon' fill />
      </div>
      <div className={`relative w-4 h-4 hidden dark:block`}>
        <Image src='/images/icon-moon-light.svg' alt='Accessibility icon' fill />
      </div>
    </div>
  )
}