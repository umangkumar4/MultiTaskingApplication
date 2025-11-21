import todoType from '../types/todoTypes';
let initialState = [{
        itemName : 'Mangoes',
        unit : 'kilogram',
        quantity : 1
    }];

const todoReducer = ( state = initialState, action ) => {
switch (action.type) {
    case todoType.ADD_ITEM_TO_TODO:
        return [...state, action.payload];

    case todoType.UPDATE_TODO_ITEM:
        return state.map((item) => {
            if(item.id === action.payload.id){
                return {...action.payload};
            }
            return item;
        })

    case todoType.REMOVE_ITEM_FROM_TODO:
        return state.filter( (item) => item.id !== action.payload );

    default:
        return state;
}
}

export default todoReducer;