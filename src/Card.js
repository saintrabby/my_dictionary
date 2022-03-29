import styled from 'styled-components'
import { useDispatch } from 'react-redux';

import { createdic, loadDicFB, removedic, removeDicFB, checkDicFB } from './redux/modules/dic'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Card({ arrdata }) {
    const [check, setCheck] = useState(arrdata.dchek)

    const dispatch = useDispatch();

    let nav = useNavigate();

    function checKing() {
        dispatch(checkDicFB(arrdata))
        // console.log(arrdata.dchek)
        // setCheck(arrdata.dchek)
    }

    function reUpCard() {
        nav('/cardrename/' + arrdata.dindx)
    }

    function delCard() {
        dispatch(removeDicFB(arrdata))
    }

    useEffect(()=>{
        // console.log(arrdata)
    }, [])

    return (
        <CardBox check={check}>
            <Btns>
                <Btn onClick={delCard}>3</Btn>
                <Btn onClick={reUpCard}>2</Btn>
                <Btn onClick={checKing}>1</Btn>
            </Btns>

            <Desk>
                <DeskLine>단어 : {arrdata.dname}</DeskLine>
                <DeskLine>해석 : {arrdata.ddesc}</DeskLine>
                <DeskLine><span style={{color:'#66e'}}>예시 : {arrdata.dexam}</span></DeskLine>
            </Desk>

        </CardBox>

    )
}


const CardBox = styled.div`
    width: 400px;
    height: 300px;
    margin: 20px;
    border-radius: 20px;
    /* background-color: #6b6; */

    background-color: ${(props)=>(props.check == false ? '#6b6' : '#676')}

`

const Btns = styled.div`
    display: flex;
    flex-direction: row-reverse;
`

const Btn = styled.button`
    width: 60px;
    height: 30px;
    margin: 10px;

    float: right;
`

const Desk = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    float: left;
    font-size: 20px;
`

const DeskLine = styled.div`
    margin: 20px;
    text-align: left;
`