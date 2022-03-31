import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import styled from 'styled-components'

import { loadDicFB } from './redux/modules/dic';
import Card from "./Card"

export default function Home(props) {

    const data = useSelector((state) => state.storedic.list)

    let nav = useNavigate()

    const dispatch = useDispatch();

    function goDetail() {

        let index = 0

        data.map((v) => {
            index = index < v.dindx ? v.dindx : index
        })

        console.log(index)

        // index = data.length == 0 ? 0 : (parseInt(data[data.length-1].dindx) + 1)

        nav('/detail/' + (parseInt(index) + 1))
    }

    React.useEffect(() => {
        dispatch(loadDicFB())
    }, [])

    return (
        <CardContainer>
            {data.length == undefined ? console.log('?') : data.map((v, i) => {
                let idx = data.findIndex((w) => {
                    // console.log('d:', v.dname, 'v:', v.dchek, 'w:', w.dchek)
                    // console.log(data)
                    console.log(i, w.dindx, v.dindx)
                    return w.dindx == v.dindx
                })

                if (idx == -1) return null
                return <Card key={i} arrdata={data[idx]}>
                    <div>{data[idx].dname}</div>
                    <div>{data[idx].ddesc}</div>
                    <div>{data[idx].dexam}</div>
                </Card>
            })}

            <AddCard onClick={goDetail} />
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