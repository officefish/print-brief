import { FC, ReactNode, SyntheticEvent } from "react"

import { IContacts } from "../../store/types"

interface IOrderOptions {
    value: IContacts
    setValue: (value: IContacts) => void
}

const Address: FC<IOrderOptions> = (options) : ReactNode => {
  const { value, setValue } = options

  const onZipcodeChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue({ ...value, zipcode: +e.currentTarget.value })
  }

  const onAddressChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue({ ...value, rawData: e.currentTarget.value })
  }

  const onPhoneChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue({ ...value, phone: +e.currentTarget.value })
  }



  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Адрес:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <label className="input input-bordered flex items-center gap-2 text-primary w-64">
          Индекс:
          <input type="text" className="grow w-16 border-none" value={value.zipcode} onChange={onZipcodeChange} />
        </label>
        <label className="input input-bordered flex items-center gap-2 text-primary w-64">
          Телефон:
          <input type="text" className="grow w-16 border-none"placeholder="только цифры" value={value.phone} onChange={onPhoneChange} />
        </label>
      </div>
      <div className="col-start-2 col-span-4 flex justify-start items-start gap-4">
        <label className="input input-bordered flex items-center gap-2 text-primary w-96">
          Адрес:
          <input type="text" className="grow w-16 border-none" value={value.rawData} onChange={onAddressChange} />
        </label>
      </div>    
    </div>
  )
}

export default Address