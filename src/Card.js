import styled from 'styled-components'
import { useDispatch } from 'react-redux';

import { createdic, removedic } from './redux/modules/dic'
import { useNavigate } from 'react-router-dom';

export default function Card({ arrdata }) {
    const dispatch = useDispatch();

    let nav = useNavigate();

    // console.log(arrdata)

    function checKing() {

    }

    // function goDetail() {
    //     nav('/detail' + props.rdata)
    // }

    function delCard() {

    }

    return (
        <CardBox>
            <Btns>
                <Btn onClick={delCard}>3</Btn>
                {/* <Btn onClick={goDetail}>2</Btn> */}
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
    background-color: #6b6;

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