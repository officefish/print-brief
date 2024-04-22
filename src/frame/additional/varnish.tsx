import { FC, ReactNode, SyntheticEvent } from "react"

import { EVarnish } from "../../types"
import { StyledButton } from "../../styled"

interface Options {
    value?: EVarnish
    setValue?: (value: EVarnish) => void
}

const Varnish: FC<Options> = (options) : ReactNode => {
  const { value, setValue } = options

  //console.log(value)

  const onContinuousClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EVarnish.CONTINUOUS)
  }

  const onSelectiveClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EVarnish.SELECTIVE)
  }

  return (
    <div className="col-start-2 col-span-4 flex justify-start items-start gap-4">
      <StyledButton $active={value === EVarnish.CONTINUOUS} onClick={onContinuousClick}>Сплошной</StyledButton> 
      <StyledButton $active={value === EVarnish.SELECTIVE} onClick={onSelectiveClick}>Выборочный</StyledButton>
    </div>  
  )
}

export default Varnish