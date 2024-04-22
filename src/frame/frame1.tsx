import { FC, ReactNode } from "react"
//import { Link } from "react-router-dom"
import { useOrderStore } from "../store/provider"
import Order from "./order"
import Material from "./material"
import Glue from "./glue"
import Color from "./color"
import Coating from "./covering"
import Size from "./size"
import Numbers from "./numbers"
import Additional from "./additional"
import Urgency from "./urgency"

// interface IHome {
//     username: string
//     setUsername: (name: string) => void
// }

const Frame1: FC = () : ReactNode => {

  const { 
    order, 
    setOrder,
    material,
    setMaterial, 
    polypropylenType,
    setPolypropylenType,
    specialType,
    setSpecialType,
    paperType,
    setPaperType,
    glue,
    setGlue,
    colorType,
    setColorType,
    color,
    setColor,
    coating,
    setCoating,
    size,
    setSize,
    numbers,
    setNumbers,
    additional,
    setAdditional,
    varnish,
    setVarnish,
    embossingColor,
    setEmbossingColor,
    urgency,
    setUrgency,
    // file,
    // setFile,
    // colorProof,
    // setColorProof,
    // customer,
    // setCustomer,
    // fullName,
    // setFullName,
    // contacts,
    // setContacts,
    // shipment,
    // setShipment,
    // shipmentSize,
    // setShipmentSize,
  } = useOrderStore()

  return (
    
    <div className="card w-[800px] bg-primary text-primary-content items-center text-center mt-8">
      <div className="card-body">
        {/* <h2 className="card-title">Выберите вариант.</h2> */}
        <div className="card-actions mt-4 flex-col gap-6">
            <Order value={order} setValue={setOrder} />
            <Material 
            polypropylenType={polypropylenType} 
            setPolypropylenType={setPolypropylenType} 
            value={material} 
            setValue={setMaterial} 
            specialType={specialType}
            setSpecialType={setSpecialType}
            paperType={paperType}
            setPaperType={setPaperType}
          />
          <Glue value={glue} setValue={setGlue} />
          <Color value={colorType} setValue={setColorType} color={color} setColor={setColor} />
          <Coating value={coating} setValue={setCoating} />
          <Size value={size} setValue={setSize} />
          <Numbers value={numbers} setValue={setNumbers} />
          <Additional 
            value={additional} 
            setValue={setAdditional} 
            varnish={varnish}
            setVarnish={setVarnish}
            embossingColor={embossingColor} 
            setEmbossingColor={setEmbossingColor}
          />
          <Urgency value={urgency} setValue={setUrgency} />
        </div>
      </div>
    </div>
  )
}

export default Frame1