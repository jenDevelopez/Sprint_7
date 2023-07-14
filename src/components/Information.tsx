import { InformationProps } from "../types";

export default function Information({onClick}:InformationProps) {
  return (
    <div className="btn-info" onClick={onClick}>
      <img className="info-icon" src="../../public/info.svg" />
    </div>
  )
}
