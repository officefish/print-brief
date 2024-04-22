import { FC, ReactNode, SyntheticEvent } from "react"

import { EGlue } from "../../types"
import { StyledButton } from "../../styled"

interface IOptions {
    value: EGlue
    setValue: (value: EGlue) => void
}

const Glue: FC<IOptions> = (options) : ReactNode => {
  const { value, setValue } = options

  const onAcrilicClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EGlue.ACRILLIC)
  }

  const onRubberClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EGlue.RUBBER)
  }

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Клей:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === EGlue.ACRILLIC} onClick={onAcrilicClick}>Акрил</StyledButton> 
        <StyledButton $active={value === EGlue.RUBBER} onClick={onRubberClick}>Каучук</StyledButton>
      </div>  
    </div>
  )
}

export default Glue