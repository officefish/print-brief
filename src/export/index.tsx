import { FC, ReactNode, SyntheticEvent } from "react"
import { useOrderStore } from "../store/provider"
import { saveAs } from 'file-saver'
import { IExportData } from "../types"
import { Parser } from "../parser"

import { v4 as uuid } from 'uuid'

const Export: FC = () : ReactNode => {

  const { 
    order, 
    material,
    polypropylenType,
    specialType,
    paperType,
    glue,
    colorType,
    color,
    coating,
    size,
    numbers,
    additional,
    varnish,
    embossingColor,
    urgency,
    fileOrColorProof,
    file,
    colorProof,
    customer,
    fullName,
    contacts,
    shipment,
    shipmentSize,
    roll,
    packaging,
    delivery,
  } = useOrderStore()

  const getExportData = () => {
    return {
        order,
        material,
        polypropylenType,
        specialType,
        paperType,
        glue,
        colorType,
        color,
        coating,
        size,
        numbers,
        additional,
        varnish,
        embossingColor,
        urgency,
        fileOrColorProof,
        file,
        colorProof,
        customer,
        fullName,
        contacts,
        shipment,
        shipmentSize,
        roll,
        packaging,
        delivery,
    } satisfies IExportData
  }

  const toText = (exportData: IExportData) => {
    //let str = ''
    //str += exportData.order.toString()
    const parser = new Parser(exportData)
    return parser.toString()
  }

  const onTxtExportClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const fileData = toText(getExportData())
    console.log(fileData)
    const blob = new Blob([fileData], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = `order_${uuid()}.txt`
    link.href = url
    link.click()
    //const blob = new Blob([fileData], { type: "text/plain" })
    //saveAs(blob, 'order.txt')
  }


  const onJSONExportClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    const fileData = JSON.stringify(getExportData())
    const blob = new Blob([fileData], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = "order.json"
    link.href = url
    link.click()
  }

  return (
    
    <div className="w-[800px] flex gap-4 items-center justify-center text-center mt-8">
        <button className="btn btn-accent" onClick={onTxtExportClick}>Сохранить в .txt</button>
        <button className="btn btn-accent" onClick={onJSONExportClick}>Сохранить в .json</button>
    </div>
  )
}

export default Export
