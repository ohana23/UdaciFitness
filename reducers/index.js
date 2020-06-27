import { RECEIVE_ENTRIES, ADD_ENTRY } from '../actions'
import { ActionSheetIOS } from 'react-native'

function entries(state={}, action) {
    switch (action.type) {
        case RECEIVE_ENTRIES:
            return {
                ...state,
                ...action.entries // merge all entries onto the empty state
            }
        case ADD_ENTRY:
            return {
                ...state,
                ...action.entry, // merge this entry onto the state
            }
        default:
            return state
    }
}

export default entries