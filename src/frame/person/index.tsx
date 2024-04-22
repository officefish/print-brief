import { FC, ReactNode, SyntheticEvent } from "react"

import { IFullname } from "../../types"

interface IOrderOptions {
    value: IFullname
    setValue: (value: IFullname) => void
}

const Person: FC<IOrderOptions> = (options) : ReactNode => {
  const { value, setValue } = options

  const onFirstNameChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue({ ...value, firstName: e.currentTarget.value })
  }

  const onSecondNameChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue({ ...value, secondName: e.currentTarget.value })
  }

  const onSernameChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue({ ...value, sername: e.currentTarget.value })
  }

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Лицо:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <label className="input input-bordered flex items-center gap-2 text-primary w-64">
          Ф.
          <input type="text" className="grow w-16 border-none" value={value.sername} onChange={onSernameChange} />
        </label>
        <label className="input input-bordered flex items-center gap-2 text-primary w-64">
          И.
          <input type="text" className="grow w-16 border-none" value={value.firstName} onChange={onFirstNameChange} />
        </label>
        <label className="input input-bordered flex items-center gap-2 text-primary w-64">
          О.
          <input type="text" className="grow w-16 border-none" value={value.secondName} onChange={onSecondNameChange} />
        </label>
      </div>  
    </div>
  )
}

export default Person