// widgets.js

import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase'

// import { db } from '../../firebase';
// import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
// import { async } from '@firebase/util';

// Actions
const LOAD = 'dic/LOAD';
const CREATE = 'dic/CREATE';
// const UPDATE = 'dic/UPDATE';
const REMOVE = 'dic/REMOVE';



const initialState = {
    is_loaded: false,
    list: getDocs(collection(db, 'mydicts'))
}

export function loaddic(dic_list) {
    return { type: LOAD, dic_list }
}

export function createdic(mydic) {
    return { type: CREATE, mydic }
}

// export function updatedic(mydic_index) {
//     return { type: UPDATE, mydic_index }
// }

export function removedic(mydic_index) {
    console.log('index : ', mydic_index)
    return { type: REMOVE, mydic_index }
}


//middlewares
export const loadDicFB = () => {
    return async function (dispatch) {
        const dic_data = await getDocs(collection(db, 'mydicts'));
        // console.log(dic_data)

        let dic_list = [];

        dic_data.forEach((b)=>{
            // console.log(b.data())
            dic_list.push({...b})
        })

        dispatch(loaddic(dic_list))
    }
}

export const addDicFB = (dic) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, 'mydicts'), dic);
        console.log((await getDoc(docRef)).data());
    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case LOAD: {
            return { list: action.dic_list }
        }
        case CREATE: {
            console.log(action.mydic)
            // const new_dic = {
            //     dname : action.mydic[0],
            //     ddesc : action.mydic[1],
            //     dexam : action.mydic[2]
            // }
            // const new_list = [...state.list, new_dic]
            // addDoc(collection(db, 'mydicts'), new_dic)
            
            // console.log(new_list)
            // return { list : new_list }
            return null
        }
        // case 'dic/UPDATE': {
        //     const new_lis = state.list.map((v, i)=>{
        //         if(parseInt(action.dic_index) === i){
        //             return {...v, score: 0}
        //         }else {
        //             return v
        //         }
        //     })
        // }

        case REMOVE: {
            let new_list = state.list.filter((v, i)=>{
                // console.log(v, i, action.mydic_index)
                return (i !== parseInt(action.mydic_index))
            })
            console.log(new_list)
            return { list : new_list }
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