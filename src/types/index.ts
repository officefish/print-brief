export enum EOrder {
    SAMPLE,
    SERIE
}

export enum EMaterial {
    POLYPROPYLEN,
    PAPER,
    SPECIAL
}

export enum EPolypropylenType {
    WHITE,
    TRANSPARENT
}

export enum ESpecialType {
    METALIC,
    LEADING,
}

export enum EPaperType {
    TERMOECO,
    TERMOTOP,
    SEMIGLOSS
}

export enum EGlue {
    ACRILLIC,
    RUBBER
}

export enum EColorType {
    WHITE,
    FULL,
    SINGLE,
}

export enum ECoating {
    MATTE,
    GLOSS
}

export enum EAdditional {
    VARNISH,
    LAMINATION,
    EMBOSSING
}

export enum EVarnish {
    CONTINUOUS,
    SELECTIVE
}

export enum EUrgency {
    CHEAP,
    STANDART,
    URGENTLY,
    EXTRA
}

export enum EFileOrColorProof {
    FILE,
    COLOR_PROOF
} 

export enum EFile {
    READY,
    PREPRESS,
    DESIGN
}

export enum EColorProof {
    YES,
    NO,
    PHOTO
}

export enum ECustomer {
    INDIVIDUAL,
    ORGANIZATION
}

export enum EShipment {
    PEACES,
    ROLL
}

export enum EPackaging {
    STRETCH,
    CARTOON,
    PALLETE
}

export enum EDelivery {
    SELF,
    CLIENT,
    SERVICE
}

export interface ISize {
    width: number
    height: number
}

export interface IFullname {
    firstName: string
    secondName: string
    sername: string
}

export interface IContacts {
    zipcode: number
    city?: string
    street?: string
    house?: number
    flat?: number
    comment?: string
    phone?: number
    rawData?: string
}

export interface IRoll {
    diameter: number
    direction: string
    quantity: number
}

export interface IExportData {
    order: EOrder
    material: EMaterial
    polypropylenType?: EPolypropylenType
    specialType?: ESpecialType
    paperType?: EPaperType
    glue: EGlue
    colorType: EColorType
    color?: EColorType
    size: ISize
    numbers: number
    coating: ECoating
    additional: EAdditional
    varnish: EVarnish
    embossingColor: number
    urgency: EUrgency
    fileOrColorProof: EFileOrColorProof
    file?: EFile
    colorProof?: EColorProof
    customer: ECustomer
    fullName: IFullname
    contacts: IContacts
    shipment: EShipment
    shipmentSize: number
    roll: IRoll
    packaging: EPackaging
    delivery: EDelivery
}