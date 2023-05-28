const GIVE_MESSAGE = "GIVE-MESSAGE"
const RECEIVE_MESSAGE = 'RECEIVE-MESSAGE'

let initialState = {
    messages: [
        {id: 1, message: "Hi, I`m Alex"},
        {id: 2, message: "Hi, I`m Mike"},
        {id: 3, message: "Hi, I`m Viktor"},
        {id: 4, message: "Hi, I`m Svetlana"},
    ],
    dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Mike"},
        {id: 3, name: "Viktor"},
        {id: 4, name: "Svetlana"}
    ],
    sendMes: "Write somehere!"
}

const dialogReducer = (state = initialState, action) => {


    switch (action.type) {
        case GIVE_MESSAGE: {
            let body = state.sendMes
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                sendMes: ''
            }
        }

        case RECEIVE_MESSAGE: {
            return {
                ...state,
                sendMes: action.text
            }

        }
        default:
            return state

    }
}
export const giveMessageActionCreator = () => ({type: GIVE_MESSAGE})
export const receiveMessageActionCreator = (text) => ({type: RECEIVE_MESSAGE, text: text})

export default dialogReducer;