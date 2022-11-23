import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EnumScreenTypes, RootTabScreenProps } from '../../types'

export default function RoomScreen({
  navigation,
  route,
}: RootTabScreenProps<EnumScreenTypes.Room>) {
  return (
    <View>
      <Text>Room</Text>
    </View>
  )
}


const styles = StyleSheet.create({})