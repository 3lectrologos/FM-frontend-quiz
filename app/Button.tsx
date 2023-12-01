import { twMerge } from 'tailwind-merge'

export default function Button({ text, onClick, className='' }: { text: string, onClick: () => void, className?: string }) {
  return (
    <button
      className={twMerge(
        `transition flex flex-row w-full h-14 items-center justify-center rounded-xl p-3 bg-purple text-white font-heading-sm shadow-button-light dark:shadow-button-dark`,
        `hover:transition hover:bg-light_purple`,
        `tablet:h-[92px] tablet:rounded-3xl`,
        `${className}`
      )}
      onClick={onClick}
    >
      {text}
    </button>
  )
}