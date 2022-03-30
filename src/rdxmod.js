import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";


const LOAD = 'dic/LOAD';
const CREATE = 'dic/CREATE';
const CHECK = 'dic/CHECK';
const UPDATE = 'dic/UPDATE';
const REMOVE = 'dic/REMOVE';



const initialState = {
    list: []
}



export function loadDic(dic) {
    // console.log('load:')
    return { type: LOAD, dic }
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

        const fbData = await getDocs(collection(db, 'mydicts'))

        console.log('loadFB')
        // console.log(fbData.docs)

        const new_list = fbData.docs.map((v)=>{
            const new_dic = {
                ...v.data(),
                id: v.id
            }

            return new_dic
        })

        // console.log(new_list)

        dispatch(loadDic(new_list))
    }
}

export const addDicFB = (dic) => {
    return async function (dispatch) {

        addDoc(collection(db, 'mydicts'), dic)

        // console.log('addFB', dic)

        dispatch(addDic(dic))
    }
}

export const checkDicFB = (dic) => {
    return async function (dispatch) {

        const docRef = await doc(db, 'mydicts', dic.id)
        updateDoc(docRef, { check: !dic.check })

        console.log('checkFB', dic)

        dispatch(checkDic(dic))
    }
}

export const updateDicFB = (dic) => {
    return async function (dispatch) {

        const docRef = await doc(db, 'mydicts', dic.id)
        updateDoc(docRef, { 
            name: dic.name,
            desc: dic.desc,
            exam: dic.exam
         })

        console.log('updateFB', dic)

        dispatch(updateDic(dic))
    }
}

export const removeDicFB = (dic) => {
    return async function (dispatch) {

        const docRef = await doc(db, 'mydicts', dic.id)
        
        deleteDoc(docRef)

        console.log('removeFB', dic)

        dispatch(removeDic(dic))
    }
}



export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case LOAD: {
            // state = initialState;
            // console.log('rdc-LOAD')
            console.log('state:', action.dic)
            const new_list = action.dic
            return { list: new_list }
        }
        
        case CREATE: {
            // console.log('rdc-CREATE')
            let new_dic = {
                name: action.dic.name,
                desc: action.dic.desc,
                exam: action.dic.exam,
                check: action.dic.check,
                index: action.dic.index
            }
            const new_list = [...state.list, new_dic]
            // console.log(new_list)

            return { list: new_list }
        }

        case CHECK: {
            console.log('rdc-CHECK')
            // console.log(action.dic)
            const new_list = state.list.map((v) => {
                if (v.index == action.dic.index) {
                    let new_dic = {
                        ...v, check: !v.check
                    }
                    return new_dic
                }
                return v
            })

            // console.log(new_list)

            return { list: new_list }
        }

        case UPDATE: {
            // console.log('rdc-UPDATE')
            // console.log(action.dic)

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
            // console.log(new_list)


            return { list: new_list }
        }

        case REMOVE: {
            // console.log('rdc-REMOVE')
            // console.log(action.dic)
            const new_list = state.list.filter((v) => {
                return v.index != action.dic.index
            })
            console.log(new_list)

            return { list: new_list }
        }
        default: return state
    }
}