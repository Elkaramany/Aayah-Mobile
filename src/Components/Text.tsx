import React from 'react';
import { Text, TextStyle, ViewStyle, View } from 'react-native';
import { scale } from 'react-native-size-matters';

interface Props {
    str: string | undefined
    style?: TextStyle | ViewStyle | (TextStyle & ViewStyle),
    big?: boolean
    bigger?: boolean
    biggest?: boolean
}

const RegText: React.FC<Props> = ({ str, style, big }) => {

    const getSizeOfFont = () => {
        if (big === true) {
            if (str && str?.length > 1000) return scale(11)
            if (str && str?.length > 750) return scale(14)
            return scale(17)
        } else return scale(14)
    }

    return (
        <Text style={[{ fontSize: getSizeOfFont(), textAlign: 'center', color: 'white', flexWrap: 'wrap' }, style]}>
            {str}
        </Text>
    )
}

export default RegText