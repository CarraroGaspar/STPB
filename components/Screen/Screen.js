import React, { useEffect } from 'react'
import { View, ImageBackground } from 'react-native'
import GridRow from '../Grid/GridRow';

export default function Screen({header, body}) {
    return <View style={{display:"flex", flex:1,flexDirection:"column"}}>
        {header}
        {body}
    </View>
}

/**
 * Los componentes del header seran centrados vertical y horizontalmente por defecto.
 * 
 * Se asume que siempre se pasara un header. Este tendra 2 espacios asignados por defecto.
 * En el caso de que no se pasen parametros de body o footer se creara una vista vacia con 2 espacios debajo del header para mantener siempre el mismo tamaño del header.
 * En caso de que se pase un body y no un footer, este tendra 2 espacios asignados. En caso de que se pase un footer y no un body lo mismo.
 * En el caso de que se pase body y footer se le asignara un carto de espacio a cada uno.
 */
function ScreenHeader({leftHeader, midHeader, rightHeader, body, leftFooter, midFooter, rightFooter}) {
    const headerIsDefined = leftHeader || midHeader || rightHeader
    const bodyIsDefined = body
    const footerIsDefined = leftFooter || midFooter || rightFooter

    let header = undefined
    if (headerIsDefined) {
        header = <GridRow cells={[
            {size: 1, component: leftHeader}, 
            {size: 3, component: midHeader}, 
            {size: 1, component: rightHeader}]} 
            style={{flex:2, alignItems: "center"}}
        />
    }

    const spacesOfHeaderBottom = bodyIsDefined && footerIsDefined ? 1 : 2

    let mid = undefined
    if (bodyIsDefined) {
        mid = <View style={{flex: spacesOfHeaderBottom}}>
            {body}
        </View>
    }

    let footer = undefined
    if (footerIsDefined) {
        footer = <GridRow cells={[
            {size: 1, component: leftFooter}, 
            {size: 3, component: midFooter}, 
            {size: 1, component: rightFooter}]} 
            style={{flex:spacesOfHeaderBottom}}
        />
    }

    let emptyView = undefined
    if (!(bodyIsDefined || footerIsDefined)) {
        emptyView = <View style={{flex: 2}}>
            </View>
    }


    return <View style={{display: "flex", flex: 1, flexDirection:"column"}}>
        <ImageBackground source={require("../../assets/Header.jpg")} style={{resizeMode: "cover", flex:1}}>
            {/*Header*/}
            {header}
            {emptyView}
            {/*Body*/}
            {mid}
            {/*Footer*/}
            {footer}
        </ImageBackground>
    </View>
}

function ScreenBody() {
    return <View style={{flex:3, marginTop:-22, borderTopLeftRadius: 22, borderTopRightRadius: 22, backgroundColor: "white"}}></View>
}


const styles = {
    row1: {
        flex: 2
    }
}

export { ScreenHeader, ScreenBody }