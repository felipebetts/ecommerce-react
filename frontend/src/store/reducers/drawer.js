const initialState =  {
    top: false,
    left: false,
    bottom: false,
    right: false,
}
    

    // cart: {
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // },
    // account: {
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // },
    // menu: {
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // }



export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_DRAWER':
            // console.log(action.payload)
            return { ...state }
        default:
            return state
    }
}
