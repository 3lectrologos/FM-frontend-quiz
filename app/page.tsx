import TopBar from '@/app/TopBar'
import { Category, Quiz, QuizData } from '@/app/types'

import LandingPage from '@/app/LandingPage'
import ScorePage from '@/app/ScorePage'
import QuestionPage from "@/app/QuestionPage";
import { promises as fs } from 'fs'

export default async function Home() {
  //const [category, setCategory] = useState<Category>('Accessibility')
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8')
  const data: QuizData = JSON.parse(file)

  const quiz = data.quizzes[3]
  const maxIdx = quiz.questions.length
  const idx = 4
  const question = quiz.questions[idx]
  const category = quiz.title

  return (
    <div className={``}>
      <div className={`min-h-screen min-w-fit px-6 bg-light_gray dark:bg-dark_navy bg-[url('/images/pattern-background-mobile-light.svg')] dark:bg-[url('/images/pattern-background-mobile-dark.svg')] bg-right-top bg-no-repeat text-dark_navy dark:text-white`}>
        <div className={`flex flex-col`}>
          <TopBar category={category} />
          <div className={`py-8`}>
            {/*<ScorePage category={category} score={8} maxScore={10} />*/}
            <QuestionPage category={category}
                          question={question}
                          idx={idx+1}
                          maxIdx={maxIdx} />
          </div>
        </div>
      </div>
    </div>
  )
}