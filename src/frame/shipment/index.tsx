import { FC, ReactNode, SyntheticEvent } from "react"

import { EShipment, IRoll } from "../../types"
import { StyledButton } from "../../styled"
import Peaces from "./peaces"
import Roll from "./roll"


interface IOrderOptions {
    value: EShipment
    setValue: (value: EShipment) => void
    shipmentSize: number
    setShipmentSize: (value: number) => void
    roll: IRoll,
    setRoll: (value: IRoll) => void
}

const Shipment: FC<IOrderOptions> = (options) : ReactNode => {
  const { 
    value, 
    setValue,
    shipmentSize, 
    setShipmentSize,
    roll,
    setRoll
} = options

  const onPeacesClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EShipment.PEACES)
  }

  const onRollClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EShipment.ROLL)
  }

  return (
    <>
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Отгрузка:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === EShipment.PEACES} onClick={onPeacesClick}>В листы</StyledButton> 
        <StyledButton $active={value === EShipment.ROLL} onClick={onRollClick}>В рулоны</StyledButton>
      </div>
    </div>
    {renderOptional({
        shipment: value,
        shipmentSize,
        setShipmentSize,
        roll,
        setRoll
    })}  
    </>
    
  )
}
export default Shipment

interface IOptionalSettings {
    shipment: EShipment
    shipmentSize: number
    setShipmentSize: (value: number) => void
    roll: IRoll,
    setRoll: (value: IRoll) => void
}

const renderOptional = (options: IOptionalSettings) => {
    switch (options.shipment) {
      case EShipment.PEACES:
        return <Peaces size={options.shipmentSize} setSize={options.setShipmentSize} />
      case EShipment.ROLL:
        return <Roll value={options.roll} setValue={options.setRoll} />
      default:
        return <></>
    }
}
