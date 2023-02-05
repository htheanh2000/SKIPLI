import { useDispatch } from 'react-redux'
import IM_1 from '../../../assets/image/1.png'
import Button from '../../../components/button'
import Image from '../../../components/image'
import Input from '../../../components/input'
import Page from '../../../layouts/page'
import style from './style.module.scss'
const HomePage = () => {
    const dispatch = useDispatch()
    const handleSubmit = () => {
        console.log('dispatch')
        dispatch({type: 'USER_CREATE_NEW_ACCESS_CODE', payload: '123456'})
    }
    return (
        <Page className={style.wrapper}>
            <h1>Verify your phone number</h1>
            <h4>You will need to verify you phone number to continue</h4>
            <Image src={IM_1} alt='banner' />
            <Input  />
            <Button className={style.button} onClick={() => handleSubmit()}>Submit</Button>
        </Page>
    )
}

export default HomePage