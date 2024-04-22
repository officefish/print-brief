import { FC, ReactNode } from "react"
import Frame1 from "../frame/frame1"
import Frame2 from "../frame/frame2"
import Export from "../export"

// interface IHome {
//     username: string
//     setUsername: (name: string) => void
// }

const Intro: FC = () : ReactNode => {

  return (
    <div  className="flex flex-col items-center justify-center p-8">
      <Frame1 />
      <Frame2 />
      <Export />
    </div>
     
  )
}

export default Intro