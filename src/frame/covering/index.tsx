import { FC, ReactNode, SyntheticEvent } from "react"

import { ECoating } from "../../types"
import { StyledButton } from "../../styled"

interface IOptions {
    value: ECoating
    setValue: (value: ECoating) => void
}

const Coating: FC<IOptions> = (options) : ReactNode => {
  const { value, setValue } = options

  const onGlossClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(ECoating.GLOSS)
  }

  const onMatteClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(ECoating.MATTE)
  }

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Покрытие:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === ECoating.GLOSS} onClick={onGlossClick}>Глянцевое</StyledButton> 
        <StyledButton $active={value === ECoating.MATTE} onClick={onMatteClick}>Матовое</StyledButton>
      </div>  
    </div>
  )
}

export default Coating