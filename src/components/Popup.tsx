import { PopupProps } from '../types'

export default function Popup({content}:PopupProps) {
  return (
    
      <div className='info-container'>
          {content}
      </div>
    
  )
}
