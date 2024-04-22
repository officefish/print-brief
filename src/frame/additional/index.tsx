import { FC, ReactNode, SyntheticEvent } from "react"

import { EAdditional, EVarnish } from "../../types"
import { StyledButton } from "../../styled"
import Varnish from "./varnish"
import Embossing from "./embossing"


interface IAditionalOptions {
    value: EAdditional
    setValue: (value: EAdditional) => void
    varnish: EVarnish
    setVarnish: (value: EVarnish) => void
    embossingColor: number
    setEmbossingColor: (value: number) => void
}

const Additional: FC<IAditionalOptions> = (options) : ReactNode => {
  const { 
    value, 
    setValue,
    varnish,
    setVarnish,
    embossingColor,
    setEmbossingColor
} = options

  const onVarnishClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EAdditional.VARNISH)
  }

  const onLaminationClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EAdditional.LAMINATION)
  }

  const onEmbrossingClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EAdditional.EMBOSSING)
  }

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Дополнительно:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === EAdditional.VARNISH} onClick={onVarnishClick}>Лак</StyledButton> 
        <StyledButton $active={value === EAdditional.LAMINATION} onClick={onLaminationClick}>Ламинация</StyledButton>
        <StyledButton $active={value === EAdditional.EMBOSSING} onClick={onEmbrossingClick}>Теснение</StyledButton>
      </div>
      {renderOptional({
        additional:value,
        varnish,
        setVarnish,
        embossingColor,
        setEmbossingColor,
    })}  
    </div>
  )
}
export default Additional

interface IOptionalSettings {
    additional: EAdditional
    varnish: EVarnish
    setVarnish: (value: EVarnish) => void
    embossingColor: number
    setEmbossingColor: (value: number) => void
}

const renderOptional = (options: IOptionalSettings) => {
    switch (options.additional) {
      case EAdditional.VARNISH:
        return <Varnish value={options.varnish} setValue={options.setVarnish} />
      case EAdditional.LAMINATION:
        return <></>
      case EAdditional.EMBOSSING:
        return <Embossing color={options.embossingColor} setColor={options.setEmbossingColor} />
      default:
        return <></>
    }
}
