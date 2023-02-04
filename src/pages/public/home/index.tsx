import IM_1 from '../../../assets/image/1.png'
import Button from '../../../components/button'
import Image from '../../../components/image'
import Input from '../../../components/input'
import Page from '../../../layouts/page'
import style from './style.module.scss'
const HomePage = () => {
    return (
        <Page className={style.wrapper}>
            <h1>Verify your phone number</h1>
            <h4>You will need to verify you phone number to continue</h4>
            <Image src={IM_1} alt='banner' />
            <Input  />
            <Button className={style.button}>Submit</Button>
        </Page>
    )
}

export default HomePage