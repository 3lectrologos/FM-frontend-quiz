'use client'

import TopBar from '@/app/TopBar'
import { Category } from '@/app/types'
import { useState } from 'react'

import LandingPage from '@/app/LandingPage'
import ScorePage from '@/app/ScorePage'

export default function Home() {
  const [category, setCategory] = useState<Category>('Accessibility')

  return (
    <div className={``}>
      <div className={`min-h-screen min-w-fit px-6 bg-light_gray dark:bg-dark_navy bg-[url('/images/pattern-background-mobile-light.svg')] dark:bg-[url('/images/pattern-background-mobile-dark.svg')] bg-right-top bg-no-repeat text-dark_navy dark:text-white`}>
        <div className={`flex flex-col`}>
          <TopBar category={category} />
          <div className={`py-8`}>
            <ScorePage category={category} score={8} maxScore={10} />
          </div>
        </div>
      </div>
    </div>
  )
}