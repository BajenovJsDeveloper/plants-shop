import React from "react"
import styled from "styled-components"

export const HeaderBar = ({ title, color = 'black' }) => {
  return (
    <Container>
      <Title numberOfLines={1} color={color}>{title}</Title>
    </Container>
  )
}

const Container = styled.View`
  height: 60px;
  background-color: white;
  opacity: 0.7;
  justify-content: center;
`
const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.color}
`