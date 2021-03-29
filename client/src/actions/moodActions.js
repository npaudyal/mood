import {EMOJI, KEYWORDS,  CLEAR_MOOD, CAM} from './types'

export const emojiState = (emojiValue) => {
    return {
        type: EMOJI,
        payload:emojiValue
    }
}

export const keyword = (keywordValue) => {
    return {
        type: KEYWORDS,
        payload: keywordValue
    }
}

export const cam = (fromCam) => {
    return {
        type: CAM,
        payload: fromCam
    }
}


export const clearMood = () => {
    return {
        type:CLEAR_MOOD
    }
}