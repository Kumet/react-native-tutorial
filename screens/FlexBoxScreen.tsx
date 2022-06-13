import { View, Text } from 'react-native'
import React, {useEffect, FC} from 'react'
import tw from 'tailwind-rn'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParmsList } from '../types/types'
import { Button } from 'react-native-elements'


type Props = NativeStackScreenProps<RootStackParmsList, 'FlexBox'>

export const FlexBoxScreen: FC<Props> = ({navigation}) => {
    useEffect(() => {
        console.log('mounted FlexBox')
        return () => {
            console.log('un-mounted Flexbox')
        }
    }, [])

  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
          <Text>FlexBoxScreen</Text>
          <View style={tw('my-3')}>
                <Button
                    title='Go to Hello'
                    onPress={() => navigation.navigate('Hello')}
                />
            </View>
    </View>
  )
}

