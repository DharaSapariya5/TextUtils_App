
const initialState = {
    authToken: null,
    // authTokenMail: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                authToken: action.payload,
            }
        case 'MAIL':
            return {
                ...state,
                authToken: action.payload,
            }
        case 'LOGOUT':
            return {
                authToken: null,
                // authTokenMail: null,
            }
        default:
            return state;
    }
}