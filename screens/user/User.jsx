import { Button, Heading, Text, VStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainLayout } from '../../components/MainLayout'
import { SubmitButton } from '../../components/SubmitButton'
import { logout } from '../../store/user/userReducer'
import { Card } from '../../components/Card'
import { mocData } from '../../store/mocData'

const PlantIMG = require("../../images/plant.jpg")

export function User({ navigation }) {
  const userName = useSelector(state => state.user.username)
  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(logout())
  }

  const linkClick = (item) => {
    navigation.navigate('ReadMore', item)
  } 

  return (
    <MainLayout bgImage={PlantIMG}>
          <Heading fontSize="2xl" color="info.500" textAlign="center" pb={2}>
            Hi, {userName}
          </Heading>
          <VStack p={4}>
            {
              mocData.map(plant => <Card key={plant.id} data={plant} linkClick={linkClick}/>)
            }
          </VStack>
        <SubmitButton mx={4} my={4} title="Log Out" iconName="logout" submit={onSubmit} />
    </MainLayout>
  )
}