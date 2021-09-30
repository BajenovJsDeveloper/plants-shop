import React from "react"
import styled from "styled-components"

export const ButtonSubmit = ({top, submit}) => {

  return (
    <ButtonContainer top={top} onPress={submit}>
      <ButtonText>LogIn</ButtonText>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 100px;
  background-color: #089c77;
  margin-top: ${prop => prop.top? prop.top + "px" : 0};
`
const ButtonText = styled.Text`
  text-align: center;
  color: white;
  font-size: 20px;
`