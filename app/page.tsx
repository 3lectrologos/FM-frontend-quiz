import { QuizData } from '@/app/types'

import { promises as fs } from 'fs'
import Instrumenter from '@/app/Instrumenter'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8')
  const data: QuizData = JSON.parse(file)

  return (
    <div className={``}>
      <div className={`min-h-screen min-w-fit px-6 bg-light_gray dark:bg-dark_navy bg-[url('/images/pattern-background-mobile-light.svg')] dark:bg-[url('/images/pattern-background-mobile-dark.svg')] bg-left-top bg-no-repeat text-dark_navy dark:text-white tablet:px-16`}>
        <Instrumenter quizes={data.quizzes} />
      </div>
    </div>
  )
}