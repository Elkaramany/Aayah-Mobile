import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { Picker } from '@react-native-community/picker';
import { Modal, Text } from './Components'
import { get, QuranVerse } from './api';

import QuranSurahs from './Quran.json'
import { Search2Icon } from './assets/Icon';

interface Props {
    isVisible: boolean
    onClose: (val: number) => void
}

function splitString(str: string): [string, string] {
    const index = str.indexOf('-');
    const first = index === -1 ? str : str.slice(0, index);
    const second = index === -1 ? '' : str.slice(index + 1);
    return [first, second];
}

const SearchModal: React.FC<Props> = ({ isVisible, onClose }) => {
    const [selectedSurah, setSelectedSurah] = React.useState(``)
    const [surahVisible, setSurahVisible] = React.useState(false)
    const [selectedAyah, setSelectedAyah] = React.useState(``)
    const [ayahVisible, setAyahVisible] = React.useState(false)

    const handleValueChange = (val: string) => {
        setSelectedSurah(val);
        setSelectedAyah('')
        setSurahVisible(false);
    };

    const renderPickerSurah = () => {
        return (
            <Picker
                selectedValue={selectedSurah}
                onValueChange={handleValueChange}
                style={{ color: 'white', width: '100%' }}
                itemStyle={{ color: 'white' }}
            >
                {QuranSurahs.map((surah, index) => (
                    <Picker.Item key={index} label={surah.label} value={surah.value} />
                ))}
            </Picker>
        );
    };

    const renderSelectedValueSurah = () => {
        const selectedSurahObj = QuranSurahs.find(
            (surah) => surah.value === selectedSurah
        );
        return (
            <TouchableOpacity style={styles.surahContainer} onPress={() => setSurahVisible(true)}>
                <Text big str={selectedSurahObj?.label || 'Select Surah'} style={{ color: 'black' }} />
            </TouchableOpacity>
        )
    };

    const handleValueChangeAyah = (val: string) => {
        setSelectedAyah(val);
        setAyahVisible(false);
    }


    const renderPickerAyah = () => {
        return (
            <Picker
                selectedValue={selectedSurah}
                onValueChange={handleValueChangeAyah}
                style={{ color: 'white', width: '100%' }}
                itemStyle={{ color: 'white' }}
            >
                {Array.from({ length: Number(splitString(selectedSurah)[1]) }, (_, index) => (
                    <Picker.Item
                        key={index}
                        label={`${index + 1}`}
                        value={`${index + 1}`}
                    />
                ))}
            </Picker>
        );
    };

    const renderSelectedValueAyah = () => {
        return (
            <TouchableOpacity style={styles.surahContainer} onPress={() => setAyahVisible(true)}>
                <Text big str={selectedAyah || 'Select Ayah Number'} style={{ color: 'black' }} />
            </TouchableOpacity>
        )
    };

    const renderAyah = () => {
        if (!surahVisible && selectedSurah.length > 0) return ayahVisible ? renderPickerAyah() : renderSelectedValueAyah()
        else return <View />
    }

    const searchSurahAyah = async () => {
        if (selectedSurah.length > 0 && selectedAyah.length > 0) {
            let { data: selectedVerse, success } = await get<QuranVerse>(`ayah/${splitString(selectedSurah)[0]}:${selectedAyah}/en.sahih`)
            if (success && selectedVerse?.number) onClose(selectedVerse?.number)
        }
    }

    return (
        <Modal isVisible={isVisible} onClose={onClose}>
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image
                        source={require('./assets/images/logo.png')}
                        style={{ width: scale(50), height: 50, resizeMode: 'contain' }}
                    />
                    <Text
                        str='Select Surah and Ayah'
                        big
                    />
                    <View />
                </View>

                <View style={{ alignItems: 'flex-start', marginTop: verticalScale(50) }}>
                    {surahVisible ? renderPickerSurah() : renderSelectedValueSurah()}
                    <View style={{ height: verticalScale(50) }} />
                    {renderAyah()}
                </View>

                <TouchableOpacity
                    onPress={() => searchSurahAyah()}
                    style={styles.searchContainer}>
                    <Search2Icon size={30} color='white' />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    surahContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        padding: scale(10),
        borderRadius: scale(20)
    },
    searchContainer: {
        backgroundColor: '#393d87',
        borderRadius: scale(10),
        padding: scale(10),
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default SearchModal;