const initialState = {
    cart: []
}

const reducer = (state = initialState, action) => {

    console.log(action)

    switch (action.type) {
        case "add":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case "remove": 
        const itemIndex = state.cart.indexOf(action.payload);
        if (itemIndex !== -1) {
            // Create a new array without the item to remove
            const newCart = [...state.cart.slice(0, itemIndex), ...state.cart.slice(itemIndex + 1)];
            return {
                ...state,
                cart: newCart
            }
        }; return state;
        
        default: return state
    }


}

export default reducer