import {EMOJI, CAUSE, RESULT} from './types'

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