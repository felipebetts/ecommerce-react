const INITIAL_STATE= {
    list: [{
        name: "Lago",
        price: 99.99,
        imageSrc: "/images/lago.jpg",
        shortDescription: "Um belo Lago",
        category: "Piso",
        _id: 1
    },
    {
        name: "Catedral",
        price: 500.49,
        imageSrc: "/images/catedral.jpg",
        shortDescription: "Catedral no Rio de Janeiro",
        category: "Teto",
        _id: 2
    },
    {
        name: "Noiva",
        price: 29.99,
        imageSrc: "/images/noiva-no-mato.jpg",
        shortDescription: "Ensaio de noiva",
        category: "Parede",
        _id: 3
    },
    {
        name: "Morro",
        price: 12,
        imageSrc: "/images/paoDeAcucar.jpg",
        shortDescription: "Morro do Pão de Açúcar",
        category: "Jardim",
        _id: 4
    }]
}


export default function productsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_PRODUCT_LIST':
            const cart = state.list
            cart.push(action.payload)
            return { ...state, list: action.payload.data}
        default:
            return state
    }
}