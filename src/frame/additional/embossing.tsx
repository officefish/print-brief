import { FC, ReactNode, SyntheticEvent } from "react"

import { EVarnish } from "../../types"

interface Options {
    color?: number
    setColor?: (value: EVarnish) => void
}

const Embossing: FC<Options> = (options) : ReactNode => {
  const { color, setColor } = options

  const onColorChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    const number = e.currentTarget.value.split('#')[1]
    if (number) {
      setColor && setColor(parseInt(number, 16))
    }
    //setValue(EColorType.COLOR)
  }

  return (
    <div className="col-start-2 col-span-4 flex justify-start items-start gap-4">
        <label className="text-secondary">
            Цвет фольги: 
        </label>
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
    </div>  
  )
}

export default Embossing

function numberToHex(number: number) {
    const hex = number ? number.toString(16) : "000000"
    return "#" + hex
}