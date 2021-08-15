import React, { useEffect } from 'react'
import { View, ImageBackground } from 'react-native'

export default function Screen({header, body}) {
    return <View style={{display:"flex", flex:1,flexDirection:"column"}}>
        {header}
        {body}
    </View>
}

function ScreenHeader({children}) {
    return <View style={{display: "flex", flex: 1, flexDirection:"column"}}>
        <ImageBackground source={require("../../assets/Header.jpg")} style={{resizeMode: "cover", flex:1}}>
            {children}
        </ImageBackground>
    </View>
}

function ScreenBody({children, size}) {
    return <View style={{flex:3, marginTop:-22, paddingTop: 22, paddingHorizontal: 10, borderTopLeftRadius: 22, borderTopRightRadius: 22, backgroundColor: "white"}}>
        {children}
    </View>
}

export { ScreenHeader, ScreenBody }