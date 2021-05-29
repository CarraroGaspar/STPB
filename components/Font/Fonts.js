import React from 'react'
import { Text } from 'react-native'

export const Title = ({children}) => {
    return <Text style={{color:"white", fontWeight:"bold", fontSize:22}}>{children}</Text>
}