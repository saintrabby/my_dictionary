
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { addDicFB, removedic } from './redux/modules/dic';

export default function Detail() {
    

    let ind = useParams().index;

    let pdata = useParams().index;

    let nameInput = useRef();
    let descInput = useRef();
    let examInput = useRef();

    // console.log(pdata)

    // onkeydown = (e) => (e.key >= 0 ? console.log(nameInput) : null)

    const dispatch = useDispatch();

    let nav = useNavigate();

    function crevent() {
        // console.log(nameInput.current.value)
        let dic = {dname : nameInput.current.value, ddesc : descInput.current.value, dexam : examInput.current.value, dindx : ind}
        // dispatch(createdic(dic));

        // nameInput.current.value = ''
        // descInput.current.value = ''
        // examInput.current.value = ''

        console.log(dic)

        dispatch(addDicFB(dic))
        BackHome()
    }

    function BackHome() {
        nav('/')
    }
    
    let db_data_list = []

    useEffect(async () => {
        // let query = await getDocs(collection(db, 'mydicts'))

        // query.forEach((v) => {
        //     let doc_id = v.id
        //     let dname = v.data().dname
        //     let ddesc = v.data().ddesc
        //     let dexam = v.data().dexam

        //     console.log(v)

        //     // let put = { doc_id, dname, ddesc, dexam }

        //     // db_data_list.unshift(put)
        // })

        // db_data_list.map((v)=>{
        //     console.log(v)
        // })

        // console.log(db_data_list)


        //컬렉션 없으면 생성
        // let week_arr = ['일', '월', '화', '수', '목', '금', '토']
        // week_arr.map((v)=>{
        //     console.log(v)
        //     addDoc(collection(db, 'mydicts'), {week: v, score: 0})
        // })



        // 삭제
        // if (query.docs[0] !== undefined) {
        //     console.log(query.docs[0].id)
        //     const docRef = doc(db, 'mydicts', query.docs[0].id)
        //     // deleteDoc(docRef)
        // }

        // query.docs.map((v)=>{
        //     const docRef = doc(db, 'mydicts', v.id)
            
        //     deleteDoc(docRef)
        // })



        // //수정
        // db_data_list.map((v, i) => {
        //     if (v.week === thisDay.weekDay) {
        //         const docRef = doc(db, 'mydicts', v.doc_id)
        //         if (num >= 0 && num < 8) {
        //             db_data_list[i].score = num
        //             updateDoc(docRef, { score: num })
        //             // console.log(db_data_list[i])
        //         }
        //     }
        // })
        // const docRef = doc(db, 'mydicts', 'KOwVsoTahKzqTfknoVFe')
        // updateDoc(docRef, {score: 1})



        //추가
        // addDoc(collection(db, 'mydicts'), {week: "목", score: 0})



        //가져오기
        // console.log(query.docs[0].id)
        // console.log(query.docs[0]._document.data.value.mapValue.fields.score)

        // query.forEach((doc) => {
        //     console.log(doc.id)
        // })




        // let f = db_data_list.find((v) => v.week === thisDay.weekDay)
        // console.log(f)
        // console.log(db_data_list[0])

    });

    return (
        <Test>
            <CardBox>
                <Inputs>
                    <p>단어</p><Input ref={nameInput}/>
                    <p>해석</p><Input ref={descInput}/>
                    <p>예시</p><Input ref={examInput}/>
                </Inputs>

            <ButtonSet>
                <New_btn onClick={crevent}>만들기 !</New_btn>
                <New_btn onClick={BackHome}>취소 !</New_btn>
                {/* <button onClick={rmevent}>remove</button> */}
                </ButtonSet>
            </CardBox>

        </Test>
    )
}



const Test = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    background-color: #555;
`



const CardBox = styled.div`
    width: 400px;
    height: 800px;
    
    border-radius: 20px;
    background-color: #6b6;

    display: flex;
    flex-direction: column;
`


const ButtonSet = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
`


const New_btn = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    border: 0px;
    margin: 50px 10px;
`


const Inputs = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    margin-top: 50px;
`

const Input = styled.input`
    width: 300px;
    height: 50px;
    font-size: 20px;
    border-radius: 20px;
    border: 0px;
    text-align: center;
    :focus { outline: none; }
`