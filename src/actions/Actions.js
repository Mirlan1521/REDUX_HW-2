import {types} from "../types";


export const sayHelloAction =(text) =>{

    return{
        type: types.SAY_HELLO,
        payload: text
    }
}


export const clearTextAction =(user) =>{

    return{
        type: types.CLEAR_TEXT,
        payload: user
    }
}

export const createUserAction =(user) =>{

    return{
        type: types.CREATE_USER,
        payload: user
    }
}

export const  addNameAction = (name) =>{
    return{
        type: types.ADD_NAME,
        payload: name
    }
}
export const  clearNameAction = (clear) =>{
    return{
        type: types.CLEAR_INPUT,
        payload: clear
    }
}