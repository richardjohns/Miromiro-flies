const initialCart = []

export default (cart = initialCart, action) => {
    const newCart = [...cart]
    switch (action.type) {
        case 'ADD_TO_CART':
            newCart.push({
                name: action.name,
                id: action.id,
                quantity: 1
            })
        case 'REMOVE_FROM_CART':
            newCart.shift({
                name: action.name,
                id: action.id,
                quantity: -1
            })
            return newCart
        // or
        // return [...cart, {beerid: action.beerid, quantity: 1}]
        default:
            return cart
    }
}