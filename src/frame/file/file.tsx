import { FC, ReactNode, SyntheticEvent } from "react"

import { EFile} from "../../types"
import { StyledButton } from "../../styled"

interface Options {
    value?: EFile
    setValue?: (value: EFile) => void
}

const File: FC<Options> = (options) : ReactNode => {
  const { value, setValue } = options

  //console.log(value)

  const onReadyClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EFile.READY)
  }

  const onPrepressClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EFile.PREPRESS)
  }

  const onDesignClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EFile.DESIGN)
  }

  return (
    <div className="col-start-2 col-span-4 flex justify-start items-start gap-4">
      <StyledButton $active={value === EFile.READY} onClick={onReadyClick}>Готовый</StyledButton> 
      <StyledButton $active={value === EFile.PREPRESS} onClick={onPrepressClick}>Препресс</StyledButton>
      <StyledButton $active={value === EFile.DESIGN} onClick={onDesignClick}>Дизайн</StyledButton>
    </div>  
  )
}

export default File