import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import RNPickerSelect from '@react-native-picker/picker';
import { Modal, Text } from './Components'

import QuranSurahs from './Quran.json'

interface Props {
    isVisible: boolean
    onClose: () => void
}

const Name: React.FC<Props> = ({ isVisible, onClose }) => {
    return (
        <Modal isVisible={isVisible} onClose={onClose}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                    source={require('./assets/images/logo.png')}
                    style={{ width: scale(50), height: 50, resizeMode: 'contain' }}
                />
                <Text
                    str='Search for an Ayah'
                    big
                />
                <View />
            </View>

            <View style={{ alignItems: 'flex-start', marginTop: verticalScale(20) }}>
                <Text
                    str='Select Surah'
                    big
                />

                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={QuranSurahs}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
})

export default Name;