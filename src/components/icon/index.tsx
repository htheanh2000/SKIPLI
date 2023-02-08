import classNames from 'classnames'
import heart from '../../assets/icon/heart.svg'
import outline_heart from '../../assets/icon/outline-heart.svg'
import style from './style.module.scss'
type Props = {
  color?: string // default: black
  name: IconName
  className?: string
  onClick?: () => void
  size?: keyof typeof IconSize
}

type IconName = keyof typeof icons

const icons = {
  heart: heart,
  'outline-heart': outline_heart
}

const IconSize = {
  sx: 16,
  sm: 24, // default size
  md: 32,
  lg: 40,
}

const Icon = (props: Props) => {
  const { name, size = 'sm', className, onClick} = props

  return (
    <div onClick={onClick}>
            <img
                src={icons[name]}
                className={classNames(style.icon,className)}
                alt={`Icon ${name}`}
                width={IconSize[size]}
                height={IconSize[size]}
            />
    </div>
  )
}

export type { IconName }

export default Icon
