import { FC, ReactNode, SyntheticEvent } from "react"

import { EDelivery } from "../../types"
import { StyledButton } from "../../styled"

interface IOptions {
    value: EDelivery
    setValue: (value: EDelivery) => void
}

const Delivery: FC<IOptions> = (options) : ReactNode => {
  const { value, setValue } = options

  const onSelfClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EDelivery.SELF)
  }

  const onClientClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EDelivery.CLIENT)
  }

  const onServiceClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EDelivery.SERVICE)
  }


  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Упаковка:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === EDelivery.SELF} onClick={onSelfClick}>Самовывоз</StyledButton> 
        <StyledButton $active={value === EDelivery.CLIENT} onClick={onClientClick}>Курьером клиента</StyledButton>
        <StyledButton $active={value === EDelivery.SERVICE} onClick={onServiceClick}>Службой доставки</StyledButton>
      </div>  
    </div>
  )
}

export default Delivery