import { FC, PropsWithChildren, useRef, useContext } from 'react'
import { createStore, useStore } from 'zustand'
import { createContext } from 'react' // from 'zustand/context'
import { 
    EMaterial, 
    EPolypropylenType, 
    ESpecialType, 
    EPaperType,
    EOrder,
    EGlue,
    IFullname,
    IContacts,
    EShipment,
    EPackaging,
    EDelivery,
    ECustomer,
    EColorProof,
    EFile,
    EUrgency,
    ISize,
    EColorType,
    ECoating,
    EAdditional,
    EVarnish,
    EFileOrColorProof,
    IRoll
} from '../types'

import { 
    IOrderState, 
    IOrderActions, 
} from './types'

type IOrderStore = IOrderState & IOrderActions

const createOrderStore = () =>
  createStore<IOrderStore>()((set) => ({
    order: EOrder.SAMPLE,
    setOrder:  (newOrder: EOrder) =>
        set(() => ({ order: newOrder })),
    material: EMaterial.PAPER,
    setMaterial:  (newMaterial: EMaterial) =>
        set(() => ({ material: newMaterial })),
    polypropylenType: EPolypropylenType.TRANSPARENT,
    setPolypropylenType:  (newPolypropylenType: EPolypropylenType) =>
        set(() => ({ polypropylenType: newPolypropylenType })),
    specialType: ESpecialType.LEADING,
    setSpecialType:  (newSpecialType: ESpecialType) =>
        set(() => ({ specialType: newSpecialType })),
    paperType: EPaperType.TERMOECO,
    setPaperType: (newPaperType: EPaperType) =>
        set(() => ({ paperType: newPaperType })),
    glue: EGlue.ACRILLIC,
    setGlue:  (newGlue: EGlue) =>
        set(() => ({ glue: newGlue })),
    colorType: EColorType.WHITE,
    setColorType:  (newColorType: EColorType) =>
        set(() => ({ colorType: newColorType })),
    color: 0,
    setColor:  (newColor: number) =>
        set(() => ({ color: newColor })),
    size: { width: 0, height: 0 },
    setSize:  (newSize: ISize) =>
        set(() => ({ size: newSize })),
    numbers: 0,
    setNumbers:  (newNumbers: number) =>
        set(() => ({ numbers: newNumbers })),
    coating: ECoating.GLOSS,
    setCoating:  (newCoating: ECoating) =>
        set(() => ({ coating: newCoating })),
    additional: EAdditional.EMBOSSING,
    setAdditional:  (newAdditional: EAdditional) =>
        set(() => ({ additional: newAdditional })),
    varnish: EVarnish.CONTINUOUS,
    setVarnish:  (newVarnish: EVarnish) =>
        set(() => ({ varnish: newVarnish })),
    embossingColor: 0,
    setEmbossingColor:  (newEmbossingColor: number) =>
        set(() => ({ embossingColor: newEmbossingColor })),
    urgency: EUrgency.EXTRA,
    setUrgency:  (newUrgency: EUrgency) =>
        set(() => ({ urgency: newUrgency })),
    fileOrColorProof: EFileOrColorProof.FILE,
    setFileOrColorProof:  (newFileOrColorProof: EFileOrColorProof) =>
        set(() => ({ fileOrColorProof: newFileOrColorProof })),
    file: EFile.PREPRESS,
    setFile:  (newFile: EFile) =>
        set(() => ({ file: newFile })),
    colorProof: EColorProof.PHOTO,
    setColorProof:  (newColorProof: EColorProof) =>
        set(() => ({ colorProof: newColorProof })),
    customer: ECustomer.INDIVIDUAL,
    setCustomer:  (newCustomer: ECustomer) =>
        set(() => ({ customer: newCustomer })),
    fullName: {
        firstName: '',
        secondName: '',
        sername: '',
    },
    setFullName:  (newFullName: IFullname) =>
        set(() => ({ fullName: newFullName })),
    contacts: {
        zipcode: 0,
        city: '',
        street: '',
        house: 0,
        flat: 0,
        comment: '',
        phone: 0,
        rawData: '',
    },
    setContacts:  (newContacts: IContacts) =>
        set(() => ({ contacts: newContacts })),
    shipment: EShipment.PEACES,
    setShipment:  (newShipment: EShipment) =>
        set(() => ({ shipment: newShipment })),
    shipmentSize: 0,
    setShipmentSize:  (size: number) =>
        set(() => ({ shipmentSize: size })),
    roll: {
        diameter: 0,
        direction: 'вверх',
        quantity: 0,
    },
    setRoll:  (newRoll: IRoll) =>
        set(() => ({ roll: newRoll })),
    packaging: EPackaging.CARTOON,
    setPackaging:  (newPackaging: EPackaging) =>
        set(() => ({ packaging: newPackaging })),
    delivery: EDelivery.CLIENT,
    setDelivery:  (newDelivery: EDelivery) =>
        set(() => ({ delivery: newDelivery })),
  }))


type OrderStore = ReturnType<typeof createOrderStore>
const OrderContext = createContext<OrderStore>(createOrderStore())

export const useOrderStore = () => {
  const api = useContext(OrderContext)
  return {
    order: useStore(api, (state: IOrderStore) => state.order),
    setOrder: useStore(api, (state: IOrderStore) => state.setOrder),
    material: useStore(api, (state: IOrderStore) => state.material),
    setMaterial: useStore(api, (state: IOrderStore) => state.setMaterial),
    polypropylenType: useStore(api, (state: IOrderStore) => state.polypropylenType),
    setPolypropylenType: useStore(api, (state: IOrderStore) => state.setPolypropylenType),
    specialType: useStore(api, (state: IOrderStore) => state.specialType),
    setSpecialType: useStore(api, (state: IOrderStore) => state.setSpecialType),
    paperType: useStore(api, (state: IOrderStore) => state.paperType),
    setPaperType: useStore(api, (state: IOrderStore) => state.setPaperType),
    glue: useStore(api, (state: IOrderStore) => state.glue),
    setGlue: useStore(api, (state: IOrderStore) => state.setGlue),
    colorType: useStore(api, (state: IOrderStore) => state.colorType),
    setColorType: useStore(api, (state: IOrderStore) => state.setColorType),
    color: useStore(api, (state: IOrderStore) => state.color),
    setColor: useStore(api, (state: IOrderStore) => state.setColor),
    size: useStore(api, (state: IOrderStore) => state.size),
    setSize: useStore(api, (state: IOrderStore) => state.setSize),
    numbers: useStore(api, (state: IOrderStore) => state.numbers),
    setNumbers: useStore(api, (state: IOrderStore) => state.setNumbers),
    coating: useStore(api, (state: IOrderStore) => state.coating),
    setCoating: useStore(api, (state: IOrderStore) => state.setCoating),
    additional: useStore(api, (state: IOrderStore) => state.additional),
    setAdditional: useStore(api, (state: IOrderStore) => state.setAdditional),
    varnish: useStore(api, (state: IOrderStore) => state.varnish),
    setVarnish: useStore(api, (state: IOrderStore) => state.setVarnish),
    embossingColor: useStore(api, (state: IOrderStore) => state.embossingColor),
    setEmbossingColor: useStore(api, (state: IOrderStore) => state.setEmbossingColor),
    urgency: useStore(api, (state: IOrderStore) => state.urgency),
    setUrgency: useStore(api, (state: IOrderStore) => state.setUrgency),
    fileOrColorProof: useStore(api, (state: IOrderStore) => state.fileOrColorProof),
    setFileOrColorProof: useStore(api, (state: IOrderStore) => state.setFileOrColorProof),
    file: useStore(api, (state: IOrderStore) => state.file),
    setFile: useStore(api, (state: IOrderStore) => state.setFile),
    colorProof: useStore(api, (state: IOrderStore) => state.colorProof),
    setColorProof: useStore(api, (state: IOrderStore) => state.setColorProof),
    customer: useStore(api, (state: IOrderStore) => state.customer),
    setCustomer: useStore(api, (state: IOrderStore) => state.setCustomer),
    fullName: useStore(api, (state: IOrderStore) => state.fullName),
    setFullName: useStore(api, (state: IOrderStore) => state.setFullName),
    contacts: useStore(api, (state: IOrderStore) => state.contacts),
    setContacts: useStore(api, (state: IOrderStore) => state.setContacts),
    shipment: useStore(api, (state: IOrderStore) => state.shipment),
    setShipment: useStore(api, (state: IOrderStore) => state.setShipment),
    shipmentSize: useStore(api, (state: IOrderStore) => state.shipmentSize),
    setShipmentSize: useStore(api, (state: IOrderStore) => state.setShipmentSize),
    roll: useStore(api, (state: IOrderStore) => state.roll),
    setRoll: useStore(api, (state: IOrderStore) => state.setRoll),
    packaging: useStore(api, (state: IOrderStore) => state.packaging),
    setPackaging: useStore(api, (state: IOrderStore) => state.setPackaging),
    delivery: useStore(api, (state: IOrderStore) => state.delivery),
    setDelivery: useStore(api, (state: IOrderStore) => state.setDelivery),
  }
   
}

export const OrderProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const userProfileStoreRef = useRef<OrderStore>()
  if (!userProfileStoreRef.current) {
    userProfileStoreRef.current = createOrderStore()
  }
  return (
    <OrderContext.Provider value={userProfileStoreRef.current}>
      {children}
    </OrderContext.Provider>
  )
}
