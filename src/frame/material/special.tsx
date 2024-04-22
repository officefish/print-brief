import { FC, ReactNode, SyntheticEvent } from "react"

import { ESpecialType } from "../../types"
import { StyledButton } from "../../styled"

interface Options {
    value?: ESpecialType
    setValue?: (value: ESpecialType) => void
}

const Special: FC<Options> = (options) : ReactNode => {
  const { value, setValue } = options

  const onMetalicClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(ESpecialType.METALIC)
  }

  const onLeadingClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(ESpecialType.LEADING)
  }

  return (
      <div className="col-start-2 col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === ESpecialType.METALIC} onClick={onMetalicClick}>Металлизировання этикетка</StyledButton> 
        <StyledButton $active={value === ESpecialType.LEADING} onClick={onLeadingClick}>Пломбовая этикетка</StyledButton>
      </div>  
  )
}

export default Special