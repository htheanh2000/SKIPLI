import { forwardRef, HTMLInputTypeAttribute, useImperativeHandle, useRef } from 'react'
import cn from "classnames"
import style from './style.module.scss'
type Props = {
  placeholder?: string
  className?: string
  name?: string
}

export type InputRef =  {
    getValue: () => string
}

const Input = forwardRef((props: Props, ref) => {
  const { placeholder, className, name } = props
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
          className={cn(style.input)}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
})

export default Input
