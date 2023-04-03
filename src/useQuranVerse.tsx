import { useState, useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import { get, QuranVerse, QuranVerseWithAudio } from './api';
import images from './assets/images';
import useAudioPlayer from './useAudio';

const useQuranVerse = () => {
    const [ayahNumber, setAyahNumber] = useState(Math.floor(Math.random() * 6236) + 1)
    const [verse, setVerse] = useState<QuranVerse | null>(null);
    const [englishVerse, setEnglishVerse] = useState<QuranVerse | null>(null);
    const [loading, setLoading] = useState(true);
    const [imageSource, setImageSource] = useState(images.bb)
    const [prevImageSource, setPrevImageSource] = useState(null)
    const viewShotRef = useRef(null);
    const { loadAudio, playAudio, pauseAudio, stopAudio, isPlaying } = useAudioPlayer();

    useEffect(() => {
        return () => stopAudio()
    }, [])

    useEffect(() => {
        const fetchNewVerse = async () => {
            stopAudio()
            setLoading(true)
            //to prevent server caching of old verses
            let { data: englishVerse, success: englishVerseSuccess } = await get<QuranVerse>(`${ayahNumber}/en.sahih`)
            let { data: arabicVerse, success: arabicVerseSuccess } = await get<QuranVerseWithAudio>(`${ayahNumber}/ar.hudhaify?audio=1`)
            setLoading(false)
            if (englishVerseSuccess && arabicVerseSuccess) {
                loadAudio(arabicVerse?.audio)
                getRandomImage()
                setEnglishVerse(englishVerse)
                setVerse(arabicVerse)
            } else {
                Alert.alert("Error getting a new verse")
            }
        }

        fetchNewVerse()
    }, [ayahNumber]);

    const getRandomImage = () => {
        let newImageSource = imageSource; // initialize new image source with the current image source
        while (newImageSource === imageSource || newImageSource === prevImageSource) {
            const keys = Object.keys(images);
            const randomIndex = Math.floor(Math.random() * keys.length);
            //@ts-ignore
            newImageSource = images[keys[randomIndex]];
        }
        setPrevImageSource(imageSource);
        setImageSource(newImageSource);
    }

    const toggleAudio = () => {
        if (isPlaying) {
            pauseAudio()
        } else {
            playAudio()
        }
    }

    const captureScreen = () => {
        viewShotRef.current.capture().then(uri => {
            CameraRoll.saveToCameraRoll(uri);
        });
    }

    const fetchVerse = () => {
        setAyahNumber(Math.floor(Math.random() * 6236) + 1)
    }

    return { verse, englishVerse, fetchVerse, getRandomImage, toggleAudio, isPlaying, loading, imageSource };
};

export default useQuranVerse;