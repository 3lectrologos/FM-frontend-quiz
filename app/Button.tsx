export default function Button({ text, onClick, className='' }: { text: string, onClick: () => void, className?: string }) {
  return (
    <button
      className={`flex flex-row w-full h-14 items-center justify-center rounded-xl p-3 bg-purple text-white font-heading-sm hover:transition hover:bg-purple/50 shadow-button-light dark:shadow-button-dark ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}