import { FC, ReactNode, SyntheticEvent } from "react"

import { ECustomer } from "../../types"
import { StyledButton } from "../../styled"

interface IOptions {
    value: ECustomer
    setValue: (value: ECustomer) => void
}

const Customer: FC<IOptions> = (options) : ReactNode => {
  const { value, setValue } = options

  const onIndividualClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(ECustomer.INDIVIDUAL)
  }

  const onOrganizationClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(ECustomer.ORGANIZATION)
  }

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Заказчик:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === ECustomer.INDIVIDUAL} onClick={onIndividualClick}>Физ.лицо</StyledButton> 
        <StyledButton $active={value === ECustomer.ORGANIZATION} onClick={onOrganizationClick}>Юр.лицо</StyledButton>
      </div>
      {value === ECustomer.ORGANIZATION && (
        <> 
          <div className="col-start-2 col-span-4 flex justify-start items-center gap-4 text-secondary">
          <label className="input input-bordered flex items-center gap-2 text-primary w-56">
            ИНН: 
            <input type="text" placeholder="10 цифр" className="grow w-16 border-none" />
          </label>
          </div>
          <div className="col-start-2 col-span-4 flex justify-start items-center gap-4 text-secondary">
            Реквизиты: <input type="file" className="file-input w-full max-w-xs text-primary" />
          </div> 
        </>
       
        )}  
    </div>
  )
}

export default Customer