

const LOAD = 'dic/LOAD';
const CREATE = 'dic/CREATE';
const CHECK = 'dic/CHECK';
const UPDATE = 'dic/UPDATE';
const REMOVE = 'dic/REMOVE';



const initialState = {
    list: [{
        name: 'abcd',
        desc: 'desc1',
        exam: 'exam1',
        check: false,
        index: 0
    }, {
        name: 'efgh',
        desc: 'desc2',
        exam: 'exam2',
        check: false,
        index: 1
    }]
}



export function loadDic(dic) {
    console.log('load:', dic)
    return { type: LOAD, dic }
}

export function createDic(dic) {
    return { type: CREATE, dic }
}

export function checkDic(dic) {
    return { type: CHECK, dic }
}

export function updateDic(dic) {
    return { type: UPDATE, dic }
}

export function removeDic(dic) {
    return { type: REMOVE, dic }
}





export const loadDicFB = () => {
    return async function (dispatch) {
        console.log('loadFB')
        dispatch(loadDic())
    }
}

export const addDicFB = (dic) => {
    return async function (dispatch) {

    }
}

export const checkDicFB = (dic) => {
    return async function (dispatch) {
    }
}

export const removeDicFB = (dic) => {
    return async function (dispatch) {
    }
}



export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        
        case LOAD: {
            // state = initialState;
            console.log('rdc-LOAD')
            console.log('state:',state)
            const new_list = state
            return { list: action }
        }
        case CREATE: {
            console.log('rdc-CREATE')
            
        }

        case CHECK: {
            console.log('rdc-CHECK')

        }

        case UPDATE: {
            console.log('rdc-UPDATE')

        }

        case REMOVE: {
            console.log('rdc-REMOVE')

        }
        default: return null
    }
}