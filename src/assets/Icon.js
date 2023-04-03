import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PlayIcon = ({ size = 24, color = 'white', ...props }) => (
    <View style={[styles.container, { width: size, height: size }]}>
        <Svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <Path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <Path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </Svg>
    </View>
);
const RefreshIcon = ({ size = 24, color = 'white', ...props }) => (
    <View style={[styles.container, { width: size, height: size }]}>
        <Svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <Path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </Svg>
    </View>
);

const DownloadIcon = ({ size = 24, color = 'white', ...props }) => (
        <View style={[styles.container, { width: size, height: size }]}>
            <Svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
            </Svg>
        </View>
    );

    const SearchIcon = ({ size = 24, color = 'white', ...props }) => (
        <View style={[styles.container, { width: size, height: size }]}>
            <Svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </Svg>
        </View>
    );

    const Search2Icon = ({ size = 24, color = 'white', ...props }) => (
        <View style={[styles.container, { width: size, height: size }]}>
            <Svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <Path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </Svg>
        </View>
    );


    const PauseIcon = ({ size = 24, color = 'white', ...props }) => (
        <View style={[styles.container, { width: size, height: size }]}>
            <Svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <Path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </Svg>
        </View>
    );

    const ScreenshotIcon = ({ size = 24, color = 'white', ...props }) => (
        <View style={[styles.container, { width: size, height: size }]}>
            <Svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <Path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </Svg>
        </View>
    );

    const CloseIcon = ({ size = 24, color = 'white', ...props }) => (
        <View style={[styles.container, { width: size, height: size }]}>
            <Svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <Path d="M6 18L18 6M6 6l12 12" />
            </Svg>
        </View>
    );


    const ShareIcon = ({ size = 24, color = 'white', ...props }) => (
        <View style={[styles.container, { width: size, height: size }]}>
            <Svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <Path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <Polyline points="16 6 12 2 8 6" />
                <Line x1="12" y1="2" x2="12" y2="15" />
            </Svg>
        </View>
    );


    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    export { PlayIcon, RefreshIcon, DownloadIcon, Search2Icon, SearchIcon, PauseIcon, ScreenshotIcon, CloseIcon, ShareIcon };