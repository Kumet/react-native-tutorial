import { View, Text } from 'react-native'
import React, {FC, useEffect} from 'react'
import tw from 'tailwind-rn';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParmsList } from '../types/types'
import { Button } from 'react-native-elements'

type Props = NativeStackScreenProps<RootStackParmsList, 'ReduxTK'>

export const ReduxTKScreen: FC<Props> = ({navigation}) => {

    useEffect(() => {
        console.log('mounted ReduxTSK')
        return () => {
            console.log('un-mounted ReduxTSK')
        }
    }, [])

    return (
        <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>ReduxTKScreen</Text>
            <View style={tw('my-3')}>
                <Button
                    title='Go to FlexBox'
                    onPress={() => navigation.navigate('FlexBox')}
                />
            </View>
        </View>
  )
}

