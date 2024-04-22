import { FC, ReactNode, SyntheticEvent } from "react"

import { EMaterial, EPaperType, EPolypropylenType, ESpecialType } from "../../types"
import { StyledButton } from "../../styled"
import Polypropylen from "./polypropylen"
import Special from "./special"
import Paper from "./paper"

interface IOrderOptions {
    value: EMaterial
    setValue: (value: EMaterial) => void

    polypropylenType?: EPolypropylenType
    specialType?: ESpecialType
    paperType?: EPaperType

    setPolypropylenType?: (value: EPolypropylenType) => void
    setSpecialType?: (value: ESpecialType) => void
    setPaperType?: (value: EPaperType) => void
}

const Material: FC<IOrderOptions> = (options) : ReactNode => {
  const { 
    value, 
    setValue,
    polypropylenType,
    setPolypropylenType, 
    specialType,
    setSpecialType,
    paperType,
    setPaperType
} = options

  const onPolyClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EMaterial.POLYPROPYLEN)
  }

  const onSpecialClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EMaterial.SPECIAL)
  }

  const onPaperClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EMaterial.PAPER)
  }

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Материал:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === EMaterial.POLYPROPYLEN} onClick={onPolyClick}>Полипропилен</StyledButton> 
        <StyledButton $active={value === EMaterial.SPECIAL} onClick={onSpecialClick}>Специализированные материалы</StyledButton>
        <StyledButton $active={value === EMaterial.PAPER} onClick={onPaperClick}>Бумага</StyledButton>
      </div>
      {renderOptional({
        material:value,
        polypropylenType,
        setPolypropylenType,
        specialType,
        setSpecialType,
        paperType,
        setPaperType
    })}  
    </div>
  )
}
export default Material

interface IOptionalSettings {
    material: EMaterial
    polypropylenType?: EPolypropylenType
    specialType?: ESpecialType
    paperType?: EPaperType
    setPolypropylenType?: (value: EPolypropylenType) => void
    setSpecialType?: (value: ESpecialType) => void
    setPaperType?: (value: EPaperType) => void
}

const renderOptional = (options: IOptionalSettings) => {
    switch (options.material) {
      case EMaterial.POLYPROPYLEN:
        return <Polypropylen value={options.polypropylenType} setValue={options.setPolypropylenType} />
      case EMaterial.SPECIAL:
        return <Special value={options.specialType} setValue={options.setSpecialType} />
      case EMaterial.PAPER:
        return <Paper value={options.paperType} setValue={options.setPaperType} />
      default:
        return <></>
    }
}
