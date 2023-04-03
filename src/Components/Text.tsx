import React from 'react';
import { Text, TextStyle, ViewStyle, Platform } from 'react-native';
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
            if (str && str?.length > 1000) return Platform.OS === 'ios' ? scale(11) : scale(10);
            if (str && str?.length > 750) return Platform.OS === 'ios' ? scale(14) : scale(12);
            return Platform.OS === 'ios' ? scale(17) : scale(15);
        } else return Platform.OS === 'ios' ? scale(14) : scale(12);
    };

    return (
        <Text style={[{ fontSize: getSizeOfFont(), textAlign: 'center', color: 'white' }, style]}>
            {str}
        </Text>
    )
}

export default RegText