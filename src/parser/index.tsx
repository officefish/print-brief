import { 
    ECoating,
    EColorType,
    EGlue,
    EMaterial, 
    EOrder, 
    EPaperType, 
    EPolypropylenType, 
    ESpecialType,
    ISize, 
    IExportData, 
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
    EPackaging,
    EDelivery
} from "../types"
interface IMaterialOptions {
    material: EMaterial
    polypropylenType?: EPolypropylenType
    specialType?: ESpecialType
    paperType?: EPaperType
}

interface IAdditionalOptions {
    additional: EAdditional,
    varnish: EVarnish,
    embossingColor: number
}


interface IFileOrProofOptions {
    fileOrColorProof: EFileOrColorProof
    file?: EFile
    colorProof?: EColorProof
}


export class Parser {
    private _str: string
  constructor(data: IExportData) {
    this._str = ''
    this._str += `Заказ: ${this.orderToString(data.order)}.\n`
    this._str += `Материал: ${this.materialToString({
        material: data.material,
        polypropylenType: data.polypropylenType,
        specialType: data.specialType,
        paperType: data.paperType
    })}.\n`
    this._str += `Клей: ${this.glueToString(data.glue)}.\n`
    this._str += `Цвет: ${this.colorToString(data.colorType, data.color)}.\n`
    this._str += `Покрытие: ${this.coatingToString(data.coating)}.\n`
    this._str += `Размер: ${this.sizeToString(data.size)}.\n`
    this._str += `Количество: ${data.numbers}.\n`
    this._str += `Дополнительно: ${this.additionalToString({
        additional: data.additional,
        varnish: data.varnish,
        embossingColor: data.embossingColor
    })}.\n`
    this._str += `Срочность: ${this.urgencyToString(data.urgency)}.\n`
    this._str += `Файл/цвет: ${this.fileOrColorProof({
        fileOrColorProof: data.fileOrColorProof,
        file: data.file,
        colorProof: data.colorProof
    })}.\n`
    this._str += `Заказчик: ${this.customerToString(data.customer)}.\n`
    this._str += `Контактное лицо: ${this.personToString(data.fullName)}.\n`
    this._str += `Адрес: ${this.addressToString(data.contacts)}.\n`
    this._str += `Отгрузка: ${this.shipmentToString(data.shipment, data.shipmentSize)}.\n`
    this._str += `Упаковка: ${this.packagingToString(data.packaging)}.\n`
    this._str += `Доставка: ${this.deliveryToString(data.delivery)}.\n`
  }

  private orderToString(order: EOrder): string {
    switch(order) {
        case EOrder.SAMPLE: return 'Образцы'
        case EOrder.SERIE: return 'Тираж'
        default: return 'Неизвестно'
    }
  }

  
  private materialToString(options: IMaterialOptions): string {
    const {material, polypropylenType, specialType, paperType } = options

    let additional = ''
    if(material === EMaterial.POLYPROPYLEN) {
        additional = polypropylenType === EPolypropylenType.TRANSPARENT ? 'Прозрачный' : 'Белый'
    }

    if(material === EMaterial.SPECIAL) {
        additional = specialType === ESpecialType.METALIC ? 'Металлизировання' : 'Пломбовая'
    }

    if(material === EMaterial.PAPER) {
        if (paperType === EPaperType.TERMOECO) {
            additional = 'Термоэко'
        } else if (paperType === EPaperType.TERMOTOP) {
            additional = 'Термотоп'
        } else if (paperType === EPaperType.SEMIGLOSS) {
            additional = 'Полуглянец'
        }
    }

    switch(material) {
        case EMaterial.POLYPROPYLEN: return `Полипропилен. ${additional}`
        case EMaterial.SPECIAL: return `Специализированные материалы. ${additional}`
        case EMaterial.PAPER: return `Бумага. ${additional}`
        default: return 'Неизвестно'
    }
  }

  private glueToString(glue: EGlue): string {
    switch(glue) {
        case EGlue.ACRILLIC: return 'Акрил'
        case EGlue.RUBBER: return 'Каучук'
        default: return 'Неизвестно'
    }
  }

  private sizeToString(size: ISize): string {
    return `${size.width}x${size.height}`
  }

  private colorToString(colorType: EColorType, color?: number): string {
    switch(colorType) {
        case EColorType.FULL: return 'Полноцвет'
        case EColorType.WHITE: return 'Белый'
        case EColorType.SINGLE: return `Одиночный. #${color?.toString(16).padStart(2, '0')}`
        default: return 'Неизвестно'
    }
  }

  private coatingToString(coating: ECoating): string {
    switch(coating) {
        case ECoating.MATTE: return 'Матовое'
        case ECoating.GLOSS: return 'Глянцевое'
        default: return 'Неизвестно'
    }
  }

  private additionalToString(options: IAdditionalOptions): string {
    const {additional, varnish, embossingColor } = options

    let innerAdditional = ''
    if(additional === EAdditional.VARNISH) {
        innerAdditional = varnish === EVarnish.CONTINUOUS ? 'сплошное' : 'выборочное'
    }

    if(additional === EAdditional.EMBOSSING) {
        innerAdditional = `Цвет фольги: ${embossingColor.toString(16).padStart(2, '0')}`
    }

    switch(additional) {
        case EAdditional.VARNISH: return `Лак. Покрытие ${innerAdditional}`
        case EAdditional.LAMINATION: return `Ламинация`
        case EAdditional.EMBOSSING: return `Теснение. ${innerAdditional}`
        default: return 'Неизвестно'
    }
  }

  private fileOrColorProof(options: IFileOrProofOptions): string { 
    const {fileOrColorProof, file, colorProof} = options

    let additional = ''
    if(fileOrColorProof === EFileOrColorProof.FILE) {
        switch (file) {
            case EFile.READY: additional = 'Готовый'; break
            case EFile.PREPRESS: additional = 'Предпресс'; break
            case EFile.DESIGN: additional = 'Дизайн'; break
            default: additional = 'Неизвестно'
        }
    }

    if(fileOrColorProof == EFileOrColorProof.COLOR_PROOF) {
        switch (colorProof) {
            case EColorProof.YES: additional = 'Да'; break
            case EColorProof.NO: additional = 'Нет'; break
            case EColorProof.PHOTO: additional = 'Цветопроба'; break
            default: additional = 'Неизвестно'
        }
    }
    switch(fileOrColorProof) {
        case EFileOrColorProof.FILE: return `Файл. ${additional}`
        case EFileOrColorProof.COLOR_PROOF: return `Цветопроба. ${additional}`
        default: return 'Неизвестно'
    }
  }

  private urgencyToString(urgency: EUrgency) :string {
    switch (urgency) {
        case EUrgency.CHEAP: return 'Не срочно. 7-10 дней'
        case EUrgency.STANDART: return 'Среднесрочно. 3-5 дней'
        case EUrgency.URGENTLY: return 'Срочно. 1-3 дня'
        case EUrgency.EXTRA: return 'Сверхсочно. 12 часов +'
        default: return 'Неизвестно'
    }
  }

  private customerToString(customer: ECustomer) {
    switch (customer) {
        case ECustomer.INDIVIDUAL: return 'Физ. лицо'
        case ECustomer.ORGANIZATION: return 'Юр. лицо'
        default: return 'Неизвестно'
    }
  }

  private personToString(person: IFullname) {
    return `${person.sername} ${person.firstName} ${person.secondName}`
  }

  private addressToString(address: IContacts) {
    return `Индекс :${address.zipcode}. ${address.rawData}.\nТелефон: ${address.phone}`
  }

  private shipmentToString(shipment: EShipment, size: number) {
    switch (shipment) {
        case EShipment.PEACES: return `В листы. Размер листа:${size}`
        case EShipment.ROLL: return `В рулоны`
        default: return 'Неизвестно'
    }
  }

  private packagingToString(packaging: EPackaging): string {
    switch (packaging) {
        case EPackaging.STRETCH: return 'В стрейч'
        case EPackaging.CARTOON: return 'В картон'
        case EPackaging.PALLETE: return 'На палету'
        default: return 'Неизвестно'
    }
  }

  private deliveryToString(delivery: EDelivery): string {
    switch (delivery) {
        case EDelivery.SELF: return 'Самовывозом'
        case EDelivery.CLIENT: return 'Курьером клиента'
        case EDelivery.SERVICE: return 'Службой доставки'
        default: return 'Неизвестно'
    }
  }


  toString() {
    return this._str
  }
}