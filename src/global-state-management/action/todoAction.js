import todoTypes from '../types/todoTypes';

const addItemToTodo = (item) =>{
    return {
        type: todoTypes.ADD_ITEM_TO_TODO,
        payload : item
    }
}

const updateItemFromTodo = (item) => {
    return {
        type : todoTypes.UPDATE_TODO_ITEM,
        payload : item,
    }
}

const removeItemFromTodo = (item) =>{
    return {
        type : todoTypes.REMOVE_ITEM_FROM_TODO,
        payload : item  
    }
}

export default {
    addItemToTodo,
    updateItemFromTodo,
    removeItemFromTodo
}