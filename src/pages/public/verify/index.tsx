import { SetStateAction, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import IM_1 from '../../../assets/image/1.png'
import Button from '../../../components/button'
import Image from '../../../components/image'
import Input, { InputRef } from '../../../components/input'
import Page from '../../../layouts/page'
import style from './style.module.scss'
import {useAppSelector} from '../../../store/hook'
import { useNavigate } from "react-router-dom";

const VerifyPage = () => {
    const dispatch = useDispatch()
    const {user} = useAppSelector(state => state.user)
    const inputRef = useRef<InputRef>(null)
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
       if(!user) {
         navigate('/')
       } 
    },[])
    
    const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
      setCode(event.target.value);
    };
    const handleSubmit = () => {
        const value = inputRef.current?.getValue()
        dispatch({type: 'VERIFY_ACCESS_CODE', payload: {accessCode: code, user}})
    }
    return (
        <Page className={style.wrapper}>
            <h1>Verify your phone number</h1>
            <h4>You will need to verify you phone number to continue</h4>
            <Image src={IM_1} alt='banner' />
                <form className="code-form">
                <input
                type="text"
                maxLength={6}
                pattern="[0-9]*"
                value={code}
                onChange={handleChange}
                placeholder="Enter 6-digit code"
            />
            </form>
            <Button className={style.button} onClick={() => handleSubmit()}>Submit</Button>
        </Page>
    )
}

export default VerifyPage