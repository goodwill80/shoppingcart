const CartReducer = (state, action) => {
    const { products, isLoading, value, total } = state;

    switch(action.type) {
        
        case "CLEAR_CART":
            return {...state, products: []};

        case "REMOVE":
            const newProducts = products.filter((product)=> product.id !== action.payload);
            return {...state, products: newProducts };

        case "INCREASE":
            const increased = products.map((product)=> product.id === action.payload ?
            {...product, amount: product.amount++ } : product)
            return { ...state, products: increased }

        case "DECREASE":
            const search = products.find((product)=> product.id === action.payload);
            if(search.amount <= 0) {
                return { ...state, products: products.filter((product)=> product.id !== action.payload)}
            }
            const decreased = products.map((product)=> product.id === action.payload ?
            {...product, amount: product.amount--} : product)
            return { ...state, products: decreased }
        
        case "GET_TOTAL":
            const numCount = products.reduce((total, item)=> total + item.amount, 0);
            const valueCount = products.reduce((total, item)=> total + (item.price * item.amount), 0);
            return { ...state, value: valueCount, total: numCount}

        case "LOADING":
            return { ...state, isLoading: true };
        
        case "STOP_LOADING":
            return { ...state, isLoading: false };
        
        case "DISPLAY_ITEMS":
            return { ...state, products: action.payload };
        
        default:
            return state;
    }
}

export default CartReducer;