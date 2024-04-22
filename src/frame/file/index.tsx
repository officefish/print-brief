import { FC, ReactNode, SyntheticEvent } from "react"

import { EColorProof, EFile, EFileOrColorProof } from "../../types"
import { StyledButton } from "../../styled"

import File from "./file"
import ColorProof from "./colorProof"

interface IOrderOptions {
    value: EFileOrColorProof
    setValue: (value: EFileOrColorProof) => void

    file?: EFile,
    setFile?: (value: EFile) => void
    colorProof?: EColorProof
    setColorProof?: (value: EColorProof) => void
}

const FileOrColor: FC<IOrderOptions> = (options) : ReactNode => {
  const { 
    value, 
    setValue,
    file,
    setFile,
    colorProof,
    setColorProof
} = options

  const onFileClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EFileOrColorProof.FILE)
  }

  const onColorProofClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue(EFileOrColorProof.COLOR_PROOF)
  }

  return (
    <div className="grid grid-cols-5 gap-2 w-full">
      <div className="flex justify-end p-2 pr-4">
        <label className="font-semibold text-lg text-secondary">Файл/цвет:</label>  
      </div>
      <div className="col-span-4 flex justify-start items-start gap-4">
        <StyledButton $active={value === EFileOrColorProof.FILE} onClick={onFileClick}>Файл</StyledButton> 
        <StyledButton $active={value === EFileOrColorProof.COLOR_PROOF} onClick={onColorProofClick}>Цветопроба</StyledButton>
      </div>
      {renderOptional({
        fileOrColor:value,
       file,
       setFile,
       colorProof,
       setColorProof
    })}  
    </div>
  )
}
export default FileOrColor

interface IOptionalSettings {
    fileOrColor: EFileOrColorProof
    file?: EFile
    setFile?: (value: EFile) => void
    colorProof?: EColorProof
    setColorProof?: (value: EColorProof) => void
}

const renderOptional = (options: IOptionalSettings) => {
    switch (options.fileOrColor) {
      case EFileOrColorProof.FILE:
        return <File value={options.file} setValue={options.setFile} />
      case EFileOrColorProof.COLOR_PROOF:
        return <ColorProof value={options.colorProof} setValue={options.setColorProof} />
      default:
        return <></>
    }
}
