'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

function ThemeToggle() {
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

function TopBar() {
  return (
    <div className={`flex flex-row items-center py-4`}>
      <div className={`shrink-0 w-10 h-10 bg-icon_purple p-[5.7px] mr-4 rounded`}>
        <div className={`relative w-full h-full`}><Image src={'/images/icon-accessibility.svg'} alt='Accessibility icon' fill /></div>
      </div>
      <span className={`font-heading-sm`}>
        Accessibility
      </span>
      <div className={`flex-grow`} />
      <ThemeToggle />
    </div>
  )
}

export default function Home() {
  return (
    <div className={`relative bg-light_gray dark:bg-navy min-h-screen min-w-fit px-6 text-dark_navy dark:text-white`}>
      {/*
      <div className={`absolute -top-[165px] -left-[382px] w-[977px] h-[977px]`}>
        <Image src={'/images/pattern-background-mobile-light.svg'} alt='Background pattern' fill />
      </div>
      */}
      <div className={`flex flex-col`}>
        <TopBar />
      </div>
    </div>
  )
}