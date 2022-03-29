import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'



export default function Card() {

    let nav = useNavigate()

    return (
        <CardBox>
            <Btns>
                <Btn></Btn>
                <Btn></Btn>
                <Btn></Btn>
            </Btns>
            <Desk>
                <DeskLine>a</DeskLine>
                <DeskLine>b</DeskLine>
                <DeskLine>c</DeskLine>
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

    background-color: ${(props)=>(props.check == false ? '#6b6' : '#676')};

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