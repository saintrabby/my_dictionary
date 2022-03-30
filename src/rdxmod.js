

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
        index: 1
    }, {
        name: 'efgh',
        desc: 'desc2',
        exam: 'exam2',
        check: false,
        index: 2
    }]
}



export function loadDic() {
    console.log('load:')
    return { type: LOAD }
}

export function addDic(dic) {
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
        console.log('addFB', dic)
        dispatch(addDic(dic))
    }
}

export const checkDicFB = (dic) => {
    return async function (dispatch) {
        console.log('checkFB', dic)
        dispatch(checkDic(dic))
    }
}

export const updateDicFB = (dic) => {
    return async function (dispatch) {
        console.log('updateFB', dic)
        dispatch(updateDic(dic))
    }
}

export const removeDicFB = (dic) => {
    return async function (dispatch) {
        console.log('removeFB', dic)
        dispatch(removeDic(dic))
    }
}



export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case LOAD: {
            // state = initialState;
            console.log('rdc-LOAD')
            console.log('state:', state)
            const new_list = state
            return { list: new_list }
        }
        case CREATE: {
            console.log('rdc-CREATE')
            let new_dic = {
                name: action.dic.name,
                desc: action.dic.desc,
                exam: action.dic.exam,
                check: action.dic.check,
                index: action.dic.index
            }
            const new_list = [...state.list, new_dic]
            console.log(new_list)

            return { list: new_list }
        }

        case CHECK: {
            console.log('rdc-CHECK')
            console.log(action.dic)
            const new_list = state.list.map((v) => {
                if (v.index == action.dic.index) {
                    let new_dic = {
                        ...v, check: !v.check
                    }
                    return new_dic
                }
                return v
            })

            console.log(new_list)

            return { list: new_list }
        }

        case UPDATE: {
            console.log('rdc-UPDATE')
            console.log(action.dic)

            const new_list = state.list.map((v) => {
                if (v.index == action.dic.index) {
                    let new_dic = {
                        ...v,
                        name: action.dic.name,
                        desc: action.dic.desc,
                        exam: action.dic.exam
                    }
                    return new_dic
                }
                else
                    return v
            })
            console.log(new_list)


            return { list: new_list }
        }

        case REMOVE: {
            console.log('rdc-REMOVE')
            console.log(action.dic)
            const new_list = state.list.filter((v) => {
                return v.index != action.dic.index
            })
            console.log(new_list)

            return { list: new_list }
        }
        default: return state
    }
}