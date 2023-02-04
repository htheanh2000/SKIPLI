import cn from "classnames";
import { ReactNode } from "react"
import style from './style.module.scss';
type PropsType = {
    children?: ReactNode
    className?: string
}

const Page = (props: PropsType) => {
    const { children } = props;
    return (
        <div className={cn(style.container, props.className)}>{children}</div>
    )
}

export default Page