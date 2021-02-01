import { POST_ID, GET_ID } from '../actions/types'

const initialState = {
    UserId: [],
    UserInfo: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ID:
            return {
                ...state,
                UserId: action.payload,
            }
        default:
            return state
    }
}
