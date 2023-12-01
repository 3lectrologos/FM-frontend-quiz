import { QuizData } from '@/app/types'

import { promises as fs } from 'fs'
import Instrumenter from '@/app/Instrumenter'
import { twMerge } from 'tailwind-merge'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8')
  const data: QuizData = JSON.parse(file)

  return (
    <div className={``}>
      <div className={twMerge(
        `flex justify-center h-screen min-w-fit px-6 bg-light_gray dark:bg-dark_navy text-dark_navy dark:text-white`,
        `bg-[url('/images/pattern-background-mobile-light.svg')] dark:bg-[url('/images/pattern-background-mobile-dark.svg')] bg-left-top bg-no-repeat`,
        `tablet:px-16`,
        `tablet:bg-[url('/images/pattern-background-tablet-light.svg')] tablet:dark:bg-[url('/images/pattern-background-tablet-dark.svg')]`,
        `desktop:bg-[url('/images/pattern-background-desktop-light.svg')] desktop:dark:bg-[url('/images/pattern-background-desktop-dark.svg')] desktop:bg-cover`
      )}
      >
        <Instrumenter quizes={data.quizzes} />
      </div>
    </div>
  )
}