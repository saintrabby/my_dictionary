import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

import store from './configStore'
import { updateDicFB } from './rdxmod'

export default function ReWrite(props) {

    const nav = useNavigate()

    const dispatch = useDispatch()
    
    let nameref = useRef()
    let descref = useRef()
    let examref = useRef()

    const rdxData = store.getState().storedic.list

    const param = useParams()

    console.log(rdxData, param)

    function rewrite() {
        let new_dic = {
            name: nameref.current.value,
            desc: descref.current.value,
            exam: examref.current.value,
            check: rdxData.check,
            index: parseInt(param.index)
        }

        dispatch(updateDicFB(new_dic))
        nav('/')
    }

    function goBack() {
        nav('/')
    }

    return (
        <Wrap>
            <CardBox>
                <OldData>
                    {rdxData.map((v, i) => {
                        if (v.index == param.index) {
                            return (
                                <div key={i}>
                                    <p>현재단어 : {v.name}</p>
                                    <p>현재설명 : {v.desc}</p>
                                    <p>현재예시 : {v.exam}</p>
                                </div>
                            )
                        }
                    })}
                </OldData>
                <Inputs>
                    <Input ref={nameref}></Input>
                    <Input ref={descref}></Input>
                    <Input ref={examref}></Input>
                </Inputs>
                <ButtonSet>
                    <New_btn onClick={rewrite}>수정</New_btn>
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



const OldData = styled.div`
    width: 300px;
    height: 130px;
    font-size: 16px;
    color: gray;
    background-color: #9d9;
    border-radius: 20px;

    margin: 20px auto;
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
    margin-top: 20px;
    text-align: center;
    :focus { outline: none; }
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