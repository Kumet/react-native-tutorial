import { View, Text } from 'react-native'
import React, {FC, useCallback, useEffect, useState} from 'react'
import tw from 'tailwind-rn';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParmsList } from '../types/types'
import { Button, Input } from 'react-native-elements'
import { Child } from '../components/Child';
import { FontAwesome } from '@expo/vector-icons'


type Props = NativeStackScreenProps<RootStackParmsList, 'Hello'>

export const HelloScreen: FC<Props> = ({ navigation }) => {
    const [text, setText] = useState('')
    const [printText, setPrintText] = useState('')

    useEffect(() => {
        console.log('mounted Hello')
        return () => {
            console.log('un-mounted Hello')
        }
    }, [])

    const printMesg = useCallback(() => {
        console.log(`Print: ${printText}`)
    }, [printText])
    
    return (
        <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>HelloScreen</Text>
            <View style={tw('my-3')}>
                <Button
                    title='Go to ReduxTk'
                    onPress={() => navigation.navigate('ReduxTK')}
                />
            </View>
            <Input
                placeholder='type print text'
                autoCompleteType={undefined}
                leftIcon={<FontAwesome name='pencil' size={24} color='gray' />}
                value={text}
                onChangeText={(txt) => setText(txt)}
            />
            <Text>{text}</Text>
            <Input
                placeholder='type print text'
                autoCompleteType={undefined}
                leftIcon={<FontAwesome name='pencil' size={24} color='gray' />}
                value={printText}
                onChangeText={(txt) => setPrintText(txt)}
            />
            <Text>{printText}</Text>
            <Child printMsg={printMesg} />
        </View>
    )
}

