import React from 'react'
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { BlurView } from "@react-native-community/blur";
import ViewShot from "react-native-view-shot";

import useQuranVerse from './useQuranVerse'
import { Spinner, Text } from './Components'
import Controls from './Controls'

const { width, height } = Dimensions.get('window')

const App = () => {
  const { verse, englishVerse, loading, fetchVerse, getRandomImage, toggleAudio, isPlaying, imageSource, viewShotRef, captureScreen } = useQuranVerse()

  return (
    <ViewShot style={{ flex: 1 }} ref={viewShotRef}>
      <ImageBackground
        source={imageSource}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          {loading || !verse ?
            <View style={[styles.centered, { flex: 1 }]}>
              <Spinner />
            </View>
            :
            <View style={[{ flex: 1 }, styles.centered]}>
              <View style={{ flex: 1, paddingTop: verticalScale(30) }}>
                <Text str={verse?.surah.name} big />
                <Text str={verse?.surah.englishName} big style={{ paddingVertical: verticalScale(5) }} />
                <Text str={verse?.surah.englishNameTranslation} big />
              </View>

              <View style={[{ flex: 7, }, styles.centered]}>
                <BlurView
                  blurType="light"
                  blurAmount={10}
                  reducedTransparencyFallbackColor="white"
                  style={[{ borderRadius: 10 }, styles.centered]}
                >
                  <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <Text
                      str={verse?.text}
                      big
                      style={{
                        fontWeight: 'bold',
                        paddingVertical: verticalScale(10),
                      }}
                    />
                    <Text str={englishVerse?.text} big />
                  </View>
                </BlurView>
              </View>

              <View style={{ flex: 1 }}>
                <View style={styles.line} />
                <Text str={`${verse?.surah.revelationType} Ayah`} style={{ marginVertical: verticalScale(10) }} />
                <Text str={` - ${verse?.surah?.number}:${verse?.numberInSurah} -`} />
              </View>

              <View style={{ flex: 1 }}>
                <Controls
                  onRefreshPress={fetchVerse}
                  onDownloadPress={captureScreen}
                  onSearchPress={() => { }}
                  onPlayPress={toggleAudio}
                  onScreenshotPress={getRandomImage}
                  isPlaying={isPlaying}
                />
              </View>
            </View>
          }
        </View>
      </ImageBackground>
    </ViewShot>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 5
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: width * 0.5,
    alignSelf: 'center'
  }
})

export default App;