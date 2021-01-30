const initialState =  { products: [] }


export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const products = [...state.products]
            // console.log(state.products)
            products.push(action.payload)
            return { ...state, products }
        default:
            return state
    }
}
