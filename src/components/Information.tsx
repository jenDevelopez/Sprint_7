import { ButtonInfo, InfoIcon } from "../styles/StyledComponents";
import { InformationProps } from "../types";

export default function Information({onClick}:InformationProps) {
  return (
    <ButtonInfo onClick={onClick}>
      <InfoIcon src="../../public/info.svg" />
    </ButtonInfo>
  )
}
