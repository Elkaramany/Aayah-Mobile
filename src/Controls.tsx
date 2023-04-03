import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DownloadIcon, PauseIcon, PlayIcon, RefreshIcon, ScreenshotIcon, SearchIcon } from './assets/Icon'

interface Props {
    onRefreshPress: () => void,
    onDownloadPress: () => void,
    onSearchPress: () => void,
    onPlayPress: () => void,
    onScreenshotPress: () => void,
    isPlaying: boolean
}

const size = 32
const color = 'white'

const Controls: React.FC<Props> = ({ onRefreshPress, onDownloadPress, onSearchPress, onPlayPress, onScreenshotPress, isPlaying }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onRefreshPress}>
                <RefreshIcon size={size} color={color} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDownloadPress}>
                <DownloadIcon size={size} color={color} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onSearchPress}>
                <SearchIcon size={size} color={color} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPlayPress}>
                {
                    isPlaying ?
                        <PauseIcon size={size} color={color} />
                        :
                        <PlayIcon size={size} color={color} />
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={onScreenshotPress}>
                <ScreenshotIcon size={size} color={color} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
})

export default Controls;
