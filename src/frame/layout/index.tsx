import { FC, ReactNode } from "react"

// interface IOrderOptions {
//     value: EOrder
//     setValue: (value: EOrder) => void
// }

const Layout: FC = () : ReactNode => {

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Макет:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <input type="file" className="file-input w-full max-w-xs text-primary" />
      </div>  
    </div>
  )
}

export default Layout