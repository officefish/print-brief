import { FC, ReactNode } from "react"
//import { Link } from "react-router-dom"
import { useOrderStore } from "../store/provider"
import Layout from "./layout"
import FileOrColor from "./file"
import Customer from "./customer"
import Person from "./person"
import Address from "./address"
import Shipment from "./shipment"
import Packaging from "./packaging"
import Delivery from "./delivery"

// interface IHome {
//     username: string
//     setUsername: (name: string) => void
// }

const Frame2: FC = () : ReactNode => {

  const {
    fileOrColorProof,
    setFileOrColorProof,
    file,
    setFile,
    colorProof,
    setColorProof,
    customer,
    setCustomer,
    fullName,
    setFullName,
    contacts,
    setContacts,
    shipment,
    setShipment,
    shipmentSize,
    setShipmentSize,
    roll,
    setRoll,
    packaging,
    setPackaging,
    delivery,
    setDelivery
  } = useOrderStore()

  return (
    
    <div className="card w-[800px] bg-primary text-primary-content items-center text-center mt-8">
      <div className="card-body">
        {/* <h2 className="card-title">Выберите вариант.</h2> */}
        <div className="card-actions mt-4 flex-col gap-6">
           <Layout />
           <FileOrColor 
           value={fileOrColorProof} 
           setValue={setFileOrColorProof} 
           file={file}
           setFile={setFile}
           colorProof={colorProof}
           setColorProof={setColorProof}
           />
           <Customer value={customer} setValue={setCustomer} />
           <Person value={fullName} setValue={setFullName} />
           <Address value={contacts} setValue={setContacts} />
           <Shipment 
           value={shipment} 
           setValue={setShipment} 
           shipmentSize={shipmentSize}
           setShipmentSize={setShipmentSize}
           roll={roll}
           setRoll={setRoll}
           />
           <Packaging value={packaging} setValue={setPackaging} />
           <Delivery value={delivery} setValue={setDelivery} />
        </div>
      </div>
    </div>
  )
}

export default Frame2