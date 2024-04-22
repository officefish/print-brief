import { FC, ReactNode, SyntheticEvent } from "react"

import { EColorType } from "../../types"
import { StyledButton } from "../../styled"

interface IOptions {
    value: EColorType
    setValue: (value: EColorType) => void
    color?: number
    setColor?: (value: number) => void
}

const Color: FC<IOptions> = (options) : ReactNode => {
  const { value, setValue, color, setColor } = options

  const onFullClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EColorType.FULL)
  }

  const onWhiteClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EColorType.WHITE)
  }

  const onSingleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EColorType.SINGLE)
  }

  const onColorChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    const number = e.currentTarget.value.split('#')[1]
    if (number) {
      setColor && setColor(parseInt(number, 16))
    }
    //setValue(EColorType.COLOR)
  }

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Цвет:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === EColorType.FULL} onClick={onFullClick}>Полнцвет</StyledButton> 
        <StyledButton $active={value === EColorType.WHITE} onClick={onWhiteClick}>Белый</StyledButton>
        <StyledButton $active={value === EColorType.SINGLE} onClick={onSingleClick}>Одиночный</StyledButton>
        {value === EColorType.SINGLE ? (
        <>
          <input 
            type="text" 
            placeholder="color" 
            value={numberToHex(color || 0)} 
            className="input input-bordered input-primary w-24 max-w-xs text-primary" 
            onChange={(e) => setColor?.(parseInt(e.target.value, 16))}
            />
          <input type="color" value={numberToHex(color || 0)} 
            onChange={onColorChange}
          />
        </>)   : null}
      </div>  
    </div>
  )
}

function numberToHex(number: number) {
  const hex = number ? number.toString(16) : "000000"
  return "#" + hex
}

export default Color