export default function ProgressBar({ idx, maxIdx, className='' }: { idx: number, maxIdx: number, className?: string }) {
  const style = {
    width: `${idx / maxIdx * 100}%`
  }
  return (
    <div className={`h-4 rounded-full bg-white dark:bg-navy p-1 ${className}`}>
      <div className={`transition-[width] duration-300 h-2 bg-purple rounded-full`}
           style={style}
      />
    </div>
  )
}