// widgets.js

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from '../../firebase'

// import { db } from '../../firebase';
// import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
// import { async } from '@firebase/util';

// Actions
const LOAD = 'dic/LOAD';
const CREATE = 'dic/CREATE';
const CHECK = 'dic/CHECK';
const UPDATE = 'dic/UPDATE';
const REMOVE = 'dic/REMOVE';



const initialState = {
    is_loaded: false,
    // list: []
    list: getDocs(collection(db, 'mydicts'))
}

export function loaddic(dic_list) {
    return { type: LOAD, dic_list }
}

export function createdic(mydic) {
    return { type: CREATE, mydic }
}

export function checkdic(mydic) {
    return { type: CHECK, mydic }
}

export function updatedic(mydic) {
    return { type: UPDATE, mydic }
}

export function removedic(mydic_index) {
    // console.log('index : ', mydic_index)
    return { type: REMOVE, mydic_index }
}


//middlewares
export const loadDicFB = () => {
    return async function (dispatch) {
        const dic_data = await getDocs(collection(db, 'mydicts'));
        // console.log('loadFB')

        let dic_list = [];

        dic_data.forEach((b) => {
            // console.log(b)
            dic_list.push({ ...b.data(), id: b.id })
        })

        // console.log(dic_list)
        dic_list.sort((a, b) => a.dindx - b.dindx)

        dispatch(loaddic(dic_list))
    }
}

export const addDicFB = (dic) => {
    return async function (dispatch) {

        console.log(dic)

        let new_dic = {
            dname: dic.dname,
            ddesc: dic.ddesc,
            dexam: dic.dexam,
            dindx: dic.dindx,
            dchek: dic.dchek
        }

        addDoc(collection(db, 'mydicts'), new_dic)

        dispatch(createdic(dic, new_dic))
    }
}

export const checkDicFB = (dic) => {
    return async function (dispatch) {

        const docRef = doc(db, 'mydicts', dic.id)
        updateDoc(docRef, { dchek: !dic.dchek })

        dispatch(checkdic(dic))
    }
}

export const removeDicFB = (dic) => {
    return async function (dispatch) {

        // console.log(dic)

        const docRef = doc(db, 'mydicts', dic.id)
        deleteDoc(docRef)

        dispatch(removedic(dic))
    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case LOAD: {
            // console.log('rload')
            return { list: action.dic_list }
        }
        case CREATE: {
            const new_dic = {
                dname: action.mydic.dname,
                ddesc: action.mydic.ddesc,
                dexam: action.mydic.dexam,
                dindx: action.mydic.dindx,
                dchek: action.mydic.dchek
            }
            
            const new_list = [...state.list, new_dic]

            return { list: new_list }
        }

        case CHECK: {
            // console.log(action.mydic.dchek)

            let new_list = state.list.map((v, i) => {
                if (v.dindx == action.mydic.dindx) {
                    v.dchek = !v.dchek
                }
                return v
            })
            console.log(new_list)

            return { list: new_list }
        }

        case UPDATE: {

        }

        case REMOVE: {
            let new_list = state.list.filter((v, i) => {
                console.log(v.dindx, action.mydic_index.dindx)
                return (v.dindx != parseInt(action.mydic_index.dindx))
            })

            console.log(new_list)

            return { list: new_list }
        }
        default: return state;
    }
}





// Action Creators
// export function loadWidgets() {
//     return { type: LOAD };
// }

// export function createWidget(widget) {
//     return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
//     return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//     return { type: REMOVE, widget };
// }

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }