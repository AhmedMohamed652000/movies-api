import { gellAll } from '../types/moviesType'
export const Movies = (state = 'r', action) => {
    if (action.type === gellAll) {
        return  action.data 

    }
    return state
}