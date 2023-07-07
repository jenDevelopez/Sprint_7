import styled from "styled-components";

export const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

`;

export const DivCheckboxContainer = styled.div`
  width: 400px;
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
export const ContainerWellcome = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const StyledWellcome = styled.div`
  width: 600px;
  height: 400px;
  box-shadow: 3px 3px 5px #20c8c3;
  border: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  `

export const ButtonWellcome = styled.a`
  width: 100px;
  background-color: #20c8c3 ;
  box-shadow: 2px 2px 7px #ccc;
  padding: .5rem 1rem;
  font-weight:bold;
  border-radius: 10px;
`
export const ButtonInfo = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const InfoIcon = styled.img`
  width: 20px;
  height: 20px;
`
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`
// export const ContainerPopup = styled.div`
//   width: 40%;
// `

export const ContainerInfo = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid #20c8c3;
  background-color: #bbb;
  border-radius: 20px;
  padding: .5rem;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 30%;
  left:35%
`