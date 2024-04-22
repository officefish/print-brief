import { FC, ReactNode, SyntheticEvent } from "react"

import { EOrder, ISize } from "../../store/types"
import { StyledButton } from "../../styled"

interface IOrderOptions {
    value: ISize
    setValue: (value: ISize) => void
}

const Size: FC<IOrderOptions> = (options) : ReactNode => {
  const { value, setValue } = options

  const onWidthChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue({ ...value, width: +e.currentTarget.value })
  }

  const onHeightChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue({ ...value, height: +e.currentTarget.value })
  }

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Размер:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <label className="input input-bordered flex items-center gap-2 text-primary w-40">
          Ширина
          <input type="text" className="grow w-16 border-none" value={value.width} onChange={onWidthChange} />
        </label>
        <label className="input input-bordered flex items-center gap-2 text-primary w-40">
          Высота
          <input type="text" className="grow w-16 border-none" value={value.height} onChange={onHeightChange} />
        </label>
      </div>  
    </div>
  )
}

export default Size