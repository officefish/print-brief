import { FC, ReactNode, SyntheticEvent } from "react"

import { EUrgency } from "../../types"
import { StyledButton } from "../../styled"

interface IOptions {
    value: EUrgency
    setValue: (value: EUrgency) => void
}

const Urgency: FC<IOptions> = (options) : ReactNode => {
  const { value, setValue } = options

  const onCheapClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EUrgency.CHEAP)
  }

  const onStandartClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EUrgency.STANDART)
  }

  const onUrgentlyClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EUrgency.URGENTLY)
  }

  const onExtraClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EUrgency.EXTRA)
  }

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Срочность:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === EUrgency.CHEAP} onClick={onCheapClick}>7-10 дней</StyledButton> 
        <StyledButton $active={value === EUrgency.STANDART} onClick={onStandartClick}>3-5 дней</StyledButton>
        <StyledButton $active={value === EUrgency.URGENTLY} onClick={onUrgentlyClick}>1-2 дня</StyledButton>
        <StyledButton $active={value === EUrgency.EXTRA} onClick={onExtraClick}>до 1 дня</StyledButton>
      </div>  
    </div>
  )
}

export default Urgency