import { FC, ReactNode, SyntheticEvent } from "react"

import { EOrder } from "../../types"
import { StyledButton } from "../../styled"

interface IOrderOptions {
    value: EOrder
    setValue: (value: EOrder) => void
}

const Order: FC<IOrderOptions> = (options) : ReactNode => {
  const { value, setValue } = options

  const onSampleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EOrder.SAMPLE)
  }

  const onSerieClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EOrder.SERIE)
  }

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Что делаем?</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === EOrder.SAMPLE} onClick={onSampleClick}>Образцы</StyledButton> 
        <StyledButton $active={value === EOrder.SERIE} onClick={onSerieClick}>Тираж</StyledButton>
      </div>  
    </div>
  )
}

export default Order