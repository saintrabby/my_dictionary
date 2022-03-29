

const LOAD = 'dic/LOAD';
const CREATE = 'dic/CREATE';
const CHECK = 'dic/CHECK';
const UPDATE = 'dic/UPDATE';
const REMOVE = 'dic/REMOVE';



const initialState = {
    
    list: {
        name: 'abcd',
        desc: 'desc',
        exam: 'exam',
        check: false,
        index: 0
    }
}



export function loadDic(dic) {
    return { type: LOAD, dic }
}

export function createdic(dic) {
    return { type: CREATE, dic }
}

export function checkdic(dic) {
    return { type: CHECK, dic }
}

export function updatedic(dic) {
    return { type: UPDATE, dic }
}

export function removedic(dic) {
    return { type: REMOVE, dic }
}





export const loadDicFB = () => {
    return async function () {
    }
}

export const addDicFB = () => {
    return async function () {
    }
}

export const checkDicFB = () => {
    return async function () {
    }
}

export const removeDicFB = () => {
    return async function () {
    }
}



export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        
        case LOAD: {
            
        }
        case CREATE: {
            
        }

        case CHECK: {

        }

        case UPDATE: {

        }

        case REMOVE: {

        }
        default: return null
    }
}