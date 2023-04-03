import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { get, QuranVerse } from './api';
import axios from 'axios';
import images from './assets/images';

const useQuranVerse = () => {
    const [ayahNumber, setAyahNumber] = useState(Math.floor(Math.random() * 6236) + 1)
    const [verse, setVerse] = useState<QuranVerse | null>(null);
    const [englishVerse, setEnglishVerse] = useState<QuranVerse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [imageSource, setImageSource] = useState(images.bb)
    const [prevImageSource, setPrevImageSource] = useState(null)

    useEffect(() => {
        const fetchNewVerse = async () => {
            setLoading(true)
            //to prevent server caching of old verses
            let { data: englishVerse, success: englishVerseSuccess } = await get<QuranVerse>(`${ayahNumber}/en.sahih`)
            let { data: arabicVerse, success: arabicVerseSuccess } = await get<QuranVerse>(`${ayahNumber}/ar.hudhaify`)
            setLoading(false)
            getRandomImage()
            if (englishVerseSuccess && arabicVerseSuccess) {
                setEnglishVerse(englishVerse)
                setVerse(arabicVerse)
            } else {
                Alert.alert("Error getting a new verse")
            }
        }

        fetchNewVerse()
    }, [ayahNumber]);

    function getRandomImage(): any {
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

    const fetchVerse = () => {
        setAyahNumber(Math.floor(Math.random() * 6236) + 1)
    }

    return { verse, englishVerse, fetchVerse, loading, error, imageSource };
};

export default useQuranVerse;