import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'



export default function Write() {

    let nav = useNavigate();

    function goBack() {
        nav('/')
    }

    return (
        <Wrap>
            <CardBox>
                <Inputs>
                    <Input></Input>
                    <Input></Input>
                    <Input></Input>
                </Inputs>

                <ButtonSet>
                    <New_btn>ㅇ</New_btn>
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
    height: 800px;
    
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
