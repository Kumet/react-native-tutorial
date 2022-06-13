import { View, Text } from 'react-native'
import React, {FC, useEffect, useState} from 'react'
import tw from 'tailwind-rn'
import { FontAwesome } from '@expo/vector-icons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParmsList } from '../types/types'
import { Button, Input } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import {
    increment,
    decrement,
    addByPayload,
    selectCount
} from '../slices/counterSlice'


type Props = NativeStackScreenProps<RootStackParmsList, 'ReduxTK'>

export const ReduxTKScreen: FC<Props> = ({ navigation }) => {
    const [amount, setAmount] = useState('0')
    
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

    const incrementAmount = Number(amount) || 0

    useEffect(() => {
        console.log('mounted ReduxTSK')
        return () => {
            console.log('un-mounted ReduxTSK')
        }
    }, [])

    return (
        <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>ReduxTK {count}</Text>
            <View style={tw('my-3')}>
                <Button
                    title='Go to FlexBox'
                    onPress={() => navigation.navigate('FlexBox')}
                />
            </View>
            <View style={tw('my-1')}>
                <Button title='increment' onPress={()=> dispatch(increment())}/>
            </View>
            <View style={tw('my-1')}>
                <Button title='decrement' onPress={()=> dispatch(decrement())}/>
            </View>
            <Input
                autoCompleteType={undefined}
                placeholder='type add number'
                leftIcon={<FontAwesome name='pencil' size={24} color='gray' />}
                value={amount}
                onChangeText={(txt: string) => setAmount(txt)}
            />
            <View style={tw('my-1')}>
                <Button
                    title='increment by amount'
                    onPress={() => {
                        dispatch(addByPayload(incrementAmount))
                        setAmount('0')
                    }}
                />
            </View>
            
        </View>
  )
}

