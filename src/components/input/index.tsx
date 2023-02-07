import { forwardRef, HTMLAttributes, useImperativeHandle, useRef } from 'react'
import cn from "classnames"
import style from './style.module.scss'
type Props = {
  placeholder?: string
  className?: string
  name?: string,
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputRef =  {
    getValue: () => string
}

const Input = forwardRef((props: Props, ref) => {
  const { placeholder, className, name,type, ...rest } = props
  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => ({
    getValue: () => {
      return inputRef.current?.value
    }
  }))

  return (
    <div className={`${className}`}>
      <label htmlFor={name} >
        {name}
      </label>
      <div className={cn(style.wrapper)}>
        <input
          id={name}
          name={name}
          ref={inputRef}
          type={type}
          className={cn(style.input)}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  )
})

export default Input
