import {
    EOrder,
    EMaterial,
    EPolypropylenType,
    ESpecialType,
    EPaperType,
    EGlue,
    EColorType,
    ECoating,
    EAdditional,
    EVarnish,
    EUrgency,
    EFileOrColorProof,
    EFile,
    EColorProof,
    ECustomer,
    IFullname,
    IContacts,
    EShipment,
    IRoll,
    EPackaging,
    EDelivery,
    ISize,
} from '../types'

export interface IOrderState {
    order: EOrder,
    material: EMaterial,
    polypropylenType?: EPolypropylenType,
    specialType?: ESpecialType,
    paperType?: EPaperType,
    glue: EGlue,
    colorType: EColorType,
    color?: number,
    size: ISize,
    numbers: number,
    coating: ECoating,
    additional: EAdditional,
    varnish: EVarnish,
    embossingColor: number,
    urgency: EUrgency,
    fileOrColorProof: EFileOrColorProof,
    file?: EFile,
    colorProof?: EColorProof,
    customer: ECustomer,
    fullName: IFullname,
    contacts: IContacts,
    shipment: EShipment,
    shipmentSize: number,
    roll: IRoll,
    packaging: EPackaging,
    delivery: EDelivery
  }

  
export interface IOrderActions {
    setOrder: (order: EOrder) => void
    setMaterial: (material: EMaterial) => void
    setPolypropylenType: (polypropylenType: EPolypropylenType) => void
    setSpecialType: (specialType: ESpecialType) => void
    setPaperType: (paperType: EPaperType) => void
    setGlue: (glue: EGlue) => void
    setColorType: (colorType: EColorType) => void,
    setColor: (color: number) => void
    setSize: (size: ISize) => void
    setNumbers: (numbers: number) => void
    setCoating: (coating: ECoating) => void
    setAdditional: (additional: EAdditional) => void
    setVarnish: (varnish: EVarnish) => void
    setEmbossingColor: (embrossingColor: number) => void
    setUrgency: (urgency: EUrgency) => void
    setFileOrColorProof: (fileOrColorProof: EFileOrColorProof) => void
    setFile: (file: EFile) => void
    setColorProof: (colorProof: EColorProof) => void
    setCustomer: (customer: ECustomer) => void
    setFullName: (fullName: IFullname) => void
    setContacts: (contacts: IContacts) => void
    setShipment: (shipment: EShipment) => void
    setShipmentSize: (size: number) => void
    setRoll: (roll: IRoll) => void
    setPackaging: (packaging: EPackaging) => void
    setDelivery: (delivery: EDelivery) => void
}