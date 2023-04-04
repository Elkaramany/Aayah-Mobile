import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    AxiosInstance,
} from "axios";

interface ApiResponse<T> {
    success: boolean;
    data: T | null;
    error: string | null;
}
export interface QuranVerseAudio {
    audio: string;
    audioSecondary: string[];
}

export interface QuranVerse {
    edition: {
        direction: string;
        englishName: string;
        format: string;
        identifier: string;
        language: string;
        name: string;
        type: string;
    };
    hizbQuarter: number;
    juz: number;
    manzil: number;
    number: number;
    numberInSurah: number;
    page: number;
    ruku: number;
    sajda: boolean;
    surah: {
        englishName: string;
        englishNameTranslation: string;
        name: string;
        number: number;
        numberOfAyahs: number;
        revelationType: string;
    };
    text: string;
}

export interface QuranVerseWithAudio extends QuranVerse, QuranVerseAudio {}

// Configure the Axios instance with the base URL
const instance: AxiosInstance = axios.create({
    baseURL: "https://api.alquran.cloud/v1/",
});

// Define the response handler function
const handleResponse = (response: AxiosResponse) => {
    return {
        success: true,
        data: response.data.data,
        error: null,
    };
};

// Define the error handler function
const handleApiError = (error: AxiosError) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return {
            success: false,
            data: null,
            error: error?.response?.data?.message ?? "No response from server",
        };
    } else if (error.request) {
        // The request was made but no response was received
        return {
            success: false,
            data: null,
            error: "No response from the server",
        };
    } else {
        // Something happened in setting up the request that triggered an Error
        return {
            success: false,
            data: null,
            error: error.message,
        };
    }
};

// Add the response interceptor
instance.interceptors.response.use(
    async (response: AxiosResponse) => {
        const { success, data, error } = handleResponse(response);
        return { ...response, data, success };
    },
    async (error: AxiosError) => {
        const { success, data, error: apiError } = handleApiError(error);
        return Promise.reject(apiError);
    }
);

//Add the request interceptor
instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // Add params to the config object
        config.params = {
            audio: true,
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export const get = async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
        const response = await instance.get<T>(url);
        return {
            success: true,
            data: response.data,
            error: null,
        };
    } catch (error) {
        const errorData = error?.response?.data ?? 'An error occurred';
        return {
            success: false,
            data: null,
            error: errorData,
        };
    }
};


export default instance;