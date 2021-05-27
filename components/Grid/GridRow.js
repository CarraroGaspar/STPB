import React from 'react'
import { View } from 'react-native'

//Ver tema de performance porque tiene el map en la funcion lo que proboca que cada vez que se renderice se vuelva a ejecutar
export default function GridRow({cells, style}) {
    const renderCells = cells.map(cell => <View style={{flex: cell.size}}>{cell.component}</View>)

    let styleSize = [styles.row]

    if (style) styleSize.push(style)

    return <View style={styleSize}>
        { renderCells }
    </View>
}

const styles = {
    row: {
        flexDirection: "row",
        flex: 1
    }
}