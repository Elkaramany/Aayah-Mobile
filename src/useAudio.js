import { useState, useEffect } from 'react';
import Sound from 'react-native-sound';

const useAudioPlayer = () => {
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        Sound.setCategory('Playback', true);
    }, []);

    const loadAudio = (audioUri) => {
        if (!audioUri) return;
        if (sound) {
            sound.stop();
            sound.release();
        }

        const newSound = new Sound(audioUri, '', (error) => {
            if (error) {
                console.log('Failed to load sound', error);
            }
        });

        setSound(newSound);
        setIsPlaying(false);
    };

    const playAudio = () => {
        if (!sound) {
            console.log('No audio loaded');
            return;
        }

        sound.play(() => {
            setIsPlaying(false);
        });

        setIsPlaying(true);
    };

    const pauseAudio = () => {
        if (!sound) {
            console.log('No audio loaded');
            return;
        }

        sound.pause();
        setIsPlaying(false);
    };

    const stopAudio = () => {
        if (!sound) {
            console.log('No audio loaded');
            return;
        }

        sound.stop();
        setIsPlaying(false);
    };

    return {
        loadAudio,
        playAudio,
        pauseAudio,
        stopAudio,
        isPlaying,
    };
};

export default useAudioPlayer;
