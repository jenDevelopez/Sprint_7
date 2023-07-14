import { ContainerInfo } from '../styles/StyledComponents'
import { PopupProps } from '../types'

export default function Popup({content}:PopupProps) {
  return (
    
      <ContainerInfo>
          {content}
      </ContainerInfo>
    
  )
}
