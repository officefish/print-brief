import { FC, ReactNode, SyntheticEvent } from "react"

import { EPackaging } from "../../types"
import { StyledButton } from "../../styled"

interface IOptions {
    value: EPackaging
    setValue: (value: EPackaging) => void
}

const Packaging: FC<IOptions> = (options) : ReactNode => {
  const { value, setValue } = options

  const onStretchClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EPackaging.STRETCH)
  }

  const onCartoonClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EPackaging.CARTOON)
  }

  const onPalleteClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EPackaging.PALLETE)
  }


  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Упаковка:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === EPackaging.STRETCH} onClick={onStretchClick}>В стрейч</StyledButton> 
        <StyledButton $active={value === EPackaging.CARTOON} onClick={onCartoonClick}>В картон</StyledButton>
        <StyledButton $active={value === EPackaging.PALLETE} onClick={onPalleteClick}>На палету</StyledButton>
      </div>  
    </div>
  )
}

export default Packaging