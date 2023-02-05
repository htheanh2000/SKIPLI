import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import IM_1 from '../../../assets/image/1.png'
import Button from '../../../components/button'
import Image from '../../../components/image'
import Input, { InputRef } from '../../../components/input'
import Page from '../../../layouts/page'
import style from './style.module.scss'
const HomePage = () => {
    const dispatch = useDispatch()
    const inputRef = useRef<InputRef>(null)
    const handleSubmit = () => {
        const value = inputRef.current?.getValue()
        dispatch({type: 'USER_CREATE_NEW_ACCESS_CODE', payload: value})
    }
    return (
        <Page className={style.wrapper}>
            <h1>Verify your phone number</h1>
            <h4>You will need to verify you phone number to continue</h4>
            <Image src={IM_1} alt='banner' />
            <Input ref={inputRef} />
            <Button className={style.button} onClick={() => handleSubmit()}>Submit</Button>
        </Page>
    )
}

export default HomePage