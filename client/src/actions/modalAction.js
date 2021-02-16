import {CLICKED, REMOVED} from './types'

export const modal = () => {
    return {
        type: CLICKED
    }
}
export const clearModal = () => {
    return {
        type: REMOVED
    }
}