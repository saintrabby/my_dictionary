import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Card from './Card'
import { loadDicFB } from './rdxmod'



export default function Home() {

    const rdxData = useSelector((sel)=>sel)

    const dispatch = useDispatch()

    console.log('home:', rdxData)

    const nav = useNavigate()

    function goWrite() {
        nav('/write')
    }

    useEffect(()=>{
        dispatch(loadDicFB())
    }, [])

    return (
        <CardContainer>
            <Card></Card>
            <AddCard onClick={goWrite}/>
        </CardContainer>
    )
}





const CardContainer = styled.div`
    min-height: 100vh;
    padding-top: 160px;
    align-items: center;
    justify-content: center;
    
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const AddCard = styled.button`
    width: 50px;
    height: 50px;
    position: fixed;
    border: 1px solid #eaa;
    background-color: #eaa;
    border-radius: 30px;
    
    right: 0px;
    bottom: 0px;
    margin: 20px;
`

const Test = styled.div`
    font-size: 10px;
    background-color: #fff;
`
