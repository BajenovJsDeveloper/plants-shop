import React from 'react'
import styled from 'styled-components'

export const InputField = ({ data, inputHandler }) => {
  return (
    <FieldConatiner>
      <LabelText>{data.title}</LabelText>
      <TextInputField
        value={data.value}
        onChangeText={(value) => inputHandler(value, data.name)}
        placeholder={data.placeholder}
        secureTextEntry={data.isPassword}
        error={data.errmsg}
      />
      {!!data.errmsg && <ErrorText numberOfLines={1}>{data.errmsg}</ErrorText>}
    </FieldConatiner>
  )
}

const FieldConatiner = styled.View`
  margin-bottom: 10px;
`
const TextInputField = styled.TextInput`
  border: ${(prop) => (!prop.error ? '1px solid #045c41' : '2px solid #ec1022')};
  border-radius: 50px;
  padding: 5px 20px;
`
const LabelText = styled.Text`
  margin-bottom: 10px;
  color: #037253;
  font-weight: bold;
`
const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  padding: 10px 0;
`
