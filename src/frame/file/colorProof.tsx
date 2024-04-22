import { FC, ReactNode, SyntheticEvent } from "react"

import { EColorProof } from "../../types"
import { StyledButton } from "../../styled"

interface Options {
    value?: EColorProof
    setValue?: (value: EColorProof) => void
}

const ColorProof: FC<Options> = (options) : ReactNode => {
  const { value, setValue } = options

  //console.log(value)

  const onYesClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EColorProof.YES)
  }

  const onNoClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EColorProof.NO)
  }

  const onPhotoClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue && setValue(EColorProof.PHOTO)
  }

  return (
    <div className="col-start-2 col-span-4 flex justify-start items-start gap-4">
      <StyledButton $active={value === EColorProof.YES} onClick={onYesClick}>Да</StyledButton> 
      <StyledButton $active={value === EColorProof.NO} onClick={onNoClick}>Нет</StyledButton>
      <StyledButton $active={value === EColorProof.PHOTO} onClick={onPhotoClick}>По фотографии</StyledButton>
    </div>  
  )
}

export default ColorProof