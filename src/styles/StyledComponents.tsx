import styled from "styled-components";

export const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

`;

export const DivCheckboxContainer = styled.div`
  width: 300px;
  box-shadow: 3px 3px 5px #20c8c3;
  margin: 1rem 0;

`;

export const DivCheckbox = styled.div`
  margin: 1rem 0;
  width: 300px;
  height: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
  padding: .5rem;
`;

export const DivModal = styled.div`
  border: 2px solid #20c8c3;
  margin:1rem .25rem;
  padding: .5rem;
  border-radius: 15px;
  color: white;
`;

export const DivInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin:.5rem 0;
`
export const StyledInput = styled.input`
  margin: 0 .5rem;
  width: 70px;
`

export const StyledButton = styled.button`
  width: 20px;
  background-color: #32d1c9;
  color: #000;
  font-weight: bold;
`
export const DivTotal = styled.div`
  align-self: center;
  font-size: 1.5rem;
  margin: 1rem;
`