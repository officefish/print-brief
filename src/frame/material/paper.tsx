import { FC, ReactNode, SyntheticEvent } from "react"

import { EPaperType } from "../../types"
import { StyledButton } from "../../styled"

interface Options {
    value?: EPaperType
    setValue?: (value: EPaperType) => void
}

const Paper: FC<Options> = (options) : ReactNode => {
  const { value, setValue } = options

  //console.log(value)

  const onTermoecoClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EPaperType.TERMOECO)
  }

  const onTermotopClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EPaperType.TERMOTOP)
  }

  const onSemiGlossClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EPaperType.SEMIGLOSS)
  }

  return (
    <div className="col-start-2 col-span-4 flex justify-start items-start gap-4">
      <StyledButton $active={value === EPaperType.TERMOECO} onClick={onTermoecoClick}>Термоэко</StyledButton> 
      <StyledButton $active={value === EPaperType.TERMOTOP} onClick={onTermotopClick}>Термотоп</StyledButton>
      <StyledButton $active={value === EPaperType.SEMIGLOSS} onClick={onSemiGlossClick}>Полуглянец</StyledButton>
    </div>  
  )
}

export default Paper