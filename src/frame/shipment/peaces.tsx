import { FC, ReactNode } from "react"

interface IOrderOptions {
    size: number
    setSize: (value: number) => void
}

const Peaces: FC<IOrderOptions> = (options) : ReactNode => {
  const { size, setSize } = options


  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="col-start-2 col-span-4 flex justify-start items-start gap-4">
        <label className="input input-bordered flex items-center gap-2 text-primary">
          Размер листа:
          <input type="text" className="grow w-24 border-none" value={size} onChange={(e) => setSize(+e.target.value)} />
        </label>
      </div>  
    </div>
  )
}

export default Peaces