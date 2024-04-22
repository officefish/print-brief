import { FC, ReactNode, SyntheticEvent } from "react"
import { IRoll } from "src/types"

interface IOrderOptions {
    value: IRoll
    setValue: (value: IRoll) => void
}

const Roll: FC<IOrderOptions> = (options) : ReactNode => {
  const { value, setValue } = options


  const onRollDiameterChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue({ ...value, diameter: +e.currentTarget.value })
  }

  const onRollQuantityChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue({ ...value, quantity: +e.currentTarget.value })
  }

  const onRollDirectionChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue({ ...value, direction: e.currentTarget.value })
  }

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="col-start-2 col-span-4 flex justify-start items-start gap-4">
        <label className="input input-bordered flex items-center gap-2 text-primary">
          Диаметер:
          <input type="text" className="grow w-10 border-none" value={value.diameter} onChange={onRollDiameterChange} />
        </label>
        <label className="input input-bordered flex items-center gap-2 text-primary">
          Направление:
          <input type="text" className="grow w-20 border-none" value={value.direction} onChange={onRollDirectionChange} />
        </label>
        <label className="input input-bordered flex items-center gap-2 text-primary">
          Количество:
          <input type="text" className="grow w-10 border-none" value={value.quantity} onChange={onRollQuantityChange} />
        </label>
      </div>  
    </div>
  )
}

export default Roll