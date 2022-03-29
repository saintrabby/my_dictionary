import styled from 'styled-components'

import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { loadDicFB, checkDicFB } from "./redux/modules/dic"


export default function CardRename() {

    const data = useSelector((state) => state.storedic.list)

    let param = useParams()

    let nameInput = useRef();
    let descInput = useRef();
    let examInput = useRef();

    // param = data.find((v, i)=>{
    //     return param
    // })

    // console.log(data)

    let nav = useNavigate()

    let dispatch = useDispatch()

    function crevent() {
        // console.log(nameInput.current.value)
        let dic = { dname: nameInput.current.value, ddesc: descInput.current.value, dexam: examInput.current.value, dindx: param }

        console.log(dic)

        dispatch(checkDicFB(dic))
        BackHome()
    }

    function BackHome() {
        nav('/')
    }

    useEffect(() => {

        dispatch(loadDicFB())
        // dispatch(updateDicFB(param))

    }, [])


    return (
        <Wrap>
            <CardBox>
                {data.length == undefined ? console.log('??') : data.map((v, i) => {
                    if (v.dindx == param.data) {
                        return (
                            <OldData key={i}>
                                <p>현재단어 : {v.dname}</p>
                                <p>현재해석 : {v.ddesc}</p>
                                <p>현재예시 : {v.dexam}</p>
                            </OldData>
                        )
                    }
                })}
                <Inputs>
                    <p>바꿀단어</p><Input ref={nameInput}></Input>
                    <p>바꿀해석</p><Input ref={descInput}></Input>
                    <p>바꿀예시</p><Input ref={examInput}></Input>
                </Inputs>

                <ButtonSet>
                    <New_btn onClick={crevent}>수정 !</New_btn>
                    <New_btn onClick={BackHome}>취소 !</New_btn>
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
    height: 800px;
    
    margin-top: 100px;
    border-radius: 20px;
    background-color: #6b6;

    display: flex;
    flex-direction: column;
`



const OldData = styled.div`
    width: 300px;
    height: 120px;
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
    margin: 50px 10px;
`