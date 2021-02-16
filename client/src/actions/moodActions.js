import {EMOJI, CAUSE, RESULT, CLEAR_MOOD} from './types'

export const emojiState = (emojiValue) => {
    return {
        type: EMOJI,
        payload:emojiValue
    }
}

export const cause = (causeValue) => {
    return {
        type: CAUSE,
        payload: causeValue
    }
}

export const result = (resultValue) => {
    return {
        type: RESULT,
        payload: resultValue
    }
}

export const clearMood = () => {
    return {
        type:CLEAR_MOOD
    }
}