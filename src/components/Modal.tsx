import { DivInput, DivModal, StyledInput } from "../styles/StyledComponents";
import { inputs } from "../data";
import { ModalProps } from "../types";
import Button from "./Button";
export default function Modal({
  valuePage,
  valueLange,
  handlePageAdd,
  handlePageSubstract,
  handleLanguageAdd,
  handleLanguageSubstract,
  onChangeLanguage,
  onChangePage,
}: ModalProps) {
  return (
    <DivModal>
      <DivInput>
        <label htmlFor={`input-${inputs[0].id}`}>{inputs[0].title}</label>
        <Button content="+" onClick={handlePageAdd} />

        <StyledInput
          id={`input-${inputs[0].id}`}
          type="text"
          value={valuePage}
          onChange={onChangePage}
        />
        <Button content="-" onClick={handlePageSubstract} />
      </DivInput>
      <DivInput>
        <label htmlFor={`input-${inputs[1].id}`}>{inputs[1].title}</label>
        <Button content="+" onClick={handleLanguageAdd} />
        <StyledInput
          id={`input-${inputs[1].id}`}
          type="text"
          value={valueLange}
          onChange={onChangeLanguage}
        />
        <Button content="-" onClick={handleLanguageSubstract} />
      </DivInput>
    </DivModal>
  );
}
