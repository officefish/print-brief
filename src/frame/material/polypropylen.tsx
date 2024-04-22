import { FC, ReactNode, SyntheticEvent } from "react"

import { EPolypropylenType } from "../../types"
import { StyledButton } from "../../styled"

interface Options {
    value?: EPolypropylenType
    setValue?: (value: EPolypropylenType) => void
}

const Polypropylen: FC<Options> = (options) : ReactNode => {
  const { value, setValue } = options

  const onTransparentClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EPolypropylenType.TRANSPARENT)
  }

  const onWhiteClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EPolypropylenType.WHITE)
  }

  return (
      <div className="col-start-2 col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === EPolypropylenType.TRANSPARENT} onClick={onTransparentClick}>Прозрачный</StyledButton> 
        <StyledButton $active={value === EPolypropylenType.WHITE} onClick={onWhiteClick}>Белый</StyledButton>
      </div>  
  )
}

export default Polypropylen