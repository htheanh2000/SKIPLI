import type { ReactNode } from 'react';
import style from './style.module.scss'
import cn from "classnames";


type TProps = {
  className?: string;
  children?: ReactNode;
  type?: 'primary' | 'secondary' ;//TODO: Add 2 type in needed 'white' | 'disable' ;
  size?: 'md' | 'lg' ;
  onClick?: () => void;
};

const Button = (props: TProps) => {
  const {
    children,
    type = 'primary',
    onClick,
    className = '',
    size = 'md',
  } = props;

  return (
    <button
      onClick={onClick}
      className={cn(style.button ,style[`button--${type}`] , style[`button--${size}`], className)}
    >
      {children}
    </button>
  );
};

export default Button;
