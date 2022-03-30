import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { addDicFB } from './rdxmod';



export default function Write() {

    const param = useParams()

    console.log(param)

    let nameref = useRef()
    let descref = useRef()
    let examref = useRef()

    let dispatch = useDispatch()

    let nav = useNavigate();

    function goBack() {
        nav('/')
    }

    function okEvent() {
        // console.log(nameref.current.value)
        // console.log(descref.current.value)
        // console.log(examref.current.value)

        let dic = {
            name: nameref.current.value,
            desc: descref.current.value,
            exam: examref.current.value,
            check: false,
            index: parseInt(param.index)
        }

        dispatch(addDicFB(dic))
        nav('/')
    }

    return (
        <Wrap>
            <CardBox>
                <Inputs>
                    <Input ref={nameref}></Input>
                    <Input ref={descref}></Input>
                    <Input ref={examref}></Input>
                </Inputs>

                <ButtonSet>
                    <New_btn onClick={okEvent}>ㅇ</New_btn>
                    <New_btn onClick={goBack}>취소</New_btn>
                </ButtonSet>
            </CardBox>
        </Wrap>
    )
}







const Wrap = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`



const CardBox = styled.div`
    width: 400px;
    height: 700px;
    
    margin-top: 100px;
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
    margin: 100px 30px;
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
    margin-top: 60px;
    text-align: center;
    :focus { outline: none; }
`
