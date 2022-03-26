import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import styled from 'styled-components'

import { loaddic, loadDicFB } from './redux/modules/dic';
import Card from "./Card"
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';

export default function Home(props) {

    const data = useSelector((state) => state.storedic.list)
    const [arr, setArr] = useState([])

    let nav = useNavigate()

    let abc = []

    function goDetail() {
        nav('/detail/' + arr.length)
    }

    React.useEffect(async () => {

        const query = await getDocs(collection(db, 'mydicts'))
        // console.log(query)

        query.forEach((doc) => {
            // console.log(...arr, doc)
            let a = { arr, ...doc.data() }
            abc.push(doc.data())
            // console.log(a)
            // setArr(abc)
        })

        // console.log('->', arr, cc, abc)

        abc.map((v, i)=>{
            abc.findIndex((v, i)=>{
                console.log()
            })
        })

        setArr(abc)

    }, [])

    return (
        <CardContainer>
            <Head>안녕</Head>
            {arr.length == 0 ? console.log('?') : arr.map((v, i) => {
                return <Card key={i} arrdata={arr[i]}>
                    <div>{arr[i].dname}</div>
                    <div>{arr[i].ddesc}</div>
                    <div>{arr[i].dexam}</div>
                </Card>
            })}

            <AddCard onClick={goDetail} />
        </CardContainer>
    )
}


const Head = styled.div`
    width: 100vw;
    height: 100px;
    position: fixed;
    font-size: 50px;

    top: 0px;
    background-color: #ddd;
`


const CardContainer = styled.div`
    min-height: 100vh;
    padding-top: 160px;
    align-items: center;
    justify-content: center;
    
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    background-color: #555;
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