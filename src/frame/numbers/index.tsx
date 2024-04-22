import { FC, ReactNode } from "react"

interface IOptions {
    value: number
    setValue: (value: number) => void
}

const Numbers: FC<IOptions> = (options) : ReactNode => {
  const { value, setValue } = options

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Количество:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <label className="input input-bordered flex items-center gap-2 text-primary w-40">
          Кол-во
          <input type="text" className="grow w-16 border-none" value={value} onChange={(e) => setValue(+e.currentTarget.value)} />
        </label>
      </div>  
    </div>
  )
}

export default Numbers