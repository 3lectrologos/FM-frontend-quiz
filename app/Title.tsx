export default function Title({ t1, t2, sub=undefined }: { t1: string, t2: string, sub?: string }) {
  return  (
    <h1 className={`flex flex-col gap-y-2`}>
      <span className={`font-heading-lg-regular`}>
        {t1}
      </span>
      <span className={`font-heading-lg-bold`}>
        {t2}
      </span>
      {sub && (
        <span className={`font-body-sm mt-2 text-gray_navy dark:text-light_bluish`}>
          {sub}
        </span>
      )}
    </h1>
  )
}